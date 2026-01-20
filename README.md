# Ian Rosales - Portfolio

A modern, professional portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏗️ **Professional Architecture**

This portfolio is designed with enterprise-level architecture principles and best practices suitable for a senior developer's showcase.

### **Tech Stack**

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Development:** ESLint, Prettier

### **Project Structure**

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Homepage
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Base UI components (Button, Card, etc.)
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── sections/     # Page sections (Hero, About, etc.)
│   ├── hooks/            # Custom React hooks
│   │   ├── useTheme.ts   # Theme management
│   │   └── useScrollspy.ts # Navigation scrollspy
│   ├── lib/              # Utilities and helpers
│   │   └── utils.ts      # Common utility functions
│   ├── types/            # TypeScript type definitions
│   ├── constants/        # Application constants
│   ├── data/            # Static data and content
│   └── styles/          # Additional styles (if needed)
└── Configuration files
```

## 🎨 **Design System**

### **Color Scheme**

- Semantic color tokens using CSS custom properties
- Light/Dark mode support with system preference detection
- Consistent color palette across all components

### **Typography**

- Geist Sans & Geist Mono fonts
- Responsive typography scale
- Proper heading hierarchy

### **Components**

- Modular component architecture
- Consistent props interfaces
- Accessible by default
- Reusable across the application

## 🚀 **Features**

- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Dark Mode** - System preference + manual toggle
- ✅ **Smooth Animations** - Framer Motion with performance optimization
- ✅ **SEO Optimized** - Meta tags, OpenGraph, structured data
- ✅ **Performance** - Optimized images, fonts, and loading
- ✅ **Accessibility** - WCAG compliant, keyboard navigation
- ✅ **Type Safety** - Full TypeScript coverage
- ✅ **Code Quality** - ESLint, strict TypeScript config

## 🛠️ **Development**

### **Getting Started**

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### **Environment Setup**

1. Node.js 18+ required
2. Git for version control
3. VS Code recommended with extensions:
   - TypeScript
   - Tailwind CSS IntelliSense
   - ESLint
   - Prettier

## 📁 **Component Organization**

### **UI Components** (`src/components/ui/`)

Base components following a design system approach:

- `Button.tsx` - Versatile button with variants
- `Card.tsx` - Content containers with header/footer
- `Input.tsx` & `Textarea.tsx` - Form inputs
- Exported through `index.ts` for clean imports

### **Layout Components** (`src/components/layout/`)

- `Header.tsx` - Navigation with theme toggle
- `Footer.tsx` - Site footer with contact info

### **Section Components** (`src/components/sections/`)

Page sections with consistent structure:

- `HeroSection.tsx` - Landing area with CTA
- `AboutSection.tsx` - Personal introduction
- More sections to be added...

## 🔧 **Configuration**

### **Tailwind CSS**

- Custom color system with CSS variables
- Extended theme with animations and typography
- Component-first utility classes

### **TypeScript**

- Strict mode enabled
- Path aliases configured (`@/*`)
- Comprehensive type definitions

### **Next.js**

- App Router for modern routing
- Optimized for performance
- SEO-friendly configuration

## 🎯 **Best Practices Implemented**

1. **Component Architecture**
   - Single Responsibility Principle
   - Composition over inheritance
   - Consistent prop interfaces

2. **Performance**
   - Code splitting by default
   - Optimized images and fonts
   - Lazy loading where appropriate

3. **Maintainability**
   - Clear folder structure
   - Comprehensive type definitions
   - Consistent naming conventions

4. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support

5. **Developer Experience**
   - Hot reload for all changes
   - Type safety throughout
   - Clear error messages

## 📈 **Scaling Considerations**

This architecture supports future growth:

- Easy to add new sections/pages
- Component library can be extracted
- State management ready (if needed)
- API integration prepared
- Database integration planned

## 🔄 **Next Steps**

- [ ] Add Projects section with filtering
- [ ] Implement Skills section with animations
- [ ] Create Experience timeline
- [ ] Add Contact form with validation
- [ ] Include Blog section (optional)
- [ ] Add testimonials
- [ ] Implement PWA features
- [ ] Add analytics integration

---

_This portfolio demonstrates enterprise-level React/Next.js development with modern best practices and scalable architecture._
