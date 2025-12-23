# 🚀 dimetrics.io - Gemeinsam neu erfinden

Eine moderne Corporate Website im Accenture-Design-Stil, entwickelt mit NextJS 15, TypeScript und Tailwind CSS.

![dimetrics.io](https://via.placeholder.com/1200x600/A100FF/FFFFFF?text=dimetrics.io+-+Modern+Corporate+Website)

## ✨ Features

- **🎨 Accenture-inspiriertes Design**: Professionelles Corporate Design mit Purple (#A100FF), Orange (#FF6A00) und Cyan (#00D9FF)
- **⚡ NextJS 15**: Modernste React-Framework mit App Router und Turbopack
- **🔷 TypeScript**: Vollständige Type Safety für bessere Code-Qualität
- **🎯 Tailwind CSS 4**: Utility-first CSS Framework mit Custom Design System
- **📱 Responsive Design**: Mobile-first Ansatz für alle Geräte
- **🎭 Framer Motion**: Smooth Animationen und Transitions
- **🧩 Component Library**: Radix UI + shadcn/ui für Professional Components
- **🚀 Performance**: Optimiert für Geschwindigkeit und SEO

## 🛠️ Tech Stack

### Core

- **Frontend**: NextJS 15 + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion

### UI Components

- **shadcn/ui**: Professional component library
- **Radix UI**: Headless, accessible components
- **Lucide React**: Modern icon library

### Utilities

- **class-variance-authority**: Type-safe component variants
- **clsx + tailwind-merge**: Intelligent class merging
- **React Hook Form + Zod**: Form handling and validation

## 🚦 Systemanforderungen

⚠️ **Wichtig**: Dieses Projekt benötigt **Node.js 18.18.0 oder höher**

```bash
# Aktuelle Node.js Version prüfen
node --version

# Falls Update erforderlich:
# 1. Mit nvm (empfohlen)
nvm install 20
nvm use 20

# 2. Oder direkt von nodejs.org herunterladen
# https://nodejs.org/
```

## 🚀 Installation

```bash
# Repository klonen
git clone <repository-url>
cd dimetrics

# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Oder mit Turbopack (experimentell)
npm run dev --turbo
```

## 📦 Verfügbare Scripts

```bash
# Development Server starten
npm run dev              # Standard Next.js dev server
npm run dev --turbo      # Mit Turbopack (experimentell)

# Production Build
npm run build            # Build für Production
npm run start            # Production Server starten

# Code Quality
npm run lint             # ESLint ausführen
npm run type-check       # TypeScript Type Checking
```

## 🎨 Design System

### Farben (Accenture-inspiriert)

```css
--accent-purple: #A100FF  /* Primärfarbe */
--accent-orange: #FF6A00  /* Akzentfarbe 1 */
--accent-cyan: #00D9FF    /* Akzentfarbe 2 */
--accent-dark: #1a1a1a    /* Text/Hintergründe */
```

### Typography

```css
/* Headlines (Accenture-Stil) */
font-size: 48px (3rem)    /* Hero Headlines */
font-weight: 500          /* Medium Weight */
font-family: Inter        /* Modern Sans-Serif */
```

### Komponenten

- **Buttons**: Variants (default, outline, secondary, ghost)
- **Cards**: Gradient Backgrounds, Shadows, Border Radius
- **Navigation**: Minimalistisch, Hover-Effekte
- **Hero Section**: Vollbild, Gradient Background, Animationen

## 📁 Projektstruktur

```
dimetrics/
├── .github/              # GitHub Workflows & Copilot Instructions
├── .vscode/              # VS Code Workspace Settings
├── public/               # Static Assets
├── src/
│   ├── app/             # NextJS App Router
│   │   ├── globals.css  # Global Styles & CSS Variables
│   │   ├── layout.tsx   # Root Layout
│   │   └── page.tsx     # Homepage
│   ├── components/
│   │   └── ui/          # shadcn/ui Components
│   └── lib/
│       └── utils.ts     # Utility Functions
├── tailwind.config.ts   # Tailwind Configuration
├── tsconfig.json        # TypeScript Configuration
└── package.json         # Dependencies & Scripts
```

## 🌐 Live Demo

Nach dem Start des Development Servers ist die Website verfügbar unter:

- **Local**: http://localhost:3000
- **Network**: http://[ihre-ip]:3000

### Features der Homepage

- ✅ Accenture-inspirierte Hero Section mit "GEMEINSAM NEU ERFINDEN"
- ✅ Animierte Gradient-Backgrounds
- ✅ Mock Analytics Dashboard
- ✅ Responsive Navigation
- ✅ Feature Cards mit Icons
- ✅ Smooth Scroll Animationen

## 🔧 Entwicklung

### VS Code Extensions (empfohlen)

- **Tailwind CSS IntelliSense**: Autocomplete für Tailwind Classes
- **TypeScript Importer**: Automatische Imports
- **ES7+ React/Redux/React-Native snippets**: React Snippets
- **Prettier**: Code Formatting
- **ESLint**: Code Linting

### Auto-Approval Settings

Das Projekt enthält bereits VS Code Workspace-Settings mit aktiviertem Auto-Approval für optimalen Workflow.

## 🎯 Nächste Schritte

1. **Node.js Update** auf Version 18.18.0 oder höher
2. **Development Server starten**: `npm run dev`
3. **Weitere Seiten hinzufügen**: About, Services, Contact
4. **Content Management**: CMS Integration (Sanity/Strapi)
5. **Deployment**: Vercel/Netlify Setup
6. **Analytics**: Google Analytics/Plausible Integration

## 🚀 Deployment

Das Deployment erfolgt automatisch via GitHub Actions auf unseren Plesk-Server.

### Workflow: Server-Side Build

Wir nutzen einen "Build on Server" Ansatz, um maximale Kompatibilität (insb. für ARM-Architektur) sicherzustellen.

1.  **Push auf `main`**: Löst den Workflow aus.
2.  **SSH Verbindung**: GitHub Actions verbindet sich mit dem Plesk-Server.
3.  **Git Pull**: Der Server zieht sich den neuesten Code.
4.  **Docker Build**: Das Image wird direkt auf dem Server gebaut (`--no-cache`).
5.  **Restart**: Die Container werden neu gestartet.

### Voraussetzungen (GitHub Secrets)

Damit der Workflow funktioniert, müssen folgende Secrets im Repository hinterlegt sein:

- `PLESK_HOST`: IP-Adresse des Servers
- `PLESK_USER`: SSH-Benutzer (z.B. root)
- `PLESK_SSH_KEY`: Privater SSH-Schlüssel für den Zugriff

### Manuelles Deployment (Fallback)

Falls nötig, kann das Deployment auch manuell auf dem Server angestoßen werden:

```bash
cd /var/www/vhosts/dimetrics-app
git pull
docker compose build --no-cache
docker compose up -d
```

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit deine Changes (`git commit -m 'Add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Öffne eine Pull Request

## 📝 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert. Siehe [LICENSE](LICENSE) für Details.

---

**Entwickelt mit ❤️ für moderne Corporate Websites**

_Inspiriert vom professionellen Design von Accenture.com_
