# Andrew's Video Editing Portfolio

A modern, responsive video editing portfolio website built with Astro and Tailwind CSS, designed for deployment on GitHub Pages.

## 🚀 Features

- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Light/Dark Mode**: Toggle between light and dark themes with persistent preference
- **Admin Panel**: Decap CMS integration for easy content management at `/admin`
- **Video Showcase**: Card-style grid layout displaying video projects with YouTube embeds
- **Tag Filtering**: Interactive filtering system to browse videos by category
- **Professional Header**: Introduction section highlighting skills and services
- **Subtitle Services**: Prominently features multilingual subtitle generation (Chinese, English, Indonesian)
- **CTA Button**: "Let's Talk" call-to-action linking to contact information
- **Fast Performance**: Built with Astro for optimal loading speed
- **Auto-deployment**: GitHub Actions workflow for seamless deployment to GitHub Pages

## 📁 Project Structure

```
/
├── public/
│   ├── admin/
│   │   ├── index.html       # Decap CMS admin interface
│   │   └── config.yml       # CMS configuration
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro     # Hero section with intro and CTA
│   │   ├── VideoCard.astro  # Individual video card component
│   │   └── ThemeToggle.astro # Light/Dark mode toggle button
│   ├── content/
│   │   ├── config.ts        # Content collections schema
│   │   └── videos/          # Video content files (YAML)
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout
│   └── pages/
│       └── index.astro      # Main portfolio page with filtering logic
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

Update the email address in `src/components/Header.astro`:
```astro
<a href="mailto:your-email@example.com" ...>
```

**Important**: Replace `contact@example.com` with your actual email address before deployment.


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
- Sun icon for light mode, moon icon for dark mode
- Theme preference saved to browser localStorage
- Smooth color transitions between themes
- All components optimized for both modes

## 📝 Content Management

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
