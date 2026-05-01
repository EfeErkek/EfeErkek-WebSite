# 💻 Modern Portfolio Engine | React 19 + TypeScript

This repository contains the source code for a high-performance, responsive portfolio website built with a focus on modern web standards, strict type safety, and component-driven architecture.

## 🏗 Architecture & Technical Stack

The project is architected as a **Single Page Application (SPA)** using the latest React ecosystem:

*   **Core Framework:** **React 19** (leveraging improved concurrent rendering).
*   **Type Safety:** **TypeScript** for robust development and compile-time error checking.
*   **Build Pipeline:** **Vite** for near-instant Hot Module Replacement (HMR) and optimized production bundling.
*   **Styling:** **Modular CSS** approach to ensure style encapsulation and prevent global namespace pollution.
*   **Code Quality:** Integrated **ESLint 9+** with strict TypeScript rules to maintain clean code standards.

---

## 🛠 Functional Modules

The application is broken down into reusable, decoupled components:

*   **Hero Engine:** Features a dynamic entry point with optimized image loading.
*   **Dynamic Project Showcase:** A data-driven grid system that displays technical projects (MergenAI, Privacy Auditor, etc.) via structured TypeScript interfaces.
*   **Timeline Component:** A custom-built vertical timeline to visualize professional milestones and event leadership (IEEE).
*   **Responsive Navigation:** A mobile-first, hook-based navigation system.

---

## 🚀 Technical Highlights

### 1. MergenAI Integration
The site highlights the **MergenAI** project, emphasizing local LLM integration and ASP.NET backends for 100% data privacy.

### 2. Performance Optimization
*   **Zero External UI Libraries:** All components are custom-coded to minimize bundle size.
*   **Vite Optimization:** Utilizes code-splitting and asset minification for fast First Contentful Paint (FCP).

---

## 💻 Getting Started

### Prerequisites
*   Node.js 18.x or higher
*   npm 9.x or higher

### Local Development
```bash
# 1. Clone the repository
git clone [https://github.com/efeerkek/portfolio-v2.git](https://github.com/efeerkek/portfolio-v2.git)

# 2. Install dependencies
npm install

# 3. Spin up development server
npm run dev
