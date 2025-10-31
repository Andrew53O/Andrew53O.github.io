# Decap CMS Setup for GitHub Pages

## Issue: "Not Found" after login

The Decap CMS is configured to use GitHub backend, but GitHub Pages requires additional OAuth setup.

## Solutions:

### Option 1: Use Netlify (Recommended for simplicity)
1. Deploy your site to Netlify (it's free)
2. Enable Netlify Identity
3. Update `config.yml` to use:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```
4. Add Netlify Identity widget to `/admin/index.html`

### Option 2: Use GitHub OAuth App with External Service
1. Use a service like https://github.com/vencax/netlify-cms-github-oauth-provider
2. Or use https://www.npmjs.com/package/decap-cms-github-oauth-provider
3. Set up the OAuth provider service
4. Update the backend config with your OAuth provider URL

### Option 3: Self-host OAuth Provider
1. Set up your own OAuth server using https://github.com/vencax/netlify-cms-github-oauth-provider
2. Deploy it to a service like Heroku, Vercel, or Render
3. Update backend config:
   ```yaml
   backend:
     name: github
     repo: Andrew53O/Andrew53O.github.io
     branch: main
     base_url: https://your-oauth-server.com
   ```

### Option 4: Test Mode (Development Only)
For local testing only, you can use:
```yaml
backend:
  name: test-repo
```

## Current Configuration
The site is currently configured with the GitHub backend, but you need to set up OAuth authentication to make it work properly.

For more information, see: https://decapcms.org/docs/github-backend/
