# Sairam Printer — Industrial Safety Signage Website

A modern, high-performance, responsive React website for **Sairam Printer**, manufacturer and supplier of industrial safety boards, safety signage, flex banners, MS frame boards, and customized industrial printing solutions.

Built with **React 18**, **Tailwind CSS**, **Vite**, **Lucide React**, and **Framer Motion**.

---

## 🎨 Design System & Color Palette

- **Safety Orange**: `#F56600` (Primary buttons, key accents, icons, and highlights)
- **Deep Orange**: `#E85D04` (Hover and gradient depth)
- **Charcoal Black**: `#191919` (Footers, hero overlays, dark badges)
- **Dark Industrial Grey**: `#35383D` (Subheadings, body details)
- **Pure White**: `#FFFFFF` (Cards, navbar, clean content sections)
- **Warm Background**: `#FFF7F0` (Alternating section background)
- **Light Grey**: `#F4F5F7` (Borders, utility backgrounds)
- **Muted Text**: `#666666` (Descriptions and captions)

---

## 🚀 Key Features

1. **Sticky Header & Responsive Navigation**
   - Industrial emblem logo with tagline `"SAFETY SIGNS. SAFER WORKPLACES."`
   - Active section highlighting on scroll.
   - Smooth anchor scrolling.
   - Animated mobile drawer navigation with quick contact access.
   - Prominent **Get a Quote** button with arrow icon.

2. **Industrial Hero Section**
   - High-contrast steel manufacturing plant background photography with machinery & safety signage.
   - Dark gradient overlay on the left for maximum text legibility.
   - 4 compact trust highlights:
     1. Durable & Weather Resistant
     2. Industrial Grade Quality
     3. Pan India Supply & Installation
     4. Trusted by Leading Steel Plants
   - Primary and secondary call-to-action buttons.

3. **About Us Section**
   - Two-column layout with industrial plant photography and 100% compliance badge.
   - Feature highlights: Trusted by Leading Industries, Customized Solutions, On-Time Delivery.
   - "Know More About Us" interactive modal detailing printing capabilities (ACP, UV, MS, retro-reflective).

4. **Product Showcase (`#FFF7F0` Warm Background)**
   - 4:3 product cards with hover elevation and image zoom:
     - **Safety Boards**: Mandatory, cautionary, prohibitory and informative signage.
     - **Flex Banners**: High-visibility banners for site campaigns and outdoor use.
     - **MS Frame Boards**: Heavy-gauge metal frame caution boards for harsh industrial conditions.
     - **Custom Signage**: Tailored wayfinding, bilingual signs, and plant schematics.
   - Interactive **Product Details Modal** displaying technical specifications, durability features, and industrial use-case examples.

5. **Why Industries Trust Sairam Printer**
   - 4 minimal orange line icon feature cards:
     1. Built for Industrial Conditions
     2. Custom Manufacturing
     3. Quality-Focused Production
     4. Reliable Delivery & Installation

6. **Our Clients Section**
   - Clean horizontal row of white cards featuring illustrative client placeholders:
     - Jindal Steel & Power
     - NALCO
     - Rungta Mines
     - JSW
     - Tata Steel
   - Pauseable marquee / accessible grid switch with industrial sector tags.

7. **Projects & Installation Gallery**
   - Filterable category tabs (Safety Awareness, Life-Saving Rules, Traffic & Speed, Housekeeping & 5S, Directional, Outdoor Displays).
   - Full **Lightbox Modal** with keyboard navigation (Esc, Arrow keys) and technical installation details.

8. **From Design to Installation Process**
   - 4-step connected timeline with numbered badges and orange circular icons.
   - Horizontal workflow on desktop; vertical workflow on mobile.

9. **Bold Orange CTA & Contact Section**
   - Split layout with direct plant contact points.
   - Accessible enquiry form with real-time validation for Indian phone numbers (`+91` / 10 digits), work email, and required fields.
   - Mock API submission handler simulating asynchronous response and success state.

10. **4-Column Charcoal Footer**
    - Brand description, quick links, product links (directly opening product modals), and centralized contact info.
    - Smooth back-to-top floating button and footer return link.

---

## 🛠️ Project Structure

```
Sairamprinters/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── siteConfig.js        # Centralized business phone, email, address placeholders
    │   ├── products.js          # Detailed specs, substrates, and images for all 4 products
    │   ├── projects.js          # Gallery installations with categories and specs
    │   ├── clients.js           # Illustrative client placeholders & sector tags
    │   └── processSteps.js      # 4 stages from requirement to site installation
    └── components/
        ├── Navbar.jsx           # Sticky nav with mobile drawer & quote action
        ├── Hero.jsx             # Full-width industrial hero with gradient & trust badges
        ├── About.jsx            # Two-column story with interactive capability modal
        ├── Products.jsx         # 4:3 product cards with warm background & hover zoom
        ├── WhyChooseUs.jsx      # Minimal orange line icon feature cards
        ├── Clients.jsx          # Client cards with pauseable controls
        ├── Projects.jsx         # Filterable gallery & lightbox trigger
        ├── Process.jsx          # 4-stage connected workflow timeline
        ├── ContactCTA.jsx       # Striking orange CTA section
        ├── ContactForm.jsx      # Validated enquiry form with mock API simulation
        ├── Footer.jsx           # 4-column charcoal footer
        ├── SectionHeading.jsx   # Reusable section heading with orange eyebrow
        ├── BackToTop.jsx        # Floating scroll-to-top button
        ├── QuoteModal.jsx       # Interactive quotation request modal
        ├── ProductDetailModal.jsx # Deep-dive technical specifications modal
        └── ProjectLightbox.jsx  # Accessible modal for full-size project inspection
```

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Connect a Real Backend API

To connect the contact or quote forms to your backend or CRM (e.g., Node.js / Express, Python, or Formspree):

In `src/components/ContactForm.jsx` and `src/components/QuoteModal.jsx`, replace the `setTimeout` mock handler with:

```javascript
const response = await fetch('https://api.yourdomain.com/v1/enquiry', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
if (response.ok) {
  setSubmitStatus('success');
}
```

All contact telephone numbers, emails, addresses, and hours can be updated in one place in `src/data/siteConfig.js`.
