# Andrew's Video Editing Portfolio

A modern, responsive video editing portfolio website built with Astro and Tailwind CSS, designed for deployment on GitHub Pages.

## 🚀 Features

- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
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
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro     # Hero section with intro and CTA
│   │   └── VideoCard.astro  # Individual video card component
│   ├── data/
│   │   └── videos.ts        # Video data and configuration
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
