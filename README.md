# MealPrep Pro Landing Page

A high-conversion landing page for a healthy meal subscription service in Egypt.

## Features
- **Multilingual Support**: Egyptian Arabic (RTL) and English (LTR).
- **Dark/Light Mode**: Seamless theme switching.
- **3D Visuals**: Modern CSS 3D transforms and Framer Motion animations.
- **Conversion Focused**: Multiple CTAs leading to WhatsApp/Email integration.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Performance**: Built with Vite + React for lightning-fast loading.

## Tech Stack
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Hook Form + Zod

## Setup & Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Customization
### Adding Meal Images
Replace the placeholder URLs in `src/components/MealGallery.tsx` with your actual meal images hosted in `/public/meals/`.

### Editing Contact Info
Update the phone number and email in:
- `src/components/ConversionModal.tsx`
- `src/components/Footer.tsx`
- `src/components/FloatingWhatsApp.tsx`

### Deployment
This project is ready to be deployed to Vercel or Netlify. Simply connect your repository and it will auto-detect the build settings.
