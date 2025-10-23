# Resume - Lee JiYeol

👉 **[배포된 이력서 보기](https://dlwodud1016.github.io/resume)**

A modern, clean and responsive resume website built with Next.js and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎨 Styled with Tailwind CSS
- 🔤 TypeScript for type safety
- 📝 Easy to customize

## Sections

- **Contact**: Email, phone, location, and social links
- **About Me (Introduce)**: Personal introduction and background
- **Experience**: Work experience and achievements
- **Projects**: Notable projects with technologies and features
- **Skills**: Technical skills organized by category
- **Education**: Educational background and certifications

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd resume

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Customization

### Update Personal Information

Edit the data in each component file:

- `components/Header.tsx` - Name and title
- `components/ContactSection.tsx` - Contact information
- `components/IntroduceSection.tsx` - About me text
- `components/ExperienceSection.tsx` - Work experience
- `components/ProjectSection.tsx` - Projects
- `components/SkillSection.tsx` - Skills
- `components/EducationSection.tsx` - Education

### Colors

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1f2937',    // Main text color
  secondary: '#6b7280',  // Secondary text color
  accent: '#3b82f6',     // Highlight/accent color
}
```

### Typography

Modify font settings in `app/globals.css`

## Structure

```
resume/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx
│   ├── ContactSection.tsx
│   ├── IntroduceSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectSection.tsx
│   ├── SkillSection.tsx
│   └── EducationSection.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/).

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The app can be deployed to any platform that supports Node.js.

## License

MIT

## Author

Lee JiYeol
