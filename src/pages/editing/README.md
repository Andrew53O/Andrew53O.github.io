# Video Editing Portfolio

This directory contains the video editing portfolio and services website, accessible at `/editing`.

## Features

### 🌐 Dual Language Support
- **English** and **Traditional Chinese (Taiwan)**
- Automatic language detection based on user's timezone
- Language toggle button in the top right corner (EN/中)
- All content translates dynamically

### 📄 Pages

1. **Home** (`/editing`) - Main landing page with:
   - Introduction to video editing services
   - Pricing overview
   - Experience highlights
   - Sample work portfolio

2. **Portfolio** (`/editing/portfolio`) - Full video portfolio with:
   - Tag-based filtering system
   - YouTube video embeds
   - Responsive card layout

3. **Experience** (`/editing/experience`) - Professional experience showcasing:
   - Client success stories
   - Skills and tools
   - Statistics and testimonials

4. **Pricing** (`/editing/pricing`) - Detailed pricing information:
   - Three pricing tiers (Basic, Standard, Premium)
   - Additional services
   - Custom quote option

5. **Contact** (`/editing/contact`) - Contact information:
   - LINE, Facebook, Email links
   - Working hours
   - Multilingual subtitle services info

6. **Admin Panel** (`/editing/admin`) - Content management:
   - Password-protected access
   - Portfolio management interface
   - Experience management interface

### 🔐 Admin Panel

The admin panel is located at `/editing/admin` and is protected by a password.

**Default Password:** `admin123` (Change this in production!)

To change the password:
1. Create a `.env` file in the root directory
2. Add: `PUBLIC_ADMIN_PASSWORD=your_secure_password`
3. Rebuild the site

### 📝 Managing Content

#### Adding/Editing Portfolio Videos

Portfolio videos are stored as YAML files in `src/content/videos/`. To add a new video:

1. Create a new `.yml` file in `src/content/videos/`
2. Use this format:

```yaml
id: "unique-id"
title: "Video Title"
description: "Video description"
videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
tags:
  - Tag1
  - Tag2
  - Language
```

#### Editing Experience Content

Experience content is defined in `src/pages/editing/experience.astro`. Edit the data arrays directly in the file.

## 🎨 Styling

The editing portfolio uses:
- **Tailwind CSS** for styling
- **Dark mode** support (synced with main site)
- **Responsive design** for mobile, tablet, and desktop

## 🌍 Internationalization (i18n)

Translations are managed in `src/i18n/translations.ts`. To add or modify translations:

1. Open `src/i18n/translations.ts`
2. Add your translation keys to both `en` and `zh` objects
3. Use the `data-i18n` attribute in components to apply translations

Example:
```html
<h1 data-i18n="editing.hero.title">Video Editing Services</h1>
```

## 🔗 Navigation

The editing section has its own navigation component (`EditingNavigation.astro`) separate from the main site. This ensures:
- Clean separation between software engineering and editing portfolios
- Independent navigation structure
- No cross-linking in navigation bars

Access to the editing site is through the "Other Interests" section on the main page.

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Contact Methods

Update contact links in `src/pages/editing/contact.astro`:
- LINE: Change the URL in the contactMethods array
- Facebook: Update the Facebook profile URL
- Email: Modify the mailto link

## 🔧 Configuration

Key configuration files:
- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `src/i18n/translations.ts` - Translation strings
- `.env` - Environment variables (create from `.env.example`)
