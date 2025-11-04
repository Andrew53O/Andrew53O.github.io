# Video Titles Update - Instructions for Adding Links

## Summary of Changes

This update addresses two requirements from the issue:

### 1. Environment Variable (.env) Configuration ✅

**Problem**: The admin password needs to be stored in a `.env` file, but this file shouldn't be pushed to GitHub.

**Solution Implemented**:
- The `.env` file is already excluded from Git via `.gitignore` (lines 9-10)
- Added comprehensive documentation in both `ADMIN_GUIDE.md` and `README.md` explaining:
  - How to copy `.env.example` to create your local `.env` file
  - How to set a custom admin password
  - Why the `.env` file won't be pushed to GitHub
  - How to configure environment variables for production deployment (GitHub Actions, Netlify, Vercel, etc.)

**What You Need to Do**:
1. Copy the example file: `cp .env.example .env`
2. Edit `.env` and change `PUBLIC_ADMIN_PASSWORD` to your secure password
3. The `.env` file will stay on your local machine and never be pushed to GitHub
4. For production, set the environment variable in your hosting platform's settings

### 2. Video Titles Added ✅

**Created 40 new video YAML files** in `src/content/videos/` with IDs 1-40 (except ID 28 which was not in the original list):

All videos have been created with:
- Proper ID numbers (1-27, 29-40)
- Chinese and English titles as provided
- Placeholder video URL: `https://www.youtube.com/embed/PLACEHOLDER`
- Description: "Video link will be added soon"
- Appropriate tags based on content (Woodball, Chinese, English, Training, Competition, Highlights, World Masters Games, Conference, Educational)

**What You Need to Do Next**:

To add the actual video links, edit each file in `src/content/videos/` and replace the placeholder:

```yaml
# Current (placeholder):
videoUrl: "https://www.youtube.com/embed/PLACEHOLDER"

# Change to your actual YouTube video ID:
videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
```

### Video Files Created

The following video files have been created:

- video-01.yml: 國中校隊訓練方法（上）
- video-02.yml: 國中校隊訓練方法（下）
- video-03.yml: 木球是一桿過門？一桿進洞？
- video-04.yml: 擊球10秒的精神
- video-05.yml: 當教練成為被告：教練的責任與自保（上）
- video-06.yml: 當教練成為被告：教練的責任與自保（下）
- video-07.yml: 蘇教練的見解：球黏到球門柱要做Mark嗎？
- video-08.yml: 木球場為什麼設計12球道？
- video-09.yml: 木球不是木頭材質就不是木球了嗎？
- video-10.yml: Woodball Highlights
- video-11.yml: 全國賽第1天結束應該要冰敷還熱敷？
- video-12.yml: 疲勞是不是傷害？
- video-13.yml: Woodball Highlights
- video-14.yml: 籌備「2025年墾丁白沙灣迎瘋季」
- video-15.yml: 來墾丁白沙灣玩木球吧
- video-16.yml: Woodball Serve Highlights
- video-17.yml: Woodball Gate-in Highlights
- video-18.yml: 114年全中運決賽選手-楊博崴的每一桿
- video-19.yml: Woodball Gate-in Highlights
- video-20.yml: 攻門練習方法
- video-21.yml: 揮桿動作的教學策略
- video-22.yml: 如何透過訓練提升心理素質？
- video-23.yml: 社團學生的教學方法
- video-24.yml: 比賽中球道上的石頭可以移除嗎？
- video-25.yml: 運動科學告訴你：如何選擇運動鞋（上）
- video-26.yml: 運動科學告訴你：如何選擇運動鞋（下）
- video-27.yml: Woodball Serve Highlights
- video-29.yml: World Masters Games 2025 Taipei & New Taipei City Vlog
- video-30.yml: Woodball Highlights – World Masters Games 2025
- video-31.yml: 陳姵蓁 | 2025雙北世界壯年運動會研討會 World Masters Games Conference 2025
- video-32.yml: 賴慈昕 | 2025雙北世界壯年運動會研討會 World Masters Games Conference 2025
- video-33.yml: Data Analytics in Sport Sponsorships Sales – World Masters Games Conference 2025
- video-34.yml: Sports Science and Health – World Masters Games Conference 2025
- video-35.yml: Team Leaders Meeting Rukes｜Woodball – 2025 World Masters Games
- video-36.yml: 木球技術會議重點回顧 | 2025雙北世界壯年運動 2025 World Masters Games
- video-37.yml: 50公尺長修正桿練習的方法
- video-38.yml: 114年臺北市青年盃木球賽事精華
- video-39.yml: 范弘昌 | 2025年翁祿壽盃木球錦標賽 WENG LU SHOU Cup Woodball Championship 2025
- video-40.yml: 范弘昌 吳翼丞 | 2025雙北世界壯年運動會 2025 World Masters Games

### How to Add Video Links

You can add video links in three ways:

#### Option 1: Manual File Editing
Edit each `.yml` file in `src/content/videos/` and replace `PLACEHOLDER` with your YouTube video ID:

```yaml
videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
```

#### Option 2: Using the Admin Panel (Recommended)
1. Visit `/editing/admin` after deployment
2. Login with your admin password
3. Click "Open Video CMS" to access Decap CMS
4. Edit each video and add the YouTube URL

#### Option 3: GitHub Web Editor
1. Go to your repository on GitHub
2. Navigate to `src/content/videos/`
3. Click on each file and edit directly in the browser
4. Changes will auto-deploy via GitHub Actions

### Testing Locally

To test your changes locally:

```bash
npm run dev
```

Then visit `http://localhost:4321/editing` to see your video portfolio.

### Building for Production

```bash
npm run build
```

The site will automatically deploy when you push to the `main` branch via GitHub Actions.

## Documentation Updated

Both `ADMIN_GUIDE.md` and `README.md` have been updated with comprehensive instructions about:
- Setting up the `.env` file
- Configuring the admin password
- Security best practices
- Production deployment with environment variables

Please refer to those files for detailed information.
