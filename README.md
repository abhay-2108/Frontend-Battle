# 🌱 EcoMetrics - Fully Responsive Sustainability Website

EcoMetrics is a cutting-edge, fully responsive sustainability website that showcases environmental intelligence through interactive dashboards, real-time analytics, and AI-powered insights. Built with modern web technologies, it demonstrates best practices in responsive design, accessibility, and user experience.



## ✨ Key Features

* **🎨 Multiple Dashboard Views** – Financial, Analytics, and Carbon tracking
* **📱 Fully Responsive Design** – Optimized for all devices and screen sizes
* **🌙 Dark/Light Mode** – Seamless theme switching with system preference detection
* **🎭 Advanced Animations** – Parallax effects, ripple interactions, carousel transitions
* **♿ Accessibility First** – WCAG compliant with screen reader support
* **⚡ Performance Optimized** – Fast loading and modern optimizations
* **🎯 Interactive Elements** – Micro-animations and responsive UI feedback



## 🚀 Live Demo

🔗 **[View Live Website](https://frontend-battle-steel.vercel.app/)**



## 🖼️ Screenshots

![image](https://github.com/user-attachments/assets/a849616d-0109-4121-8d1b-1590707ce578)

![image](https://github.com/user-attachments/assets/e862954c-2848-4b86-a59d-aa27b70a4906)


![image](https://github.com/user-attachments/assets/4cd8d894-9816-4edf-aa0b-e4de67b03202)

![image](https://github.com/user-attachments/assets/736cbac0-8242-418b-8400-2b016ec929ef)


![image](https://github.com/user-attachments/assets/2f36fd9b-e7e5-4a1d-9197-4af59a03bf88)

![image](https://github.com/user-attachments/assets/e225ec46-f74d-4469-b2fc-2dc6e52959c5)

![image](https://github.com/user-attachments/assets/e9b17a78-6a69-4df3-82e5-a664eea1dd79)

![image](https://github.com/user-attachments/assets/fe3dd27d-a497-4104-bce8-4fd106c7a37d)



## 🛠️ Tech Stack

### 🧠 Frontend Framework

* **Next.js** 15.2.4 – React framework with App Router
* **React** 19 – Latest features and concurrent rendering
* **TypeScript** 5 – Type-safe development

### 🎨 Styling & UI

* **Tailwind CSS** 3.4.17 – Utility-first CSS framework
* **shadcn/ui** – Elegant, accessible component library
* **Radix UI** – Headless UI primitives
* **Lucide React** – Icon set with React bindings

### 🔄 Animations & Interactions

* **Custom CSS Animations** – Smooth UI transitions
* **Parallax Scrolling** – Layered motion for visual appeal
* **Ripple Effects** – Interactive touch feedback
* **Carousel Components** – Rotating content areas

### 🧰 Development Tools

* **ESLint** – Code quality and linting
* **PostCSS + Autoprefixer** – Style processing and browser support




## 📁 Project Structure

```bash
├── app/                        # Next.js App Router (App directory)
│   ├── globals.css             # Global CSS styles
│   ├── layout.tsx              # Root layout component (shared across pages)
│   └── page.tsx                # Main landing page
│
├── components/                 # Reusable shared UI components
│   ├── ui/                     # shadcn/ui components (buttons, inputs, etc.)
│   └── theme-provider.tsx      # Light/Dark theme management
│
├── src/                        # Core application source files
│   ├── App.tsx                 # App entry component
│   ├── App.css                 # Global styles for app-level components
│   └── components/             # Page-specific or custom-built components
│       ├── CarbonHomepage.tsx     # Carbon dashboard section
│       ├── FinancialHomepage.tsx  # Financial dashboard section
│       ├── StatsHomepage.tsx      # Analytics/Stats section
│       ├── EnhancedParallax.tsx   # Custom parallax scroll effects
│       ├── EnhancedRipple.tsx     # Ripple interaction handler
│       └── CarouselSwitch.tsx     # Carousel/slider component
│
├── public/                     # Static assets (e.g., images, icons)
│   └── ...                     # Favicon, logo, etc.
│
├── hooks/                      # Custom React hooks
│   └── useTheme.ts             # Example: hook for theme switching
│
├── lib/                        # Utility functions and helpers
│   └── formatNumber.ts         # e.g., locale-based number formatting
│
├── styles/                     # Standalone or modular stylesheets
│   └── animations.css          # Animation definitions (e.g., parallax)
│
└── README.md                   # Project documentation
```



## 🧑‍💻 Getting Started

### ✅ Prerequisites

* Node.js v18 or higher
* Package Manager: `npm`, `yarn`, or `pnpm`

### 📥 Installation

\`\`\`bash
git clone https://github.com/your-username/Frontend-Battle.git
cd Frontend-Battle
npm install
\`\`\`

### 🔨 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Features Deep Dive

### 🖥️ Dashboard System

* **Financial Dashboard** – Revenue tracking, expense breakdowns, and financial KPIs
* **Analytics Dashboard** – Sustainability metrics with real-time updates and animated visuals
* **Carbon Dashboard** – Carbon footprint analysis with interactive charts

### 🎭 Animation System

* **Parallax Scrolling** – Multi-layer visual motion
* **Ripple Effects** – Interactive feedback on clicks/taps
* **Carousel Transitions** – Auto-playing or manual slides
* **Micro-interactions** – Hover, press, and loading effects

### 📱 Responsive Design

* **Mobile-First** – Optimized from small to large screens
* **Flexible Grid System** – Adapts to any layout
* **Touch-Friendly** – Mobile gestures supported
* **Performance Optimized** – Lazy loading & efficient rendering

### ♿ Accessibility

* **WCAG 2.1 Compliance**
* **Keyboard Navigation**
* **Screen Reader Support**
* **High Contrast Support**
* **Reduced Motion Preference Respect**


## 🎨 Theme Customization

* **Light/Dark Modes** – Follows system preference with manual toggle
* **Custom Colors** – Tailwind configuration supports theme extension
* **Typography** – Fluid and responsive font sizes
* **Spacing System** – Scalable and consistent layout spacing


## 📊 Performance Metrics

* **Lighthouse Score**: 95+ in all categories
* **Core Web Vitals**: Excellent metrics
* **Bundle Size**: Lightweight and efficient
* **Accessibility Score**: 100%


## 🧭 Development Guidelines

* Follow **TypeScript** and **React best practices**
* Prioritize **responsiveness and accessibility**
* Add smooth **animations and micro-interactions**
* Test across **browsers and device sizes**
