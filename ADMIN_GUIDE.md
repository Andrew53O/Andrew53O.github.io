# Admin Panel Guide

This guide explains how to use the admin panel to manage both video editing portfolio and software engineering projects.

## Accessing the Admin Panel

### Main Admin Panel
- **URL**: `https://andrew53o.github.io/editing/admin` (or `http://localhost:4321/editing/admin` in dev)
- **Default Password**: `admin123`
- **Note**: This is a client-side authentication for demonstration. Change the password in production by setting `PUBLIC_ADMIN_PASSWORD` in `.env`

### Content Management System (Decap CMS)
- **URL**: `https://andrew53o.github.io/admin`
- **Authentication**: Requires GitHub OAuth setup (see below)

## Features

### 1. Video Portfolio Management

The admin panel provides easy access to manage your video editing portfolio:

- **Open Video CMS**: Direct link to Decap CMS for video content
- **View Portfolio**: Preview your published portfolio
- **Content Location**: `src/content/videos/`

#### Adding a Video (via CMS)
1. Go to `/admin`
2. Login with GitHub
3. Click "Videos" collection
4. Click "New Videos"
5. Fill in the form:
   - **ID**: Unique identifier (e.g., "7")
   - **Title**: Video title
   - **Description**: Short description
   - **Video URL**: YouTube embed URL (e.g., `https://www.youtube.com/embed/VIDEO_ID`)
   - **Tags**: Add tags for filtering (Corporate, English, Chinese, etc.)
   - **Thumbnail**: Optional custom thumbnail image
6. Click "Publish"

#### Adding a Video (Manual)
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
3. Commit and push to trigger auto-deployment

### 2. Software Projects Management

Manage your software engineering projects through the admin panel:

- **Open Projects CMS**: Direct link to Decap CMS for projects
- **View Projects**: Preview your published projects
- **Content Location**: `src/content/projects/`

#### Adding a Project (via CMS)
1. Go to `/admin`
2. Login with GitHub
3. Click "Software Projects" collection
4. Click "New Software Projects"
5. Fill in the form:
   - **ID**: Unique identifier (e.g., "3")
   - **Title**: Project name
   - **Description**: Short description
   - **Long Description**: Detailed project description
   - **Technologies**: List of technologies used (React, Node.js, etc.)
   - **GitHub URL**: Link to repository
   - **Live URL**: Link to live demo/website
   - **Image**: Project screenshot or logo
   - **Featured**: Check to show on homepage
   - **Status**: Select from Completed, In Progress, or Planned
   - **Start Date**: YYYY-MM format
   - **End Date**: YYYY-MM format
6. Click "Publish"

#### Adding a Project (Manual)
1. Create a new `.yml` file in `src/content/projects/`
2. Use this format:
```yaml
id: "3"
title: "My Awesome Project"
description: "A brief description of the project"
longDescription: "A detailed description explaining the project in depth"
technologies:
  - React
  - TypeScript
  - Node.js
githubUrl: "https://github.com/username/repo"
liveUrl: "https://project-demo.com"
featured: true
status: "completed"
startDate: "2024-01"
endDate: "2024-03"
```
3. Commit and push to trigger auto-deployment

### 3. Experience Management

Manage your experience section:

- **View Experience Page**: Preview your experience page
- **Content Location**: `src/pages/editing/experience.astro`

To edit experience content, modify the data arrays directly in the Astro file.

## Decap CMS Setup

The Decap CMS provides a user-friendly interface for content management without editing code.

### GitHub OAuth Setup (Required for Production)

Decap CMS requires GitHub OAuth authentication. Choose one of these options:

#### Option 1: Deploy to Netlify (Easiest)
1. Deploy your site to Netlify (free)
2. Enable Netlify Identity in site settings
3. Add Netlify Identity widget to `/admin/index.html`
4. Update `config.yml` backend to use `git-gateway`

#### Option 2: Use External OAuth Provider
1. Use a service like:
   - https://github.com/vencax/netlify-cms-github-oauth-provider
   - https://www.npmjs.com/package/decap-cms-github-oauth-provider
2. Deploy the OAuth provider
3. Update backend config with your OAuth provider URL

#### Option 3: Test Mode (Development Only)
For local testing only:
```yaml
backend:
  name: test-repo
```

### Current Configuration

The site is configured with:
- **Backend**: GitHub
- **Repository**: Andrew53O/Andrew53O.github.io
- **Branch**: main
- **Media Folder**: public/uploads
- **Collections**: Videos and Software Projects

## Content Collections

### Videos Collection Schema
- `id`: string (required)
- `title`: string (required)
- `description`: string (optional)
- `videoUrl`: string (required)
- `tags`: array of strings (required)
- `thumbnail`: string (optional)

### Projects Collection Schema
- `id`: string (required)
- `title`: string (required)
- `description`: string (required)
- `longDescription`: string (optional)
- `technologies`: array of strings (required)
- `githubUrl`: string (optional)
- `liveUrl`: string (optional)
- `image`: string (optional)
- `featured`: boolean (default: false)
- `status`: enum - completed, in-progress, planned (default: completed)
- `startDate`: string (optional, format: YYYY-MM)
- `endDate`: string (optional, format: YYYY-MM)

## Auto-Deployment

All content changes trigger automatic deployment via GitHub Actions:

1. Edit content via CMS or commit YAML files
2. Changes are pushed to the `main` branch
3. GitHub Actions builds the site
4. Site deploys to GitHub Pages

## Security Notes

⚠️ **Admin Panel Authentication**: The admin panel at `/editing/admin` uses client-side authentication. The password is visible in the JavaScript bundle. This is suitable for personal use to prevent casual access, but NOT for protecting sensitive data.

For production with sensitive data, consider:
- Using serverless functions for authentication
- Implementing GitHub OAuth
- Using a headless CMS with built-in authentication

## Tips

- **Featured Projects**: Mark projects as "featured" to display them on the homepage (max 3)
- **Tags for Videos**: Use consistent tags for better filtering
- **Project Status**: Use status field to show work in progress
- **Images**: Upload images to `public/uploads/` via the CMS
- **Preview**: Always preview your changes before publishing

## Troubleshooting

### "Not Found" after CMS login
- This means GitHub OAuth is not set up
- Follow the OAuth setup instructions above
- Or use test mode for local development

### Changes not appearing
- Wait a few minutes for GitHub Actions to deploy
- Check the Actions tab in GitHub for deployment status
- Clear browser cache and hard refresh

### Can't access admin panel
- Ensure you're using the correct password
- Check browser console for JavaScript errors
- Try a different browser or incognito mode
