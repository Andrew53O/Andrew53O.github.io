
// get the every faq question
const faq_toogleDown_element = document.querySelectorAll(".faq-one_block");


// using two times of callback function + anon function
/*
    first callback function is the (question) => question.addEventListener("click"), ()=> .......

    second callback function is ()=> { const answer ..}

    anon function is using the arrow function for more consice typing

*/

faq_toogleDown_element.forEach((question) =>
{
    question.addEventListener("click", ()=> {
        // get the answer of the question
        const answer = question.querySelector(".faq_a");
        const icon = question.querySelector(".icon");

        answer.classList.toggle("see_answer");
        icon.classList.toggle("see_answer");

    })

})
