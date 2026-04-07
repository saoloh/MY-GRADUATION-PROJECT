# HASAD Visual Design System & UI Specification

This document provides a comprehensive technical breakdown of the HASAD design system, including spacing, typography, color palettes, and component architecture for high-fidelity implementation.

## 1. Core Visual Identity

### **Brand Colors**
*   **Primary Slate:** `#263238` (Slate Grey) - Used for primary backgrounds, text, and high-contrast elements.
*   **Action Teal:** `#00BFA5` (Energetic Teal) - Used for primary actions, success states, and brand highlights.
*   **Surface White:** `#FFFFFF` - Primary background for cards and clean layouts.
*   **Muted Background:** `#F8FAFC` (Slate 50) - Used for page-level backgrounds and soft section dividers.
*   **Border Stroke:** `#F1F5F9` (Slate 100) - Standard border color for cards and inputs.

### **Typography Strategy**
*   **Primary Font:** `Inter` or standard System Sans (San Francisco/Segoe UI).
*   **Hero Headings:** `font-black`, `tracking-tighter`, `uppercase`, `leading-[0.95]`.
    *   *Sizing:* `text-6xl` (Mobile) / `text-8xl` (Desktop).
*   **Section Titles:** `font-black`, `tracking-tighter`, `uppercase`, `leading-none`.
    *   *Sizing:* `text-4xl` (Mobile) / `text-6xl` (Desktop).
*   **Card Titles:** `text-xl`, `font-black`, `uppercase`, `tracking-tight`.
*   **Micro-Labels:** `text-[10px]`, `font-black`, `uppercase`, `tracking-[0.25em]`.
*   **Body Text:** `text-gray-500`, `font-medium`, `leading-relaxed`.

---

## 2. Layout & Grid Architecture

### **Global Containers**
*   **Max Width:** `max-w-7xl` (1280px).
*   **Side Padding:** `px-4` (Mobile) / `px-8` (Desktop).
*   **Section Vertical Spacing:** `space-y-32`.

### **Grid Configurations**
*   **Hero/Split Sections:** `grid lg:grid-cols-2 gap-16`.
*   **Feature Sets:** `grid md:grid-cols-2 lg:grid-cols-3 gap-10`.
*   **Marketplace Grid:** `grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`.
*   **Stats Grid:** `grid md:grid-cols-3 gap-16`.

---

## 3. UI Component Specifications

### **Containers & Surfaces**
*   **Global Sections:** `rounded-[4rem]` (64px corner radius).
*   **Standard Cards:** `rounded-3xl` (24px corner radius), `bg-white`, `border border-slate-100`.
*   **Interactive Cards:** `shadow-sm`, `hover:shadow-2xl`, `hover:-translate-y-2`.
*   **Icon Containers:** `w-16 h-16`, `rounded-2xl` (16px radius), `bg-energetic-teal/10`.

### **Interactive Elements (Buttons/Inputs)**
*   **Primary Button (Slate):** `bg-slate-grey`, `text-white`, `rounded-3xl`, `px-10 py-5`, `font-black`.
    *   *Shadow:* `shadow-[0_20px_50px_rgba(38,50,56,0.3)]`.
*   **Success Button (Teal):** `bg-energetic-teal`, `text-white`, `rounded-2xl`, `px-6 py-3`, `font-bold`.
*   **Inputs:** `bg-slate-50`, `border-slate-100`, `rounded-2xl`, `px-6 py-4`, `font-bold`.
    *   *Focus State:* `ring-2 ring-energetic-teal/20`, `border-energetic-teal`.

---

## 4. Animation & Interaction Patterns

### **Entrance Animations (Framer Motion)**
*   **Container Stagger:** `staggerChildren: 0.15`.
*   **Item Entrance:** `y: 30` to `y: 0`, `opacity: 0` to `opacity: 1`.
*   **Transition:** `duration: 0.8`, `ease: "easeOut"`.

### **Hover States**
*   **Icon Animation:** `whileHover: { scale: 1.1, rotate: 5 }`.
*   **Button Animation:** `hover:scale-105`, `active:scale-95`.
*   **Card Animation:** `hover:shadow-2xl`, `transition-all duration-300`.

### **Page Transitions**
*   **Mode:** `AnimatePresence (wait)`.
*   **Effect:** `initial: { opacity: 0, y: 20 }`, `animate: { opacity: 1, y: 0 }`, `exit: { opacity: 0, y: -20 }`.

---

## 6. Page-by-Page Specifications

### **1. Landing Page (Public Home)**
*   **Hero Section:** Split-grid layout with a massive text block (`text-8xl`) and a floating image container (`rounded-[4rem]`). Includes a "live shipment" status card overlay.
*   **Impact Metrics:** Three-column centered grid with animated `StatCounter` components that trigger on scroll.
*   **Infrastructure Section:** 3x1 grid of `FeatureCard` components featuring hover-reactive icons and border transitions.
*   **Global Footer:** 3-column deep-slate layout with high-contrast text and a "Global Impact" data table.

### **2. Sign In / Sign Up (Auth)**
*   **Layout:** Centered single-column card (`max-w-md` or `max-w-xl`) on a `bg-slate-50` background.
*   **Components:** 
    *   **Role Switcher (Sign Up):** 2-column grid of selectable cards with unique icons for Farmer and Factory roles.
    *   **Input Groups:** Stacked vertical fields with left-aligned icons and high-contrast labels.
    *   **Action Button:** Full-width primary slate button with an `ArrowRight` icon.

### **3. Farmer Dashboard**
*   **Stats Row:** 4-column horizontal grid of `StatCard` units showing earnings, active listings, and tonnage.
*   **Active Listings Table:** Large white surface with a minimalist table. Includes status badges (`bg-energetic-teal/10`) and bold pricing text.
*   **Impact Sidebar:** A high-contrast slate card showing progress bars for CO2 offset and recycling efficiency.

### **4. Waste Intake Engine (Multistep Form)**
*   **Header:** Dynamic progress indicator with three rounded-full bars.
*   **Step 1 (Category):** 2x2 grid of large icon-driven buttons for category selection.
*   **Step 2 (Details):** Vertical form with large-text numeric inputs and a multi-line description area.
*   **Step 3 (Verification):** 2-column split. Left: Dotted-border upload zone. Right: Slate card with a fixed-font geolocation coordinate block.

### **5. Waste Marketplace (Factory)**
*   **Header Hub:** Integrated search bar with a slide-out "Advanced Filters" panel (Price and Distance ranges).
*   **Category Ribbons:** Horizontal scrolling list of pill-shaped filter buttons.
*   **Marketplace Grid:** Responsive cards featuring high-quality image backgrounds, distance tags, and "Bid" vs "Buy" action logic.

### **6. Procurement Ledger**
*   **Metrics Row:** 3-column row of icon-cards for active shipments, completed orders, and total spent.
*   **History Table:** High-fidelity table with detailed order IDs, material sub-labels, and a dedicated "Invoice" download column with hover effects.

### **7. Logistics Dashboard (Command Center)**
*   **Live Map View:** Large-scale interactive container with a SVG-driven routing path and a moving truck animation asset.
*   **Shipment Intelligence Panel:** 
    *   **Vertical Stepper:** High-contrast status tracker with completed, active, and pending states.
    *   **Data Blocks:** 2x2 grid of micro-cards for Driver Bio, ETA, Payload Stability, and Moisture Levels.
    *   **Next Milestone:** Large high-contrast action card at the bottom of the panel.

### **8. Unified Profile Management**
*   **Sidebar Navigation:** Vertical stack of tab-buttons with high-contrast active states.
*   **Content Area:** 
    *   **Account Settings:** Avatar upload zone and 2-column grid for personal details.
    *   **Security Hub:** List-style security toggles (e.g., 2FA) with custom-styled switch components.
    *   **Notification Hub:** List of activity alerts with status-colored toggle indicators.
