# FixEVM Landing Page

A modern, responsive landing page for FixEVM - The Ultimate EVM Debugging Platform. Built with Next.js, TypeScript, and Tailwind CSS, optimized for Vercel deployment.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode Support**: Built-in dark mode support with Tailwind CSS
- **SEO Optimized**: Proper metadata and Open Graph tags for better search engine visibility
- **Performance Optimized**: Built with Next.js for optimal performance and Core Web Vitals
- **Vercel Ready**: Pre-configured for seamless deployment on Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fix-evm-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

### Updating Content

- **Hero Section**: Edit the main heading and description in `src/app/page.tsx`
- **Features**: Modify the features section with your own content
- **Company Info**: Update the footer with your company details
- **Colors**: Customize the color scheme by modifying Tailwind classes

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify colors in the existing classes
- Add new components in the `src/components` directory
- Update the global styles in `src/app/globals.css`

### SEO & Metadata

Update the metadata in `src/app/layout.tsx`:
- Title and description
- Keywords
- Open Graph tags
- Author information

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Automatic Deployment**:
   - Vercel will automatically detect Next.js
   - The project is pre-configured with `vercel.json`
   - Deployments happen automatically on every push to main branch

3. **Manual Deployment**:
   ```bash
   npm install -g vercel
   vercel
   ```

### Deploy to Other Platforms

The project can also be deployed to:
- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: Use the Next.js template
- **DigitalOcean App Platform**: Deploy as a Node.js app

## 📁 Project Structure

```
fix-evm-landing/
├── src/
│   └── app/
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout with metadata
│       └── page.tsx         # Main landing page
├── public/                  # Static assets
├── vercel.json             # Vercel configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Performance

The landing page is optimized for:
- **Core Web Vitals**: Fast loading, minimal layout shift
- **SEO**: Proper meta tags and structured data
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Mobile**: Responsive design and touch-friendly interactions

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@fixevm.com or join our Discord community.

---

Built with ❤️ by the FixEVM Team
