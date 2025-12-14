import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Palette, Layout, Settings, FileText, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Layout,
    content: `
## Overview

This portfolio is built with modern technologies for performance and maintainability:

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Shadcn/ui** - UI components

## Project Structure

\`\`\`
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── assets/         # Images and static files
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── index.css       # Global styles & design tokens
\`\`\`
    `,
  },
  {
    id: "customization",
    title: "Customization Guide",
    icon: Palette,
    content: `
## Theme Customization

All colors are defined as CSS variables in \`src/index.css\`:

\`\`\`css
:root {
  --primary: 174 72% 56%;       /* Main accent color */
  --background: 220 20% 4%;      /* Page background */
  --foreground: 210 40% 98%;     /* Text color */
  --card: 220 20% 8%;            /* Card background */
  --muted-foreground: 215 20% 55%; /* Secondary text */
}
\`\`\`

## Changing Colors

1. Open \`src/index.css\`
2. Modify the HSL values in \`:root\`
3. For light mode, update the \`.light\` class

## Custom Fonts

Fonts are imported from Google Fonts:
- **Heading**: Sora
- **Body**: Inter

To change fonts, update the import URL and CSS variables.
    `,
  },
  {
    id: "content",
    title: "Updating Content",
    icon: FileText,
    content: `
## Personal Information

Update your details in these files:

- **Hero Section**: \`src/components/HeroSection.tsx\`
- **About Section**: \`src/components/AboutSection.tsx\`
- **Experience**: \`src/components/ExperienceSection.tsx\`
- **Contact**: \`src/components/ContactSection.tsx\`

## Adding Projects

Edit \`src/components/ProjectsSection.tsx\`:

\`\`\`tsx
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "Python"],
    link: "https://project-url.com"
  }
];
\`\`\`

## Blog Posts

Add new posts in \`src/pages/Blog.tsx\`:

\`\`\`tsx
const allPosts = [
  {
    title: "Article Title",
    excerpt: "Brief description",
    category: "Tutorial",
    slug: "article-slug"
  }
];
\`\`\`
    `,
  },
  {
    id: "components",
    title: "Component Reference",
    icon: Code2,
    content: `
## Available Components

### Sections
- \`HeroSection\` - Landing hero with profile
- \`AboutSection\` - Biography and stats
- \`ExperienceSection\` - Work timeline
- \`ProjectsSection\` - Portfolio grid
- \`SkillsSection\` - Technical skills
- \`BlogSection\` - Featured articles
- \`ContactSection\` - Contact form
- \`TestimonialsSection\` - Client reviews
- \`EducationSection\` - Academic background
- \`NewsletterSection\` - Email signup

### UI Components
- \`Button\` - Various button styles
- \`Card\` - Content containers
- \`Input\` - Form inputs
- \`Toast\` - Notifications

All components support Framer Motion animations.
    `,
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: Settings,
    content: `
## Build for Production

\`\`\`bash
npm run build
\`\`\`

Output will be in the \`dist/\` folder.

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Netlify
1. Connect repository
2. Build command: \`npm run build\`
3. Publish directory: \`dist\`

### Custom Server
Upload \`dist/\` contents to your web server.

## Environment Variables

For production, set these if needed:
- \`VITE_API_URL\` - Backend API
- \`VITE_GA_ID\` - Google Analytics
    `,
  },
];

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { toast } = useToast();

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast({ title: "Copied to clipboard!" });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Documentation | Khem Raj Ale Magar Portfolio</title>
        <meta name="description" content="Customization guide and documentation for the portfolio website." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(174,72%,56%,0.08)_0%,_transparent_50%)]" />
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Button asChild variant="ghost" size="sm" className="gap-2">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  Back Home
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
                Documentation
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
                Customization <span className="gradient-text">Guide</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Learn how to customize and personalize this portfolio template to make it your own.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:sticky lg:top-24 h-fit"
              >
                <nav className="glass-card p-4 rounded-2xl">
                  <p className="text-sm font-medium text-muted-foreground mb-4 px-3">
                    Quick Navigation
                  </p>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          <section.icon className="w-4 h-4" />
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.aside>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-12">
                {sections.map((section, index) => (
                  <motion.article
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-8 rounded-2xl"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-heading text-2xl font-bold">{section.title}</h2>
                    </div>

                    <div className="prose prose-invert prose-sm max-w-none">
                      <div className="text-muted-foreground space-y-4 whitespace-pre-wrap">
                        {section.content.split('```').map((part, i) => {
                          if (i % 2 === 1) {
                            const [lang, ...codeLines] = part.split('\n');
                            const code = codeLines.join('\n').trim();
                            return (
                              <div key={i} className="relative group">
                                <pre className="bg-secondary/50 p-4 rounded-xl overflow-x-auto text-sm">
                                  <code className="text-foreground">{code}</code>
                                </pre>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => copyCode(code)}
                                >
                                  {copiedCode === code ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </Button>
                              </div>
                            );
                          }
                          return (
                            <div key={i} className="leading-relaxed">
                              {part.split('\n').map((line, j) => {
                                if (line.startsWith('## ')) {
                                  return <h3 key={j} className="font-heading text-lg font-semibold text-foreground mt-6 mb-3">{line.replace('## ', '')}</h3>;
                                }
                                if (line.startsWith('### ')) {
                                  return <h4 key={j} className="font-heading font-semibold text-foreground mt-4 mb-2">{line.replace('### ', '')}</h4>;
                                }
                                if (line.startsWith('- ')) {
                                  return <li key={j} className="ml-4">{line.replace('- ', '')}</li>;
                                }
                                return line && <p key={j}>{line}</p>;
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Documentation;
