# Deployment Instructions

This folder contains configuration files for deploying the UniMarket website to various hosting platforms.

## Available Deployment Options

### 1. Vercel (Recommended)

- Fastest deployment option
- Automatic HTTPS
- Global CDN
- Continuous deployment from Git

Steps to deploy:

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy: `vercel`

### 2. Netlify

- Easy deployment
- Automatic HTTPS
- Form handling
- Serverless functions

Steps to deploy:

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Deploy: `netlify deploy`

### 3. GitHub Pages

- Free hosting
- Simple deployment
- Good for static sites

Steps to deploy:

1. Create a GitHub repository
2. Push your code to the repository
3. Enable GitHub Pages in repository settings
4. Set the source to the `gh-pages` branch

## Environment Variables

Before deploying, make sure to set up the following environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Build Process

The project uses Vite for building. To build locally:

```bash
cd project
npm install
npm run build
```

The built files will be in the `project/dist` directory.

## Post-Deployment

After deployment:

1. Set up your custom domain (if needed)
2. Configure SSL certificates
3. Set up environment variables in your hosting platform
4. Test all functionality
5. Monitor performance and errors

## Troubleshooting

Common issues and solutions:

1. 404 errors: Check your routing configuration
2. Environment variables: Ensure they're properly set in your hosting platform
3. Build errors: Check the build logs in your hosting platform
4. CORS issues: Configure CORS settings in your Supabase project
