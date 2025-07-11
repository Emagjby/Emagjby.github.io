# Personal Portfolio Website

A minimalist, responsive personal portfolio website built with React and Vite. Inspired by clean, modern design principles with smooth animations and microinteractions.

## Features

- **Minimalist Design**: Clean, elegant layout with generous whitespace
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Subtle fade-in effects and hover interactions
- **Modern Tech Stack**: Built with React, Vite, and modern CSS
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized for performance with Vite's build system
- **Accessibility**: WCAG compliant with proper focus states

## Sections

- **Hero/Intro**: Personal introduction and call-to-action
- **Projects**: Showcase of your best work with tech stack tags
- **About**: Personal bio, skills, and development philosophy
- **Contact**: Contact information and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

1. **Replace placeholder text** in `src/App.jsx`:
   - Replace `[Your Name]` with your actual name
   - Update email links and social media URLs
   - Customize the bio and project descriptions

2. **Update meta tags** in `index.html`:
   - Change the title, description, and other SEO tags
   - Update social media card information

### Projects

Edit the `projects` array in `src/App.jsx` to add your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of what the project does',
    tags: ['Technology', 'Stack', 'Used'],
    emoji: '🚀'
  },
  // Add more projects...
]
```

### Skills

Update the `skills` array in `src/App.jsx` with your technical skills:

```javascript
const skills = [
  'Your', 'Technical', 'Skills', 'Here'
]
```

### Styling

The main styles are in `src/App.css`. Key customization options:

- **Colors**: Update CSS custom properties in the `:root` selector
- **Typography**: Change the font family imports and font variables
- **Spacing**: Modify spacing variables for different layouts
- **Animations**: Adjust animation durations and easing functions

### Color Scheme

The default color scheme uses:
- Primary: `#1a1a1a` (dark text)
- Accent: `#6366f1` (purple/blue)
- Background: `#ffffff` (white)
- Light Gray: `#f8f9fa`

To change the accent color, update the `--accent-color` variable in `src/App.css`.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up custom domain (optional)

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Performance

- Optimized bundle size with Vite's tree-shaking
- Efficient CSS with custom properties
- Smooth animations with CSS transforms
- Responsive images and proper loading
- Reduced motion support for accessibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## License

MIT License - feel free to use this template for your own portfolio.

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!
