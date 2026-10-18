# 🌿 The Olive Grove — Restaurant & Dining

A modern, elegant, and responsive restaurant website designed for **The Olive Grove**, a fine-dining restaurant concept. The website presents the restaurant's story, menu, chefs, gallery, pricing, events, and guest services through a polished multi-page experience.

## ✨ Overview

The Olive Grove combines a warm, nature-inspired visual identity with interactive restaurant features. It is built with React and TypeScript, with reusable UI components and client-side routing for navigating between pages.

## 🚀 Features

- **Home page** with restaurant highlights and featured dining content.
- **Menu page** for browsing dishes.
- **Price List** for viewing menu prices.
- **About page** introducing the restaurant and its story.
- **Chef page** showcasing the culinary team.
- **Gallery** with visual restaurant and food content.
- **Events page** for restaurant events and special occasions.
- **Reservation page** with form fields and client-side validation.
- **Contact page** with contact information and a validated contact form.
- **Support page** with helpful information and FAQs.
- **Newsletter page** for the newsletter sign-up experience.
- **Shopping cart** with add, remove, quantity update, subtotal, tax, and total calculations.
- **Cart persistence** using browser `localStorage` so cart items remain after refreshing the page.
- **Toast notifications** for cart interactions.
- **Reusable components** such as the navbar, footer, page headers, dish cards, modals, and scroll effects.
- **Responsive layout** designed for different screen sizes.
- **Client-side routing** for a multi-page single-page application.
- **Custom visual assets** including food imagery and kitchen ambience videos.

> **Note:** The reservation, contact, and newsletter forms are front-end experiences. A live production website would need a backend or form service to store submissions and send confirmations. The cart is stored locally in the visitor's browser; checkout/payment processing is not included.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface with reusable components |
| TypeScript | Type-safe application development |
| Vite | Development server and production build tooling |
| React Router | Client-side navigation between pages |
| Bootstrap 5 | Responsive grid and layout utilities |
| Tailwind CSS | Additional styling utilities and build integration |
| Motion | UI animation and motion effects |
| Lucide React | Interface icons |
| CSS | Custom styling and visual design |
| Browser `localStorage` | Persisting cart contents locally |

## 📄 Website Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Restaurant introduction and featured content |
| Menu | `/menu` | Browse restaurant dishes |
| About | `/about` | Restaurant story and information |
| Gallery | `/gallery` | Food and restaurant visuals |
| Chefs | `/chefs` | Meet the culinary team |
| Events | `/events` | Events and special dining occasions |
| Price List | `/price-list` | Dish pricing information |
| Reservation | `/reservation` | Reservation form with validation |
| Contact | `/contact` | Contact details and message form |
| Support | `/support` | FAQs and guest support information |
| Newsletter | `/newsletter` | Newsletter sign-up interface |
| Sitemap | `/sitemap` | Website navigation overview |
| Cart | `/cart` | Review and manage cart items |

## 📁 Project Structure

```text
The-Olive-Grove-Restaurant-Dining/
├── public/
│   └── assets/
│       ├── images/
│       └── videos/
├── src/
│   ├── assets/
│   ├── components/       # Shared UI components and modals
│   ├── context/          # Shared cart state
│   ├── data/             # Dish, chef, gallery, and FAQ data
│   ├── pages/            # Individual website pages
│   ├── App.tsx           # Routes and application layout
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   └── types.ts          # TypeScript types
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## ⚙️ Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS version is recommended)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Move into the project directory:

   ```bash
   cd The-Olive-Grove-Restaurant-Dining
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal. The project is configured to use port `3000` by default.

## 🏗️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server on port 3000 |
| `npm run build` | Builds the application for production |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs the TypeScript compiler without emitting files |

## 🛒 Cart Behaviour

- Add dishes to the cart.
- Increase or decrease item quantities.
- Remove individual items or clear the cart.
- Automatically calculate the subtotal, an 8% tax, and the total.
- Save cart contents in `localStorage` between page refreshes.

## 🎨 Design Highlights

- Elegant restaurant-inspired styling.
- Botanical and nature-inspired decorative details.
- Food photography and kitchen video assets.
- Reusable page headers, navigation, and footer.
- Modal and lightbox components for additional content.
- Scroll-based reveal effects and toast feedback.

## 🔒 Environment Variables

The repository includes an `.env.example` file for the `APP_URL` setting used by the original app environment. The standard front-end development workflow does not require adding secret API keys. Never commit private credentials or real secrets to GitHub.

## 🌐 Deployment

This is a Vite-based front-end application. To create a production build, run:

```bash
npm run build
```

The generated `dist/` directory can be deployed to a static hosting provider that supports Vite builds, such as GitHub Pages, Netlify, or Vercel. For GitHub Pages, configure the correct Vite `base` path if the site is hosted under a repository subpath, and configure SPA route fallback handling for direct visits to nested routes.

## 📌 Project Purpose

This project demonstrates front-end development skills through a multi-page restaurant website, component-based architecture, TypeScript, routing, interactive UI elements, form validation, and local cart state management.

---

**Built with care for The Olive Grove — Restaurant & Dining.** 🌿
