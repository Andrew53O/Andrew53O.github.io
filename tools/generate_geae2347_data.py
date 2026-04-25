#!/usr/bin/env python3
"""Generate public, name-free GEAE2347 attendance data from a rollcall XLSX."""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET


NS = {"main": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
REL_ID = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"


def column_index(cell_ref: str) -> int:
    letters = "".join(ch for ch in cell_ref if ch.isalpha())
    value = 0
    for letter in letters:
        value = value * 26 + ord(letter.upper()) - 64
    return value - 1


def normalize_target(target: str) -> str:
    target = target.lstrip("/")
    return target if target.startswith("xl/") else f"xl/{target}"


def read_shared_strings(workbook: ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in workbook.namelist():
        return []

    root = ET.fromstring(workbook.read("xl/sharedStrings.xml"))
    return [
        "".join(text.text or "" for text in item.findall(".//main:t", NS))
        for item in root.findall("main:si", NS)
    ]


def cell_value(cell: ET.Element, shared_strings: list[str]) -> str:
    value = cell.find("main:v", NS)
    if value is None:
        inline_text = cell.find("main:is/main:t", NS)
        return inline_text.text if inline_text is not None and inline_text.text else ""

    raw = value.text or ""
    if cell.attrib.get("t") == "s" and raw.isdigit():
        index = int(raw)
        return shared_strings[index] if index < len(shared_strings) else raw
    return raw


def row_values(row: ET.Element, shared_strings: list[str]) -> list[str]:
    values: list[str] = []
    for cell in row.findall("main:c", NS):
        index = column_index(cell.attrib.get("r", "A1"))
        while len(values) < index:
            values.append("")
        values.append(cell_value(cell, shared_strings).strip())
    return values


def read_attendance_sheet(path: Path) -> list[list[str]]:
    with ZipFile(path) as workbook:
        shared_strings = read_shared_strings(workbook)
        workbook_xml = ET.fromstring(workbook.read("xl/workbook.xml"))
        rels_xml = ET.fromstring(workbook.read("xl/_rels/workbook.xml.rels"))
        rel_map = {
            relation.attrib["Id"]: normalize_target(relation.attrib["Target"])
            for relation in rels_xml
        }

        sheets = workbook_xml.findall("main:sheets/main:sheet", NS)
        selected_sheet = next(
            (sheet for sheet in sheets if sheet.attrib.get("name") == "Attendance"),
            sheets[0],
        )
        sheet_xml = ET.fromstring(workbook.read(rel_map[selected_sheet.attrib[REL_ID]]))
        return [
            row_values(row, shared_strings)
            for row in sheet_xml.findall("main:sheetData/main:row", NS)
        ]


def find_header_index(headers: list[str], name: str) -> int:
    normalized = name.lower()
    for index, header in enumerate(headers):
        if header.strip().lower() == normalized:
            return index
    raise ValueError(f"Could not find required column: {name}")


def build_public_data(rows: list[list[str]], source_name: str) -> dict:
    if not rows:
        raise ValueError("Workbook does not contain any rows.")

    headers = rows[0]
    user_index = find_header_index(headers, "User No.")
    class_index = find_header_index(headers, "Class")

    statistic_index = next(
        (
            index
            for index, header in enumerate(headers)
            if index > class_index and header.startswith("Statistic of")
        ),
        len(headers),
    )
    date_headers = headers[class_index + 1 : statistic_index]
    if not date_headers:
        raise ValueError("Could not find attendance date columns.")

    students = []
    for row in rows[1:]:
        student_id = row[user_index] if len(row) > user_index else ""
        if not student_id:
            continue
        if student_id.startswith("Statistic of") or student_id == "Notes":
            continue

        records = []
        for index in range(class_index + 1, statistic_index):
            records.append(row[index] if len(row) > index else "")

        students.append({"id": student_id, "records": records})

    return {
        "course": {
            "code": "GEAE2347",
            "name": "GEAE2347 Attendance",
        },
        "source": source_name,
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "dates": date_headers,
        "students": students,
    }


def write_data_file(data: dict, output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    json_text = json.dumps(data, ensure_ascii=False, indent=2)
    output.write_text(
        "window.GEAE2347_ATTENDANCE_DATA = "
        + json_text
        + ";\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate public GEAE2347 attendance data without student names."
    )
    parser.add_argument(
        "input",
        nargs="?",
        default="rollcalls_26480.xlsx",
        help="Source XLSX file. Default: rollcalls_26480.xlsx",
    )
    parser.add_argument(
        "--output",
        default="geae2347-attendance/attendance-data.js",
        help="Output JavaScript data file.",
    )
    args = parser.parse_args()

    input_path = Path(args.input)
    output_path = Path(args.output)

    data = build_public_data(read_attendance_sheet(input_path), input_path.name)
    write_data_file(data, output_path)
    print(
        f"Wrote {output_path} with "
        f"{len(data['students'])} students and {len(data['dates'])} dates."
    )


if __name__ == "__main__":
    main()
