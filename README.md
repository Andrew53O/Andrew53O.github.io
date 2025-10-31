# Andrew's Video Editing Portfolio

A modern, responsive video editing portfolio website built with Astro and Tailwind CSS, designed for deployment on GitHub Pages.

## 🚀 Features

- **Coming Soon Landing Page**: Main page at `/` shows a coming soon message
- **Video Portfolio**: Complete portfolio at `/editing` with video showcase
- **Pricing Page**: Detailed pricing information at `/editing/pricing` in NTD (New Taiwan Dollar)
- **Experience Page**: Portfolio stats and client success stories at `/editing/experience`
- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Dark Mode Default**: Starts in dark mode with toggle for light mode preference
- **Admin Panel**: Decap CMS integration for easy content management at `/admin`
- **Video Showcase**: Card-style grid layout displaying video projects with YouTube embeds
- **Tag Filtering**: Interactive filtering system to browse videos by category
- **Professional Navigation**: Site-wide navigation with mobile responsive menu
- **Subtitle Services**: Prominently features multilingual subtitle generation (Chinese, English, Indonesian)
- **Fast Performance**: Built with Astro for optimal loading speed
- **Auto-deployment**: GitHub Actions workflow for seamless deployment to GitHub Pages

## 🌐 Site Structure

- `/` - Coming Soon landing page
- `/editing` - Main video portfolio with filtering
- `/editing/pricing` - Service pricing page
- `/editing/experience` - Portfolio stats and client success stories
- `/admin` - Content management system (Decap CMS)

## 📁 Project Structure

```
/
├── public/
│   ├── admin/
│   │   ├── index.html       # Decap CMS admin interface
│   │   ├── config.yml       # CMS configuration
│   │   └── README.md        # CMS setup instructions
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro     # Hero section with intro and CTA
│   │   ├── Navigation.astro # Site navigation with mobile menu
│   │   ├── VideoCard.astro  # Individual video card component
│   │   └── ThemeToggle.astro # Dark/Light mode toggle button
│   ├── content/
│   │   ├── config.ts        # Content collections schema
│   │   └── videos/          # Video content files (YAML)
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout (defaults to dark mode)
│   └── pages/
│       ├── index.astro                # Coming Soon landing page
│       └── editing/
│           ├── index.astro            # Main portfolio page with filtering
│           ├── pricing.astro          # Pricing page with NTD currency
│           └── experience.astro       # Experience and success stories
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Video Source**: YouTube embeds (easily switchable to Cloudflare Stream)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Andrew53O/Andrew53O.github.io.git
cd Andrew53O.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 Customization

### Adding/Editing Videos

Edit `src/data/videos.ts` to add or modify video entries:

```typescript
{
  id: 'unique-id',
  title: 'Video Title',
  description: 'Optional short description',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  tags: ['Tag1', 'Tag2', 'Tag3'],
}
```

**Note**: The example videos use placeholder URLs. Replace them with your actual video URLs before deployment.

### Styling

- Global styles and Tailwind configuration: `tailwind.config.mjs`
- Component-specific styles: Within each `.astro` file using Tailwind classes
- Color scheme: Modify the gradient and color classes in `Header.astro` and `index.astro`

### Contact Information

**⚠️ IMPORTANT**: Before deployment, replace all placeholder email addresses with your actual contact email:

Update the email address in the following files:
- `src/components/Header.astro` (line 18)
- `src/pages/editing/pricing.astro` (lines 122 and 170)
- `src/pages/editing/experience.astro` (line 161)

Search for `contact@example.com` and replace with your email address.

```bash
# Quick find and replace command:
grep -r "contact@example.com" src/
```


## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory

3. Deploy the `dist/` directory to your hosting service

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to the `main` branch to trigger deployment

## 🎯 Features Breakdown

### Tag Filtering
- Click any tag button to filter videos
- "All" button shows all videos
- Smooth transitions and visual feedback
- No results message when no videos match the filter

### Responsive Grid
- Desktop (lg): 3 columns
- Tablet (md): 2 columns
- Mobile: 1 column
- Responsive filter buttons with wrapping

### Video Cards
- Embedded YouTube videos (aspect ratio 16:9)
- Title and optional description
- Tagged with relevant categories
- Hover effects for better UX

### Light/Dark Mode
- Toggle button in top-right corner
- Sun icon for dark mode, moon icon for light mode
- **Defaults to dark mode** on first visit
- Theme preference saved to browser localStorage
- Smooth color transitions between themes
- All components optimized for both modes

## 📝 Content Management

### Decap CMS Setup

**Important**: The Decap CMS requires additional OAuth setup to work with GitHub Pages. See `/public/admin/README.md` for detailed setup instructions.

**Quick Summary of the Issue:**
- Decap CMS on GitHub Pages needs OAuth authentication
- Without OAuth setup, you'll see "Not Found" after login
- Solutions include using Netlify, setting up an OAuth provider, or using test mode

**Recommended Setup Options:**
1. Deploy to Netlify (easiest - includes built-in OAuth)
2. Use an external OAuth provider service
3. Set up your own OAuth server

### Adding Videos One-by-One

## 📝 Content Management

### Using the Admin Panel (Recommended)

This portfolio includes **Decap CMS** - a free, open-source admin panel that makes managing content easy without editing code.

**Access the admin panel:**
1. After deployment, visit `https://andrew53o.github.io/admin`
2. Click "Login with GitHub"
3. Authorize the application
4. Start adding/editing videos through the UI

**Admin Panel Features:**
- ✅ Add new videos with a simple form interface
- ✅ Edit titles, descriptions, and tags
- ✅ Manage video URLs
- ✅ Upload thumbnails
- ✅ No code editing required
- ✅ Changes commit directly to GitHub
- ✅ Auto-deploys via GitHub Actions

**Adding a video through the admin:**
1. Go to `/admin` and login
2. Click "New Videos"
3. Fill in the form:
   - **ID**: Unique identifier (e.g., "7")
   - **Title**: Video title
   - **Description**: Short description (optional)
   - **Video URL**: YouTube embed URL
   - **Tags**: Add multiple tags (Corporate, English, Chinese, etc.)
   - **Thumbnail**: Upload custom thumbnail (optional)
4. Click "Publish"
5. Your video will be committed to GitHub and auto-deployed

### Manual File Editing (Alternative)

If you prefer editing files directly, videos are stored in `src/content/videos/` as YAML files:

**How to add a video manually:**
1. Create a new `.yml` file in `src/content/videos/`
2. Use this format:
```yaml
id: "7"
title: "New Project Name"
description: "Brief description of the project"
videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
tags:
  - Corporate
  - English
```
3. Commit and push to the `main` branch
4. GitHub Actions automatically rebuilds and deploys

### GitHub Web Editor (No Local Setup)

You can also edit content files directly on GitHub.com:
1. Navigate to `src/content/videos/` on GitHub
2. Click on any file or "Add file" → "Create new file"
3. Edit the YAML content
4. Commit changes directly in your browser
5. Auto-deploys via GitHub Actions

## 🌟 Unique Features

- **Multilingual Subtitle Services**: Highlights professional subtitle generation in Chinese, English, and Indonesian
- **Clean, Extensible Design**: Easy to add more videos or features
- **Performance Optimized**: Static site generation for fast load times
- **SEO Friendly**: Semantic HTML and meta tags

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

**Andrew**
- Professional Video Editor
- Subtitle Services: Chinese, English, Indonesian

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Astro and Tailwind CSS
