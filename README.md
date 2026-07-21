# Electromagnetism Documentation

A comprehensive VitePress-powered documentation site covering theoretical foundations, empirical validation, and practical engineering applications of Electromagnetism.

---

## 📁 Folder Structure

```text
Electromagnetism-document/
├── docs/                           # Main documentation source directory
│   ├── .vitepress/                 # VitePress configuration & theme settings
│   │   ├── config.mts              # Site metadata, navbar, & VitePress settings
│   │   └── sidebar.mts             # Navigation sidebar structure
│   ├── theory/                     # Theoretical foundations
│   │   ├── 01_static_analysis/     # Electrostatics and magnetostatics
│   │   ├── 02_dynamic_analysis/    # Time-varying fields & electrodynamics
│   │   ├── 03_electromagnetic_analysis/ # Electromagnetic waves & Maxwell's equations
│   │   └── index.md                # Theory section overview
│   ├── validation/                 # Empirical verification & computational benchmarks
│   │   ├── 01_static_analysis/     # Static field validation cases
│   │   ├── 02_dynamic_analysis/    # Dynamic field validation cases
│   │   ├── 03_electromagnetic_analysis/ # Wave propagation validation
│   │   └── index.md                # Validation section overview
│   ├── practice/                   # Hands-on problem sets & practical applications
│   │   ├── 01_static_analysis/     # Static field practice problems
│   │   ├── 02_dynamic_analysis/    # Dynamic field practice problems
│   │   ├── 03_electromagnetic_analysis/ # Electromagnetic wave practice problems
│   │   └── index.md                # Practice section overview
│   └── index.md                    # Landing page / Home page
├── package.json                    # Project metadata and npm scripts
├── package-lock.json               # Locked dependency tree
└── README.md                       # Project documentation and guide
```

---

## 🛠️ Prerequisites

Ensure you have **Node.js** (v18+ recommended) and **npm** installed on your system.

- Verify Node.js version:
  ```bash
  node -v
  ```
- Verify npm version:
  ```bash
  npm -v
  ```

---

## 🚀 How to Run

### 1. Install Dependencies

Install the project dependencies:
```bash
npm install
```

### 2. Start Development Server

Run the local VitePress development server with hot-reloading:
```bash
npm run docs:dev
```
Once started, open your browser and navigate to the local URL provided in the terminal (typically `http://localhost:5173`).

### 3. Build for Production

Generate static HTML files for production deployment:
```bash
npm run docs:build
```
The built static site assets will be generated inside `docs/.vitepress/dist`.

### 4. Preview Production Build

Preview the production build locally before deploying:
```bash
npm run docs:preview
```

---

## 🧰 Built With

- [VitePress](https://vitepress.dev/) - Modern SSG for documentation
- [MathJax 3 (`markdown-it-mathjax3`)](https://github.com/valeriangalliat/markdown-it-mathjax3) - LaTeX mathematical formula rendering
