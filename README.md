# Just Curlz Unisex Salon & Spa — Official Website
**Location:** Rajahmundry (Rajamahendravaram), Andhra Pradesh, India  
**Design Standard:** Modern Indian Luxury · Editorial Charcoal & Burnt Orange Palette

A high-performance, mobile-first static website built with pure vanilla HTML5, CSS3, and JavaScript. Zero build steps, zero bloated framework dependencies, instant 100/100 Lighthouse performance potential, and comprehensive Local SEO.

---

## 📁 File Structure

```text
JUST_Curlyz/
│
├── index.html            # Main semantic single-page layout (16 structured sections)
├── styles.css            # Modern Indian Luxury design system & fluid responsive styles
├── script.js             # Unified business config, WhatsApp generator, i18n, modal, gallery
├── favicon.svg           # Brand monogram favicon (burnt orange & ivory)
├── robots.txt            # Search engine crawl rules
├── sitemap.xml           # XML sitemap with canonical anchors
├── SEO-CHECKLIST.md      # Step-by-step Local SEO strategy for Rajahmundry
├── README.md             # Maintenance & deployment guide
├── logo_just_curlz.png   # Master official brand logo provided by owner
│
└── assets/               # Self-contained vector artwork & production logo assets
    ├── logo_badge.png    # High-res circular luxury medallion badge with owner logo
    ├── logo_wordmark.png # High-res wordmark banner crop (JUST CURLZ + scissors)
    ├── logo_emblem.png   # High-res emblem crop (JC monogram, man & woman silhouettes)
    ├── logo_wordmark_trans.png # Transparent alpha-keyed wordmark
    ├── logo_emblem_trans.png   # Transparent alpha-keyed emblem
    ├── favicon-64.png    # 64x64 pixel-perfect favicon
    ├── favicon-192.png   # 192x192 Apple touch icon
    ├── logo.svg          # Official brand logo vector approximation
    ├── og-image.svg      # 1200x630 Open Graph preview card for social shares
    ├── about-salon.svg   # About section architectural illustration with owner logo
    ├── gallery-hair.svg  # Hair styling showcase slot
    ├── gallery-spa.svg   # Therapeutic spa suite slot
    ├── gallery-interior.svg # Interior lounge slot
    ├── gallery-grooming.svg # Men's grooming station slot
    ├── gallery-nails.svg # Manicure & pedicure slot
    ├── gallery-facial.svg # Skin care & facial slot
    ├── gallery-homeservice.svg # Doorstep home spa kit slot
    └── gallery-details.svg # Brass peacock & floral details slot
```

---

## 🛠️ (a) How to Edit Phone, Address, Hours, & Prices in ONE Place

All business parameters are centralized in `script.js` inside the `JUST_CURLZ_CONFIG` object (Lines 10–120).

### 1. Update Phone & WhatsApp Number
Open `script.js` and locate:
```javascript
whatsappNumber: "91XXXXXXXXXX",  // Change to real WhatsApp number (e.g. 919848012345, NO '+' or spaces)
phoneNumber: "+91 91XXXXXXXXXX", // Display phone number for calls
phoneTel: "+9191XXXXXXXXXX",     // Click-to-call link
```
Updating this automatically updates:
- Direct WhatsApp booking button URLs
- Floating desktop WhatsApp button
- Mobile persistent bottom call/WhatsApp buttons
- Service card micro-booking buttons
- Footer and Visit section contacts

### 2. Update Address & Map Link
```javascript
address: {
  street: "Main Road (Opp. Reliance Trends / Landmark)",
  locality: "Danavaipeta / T. Nagar Area",
  city: "Rajahmundry",
  pincode: "533101",
  fullAddress: "Just Curlz Unisex Salon & Spa, Main Road, Rajahmundry, Andhra Pradesh 533101",
  googleMapsUrl: "https://maps.google.com/?q=Just+Curlz+Unisex+Salon+Spa+Rajahmundry"
}
```

### 3. Update Prices
All verified services from Google Business Profile are listed in the `services` array:
```javascript
{
  id: "hairstyling",
  name: "Hairstyling & Cuts",
  nameTe: "హెయిర్ స్టైలింగ్ & కట్స్",
  category: "hair",
  price: "₹150",
  isAnchorPrice: true,
  ...
}
```
*Note: Never invent prices for unlisted services. The site automatically flags unlisted services as "Price on request" to protect business trust.*

---

## 📸 (b) How to Swap Placeholders for Real Salon Photos

The site ships with lightweight, self-contained SVG editorial illustrations in `/assets/` that render sharply on all devices with zero bandwidth delay.

When official salon photography is ready:
1. **Drop your photos** (JPEG or WebP, recommended 800x800px or 1200x800px, compressed under 200KB each) into the `/assets/` folder.
2. In `index.html`, find the matching `data-replace` tag or update the `src` attribute:
   - `assets/gallery-hair.svg` &rarr; `assets/gallery-hair.jpg`
   - `assets/gallery-spa.svg` &rarr; `assets/gallery-spa.jpg`
   - `assets/gallery-interior.svg` &rarr; `assets/gallery-interior.jpg`
   - `assets/gallery-grooming.svg` &rarr; `assets/gallery-grooming.jpg`
   - `assets/gallery-nails.svg` &rarr; `assets/gallery-nails.jpg`
   - `assets/gallery-facial.svg` &rarr; `assets/gallery-facial.jpg`
   - `assets/about-salon.svg` &rarr; `assets/about-salon.jpg`
3. If an official high-resolution vector/transparent PNG of the logo is provided, drop it into `assets/logo.png` and replace the placeholder inside the `<!-- REPLACE WITH OWNER LOGO -->` block in `index.html`.

---

## 🚀 (c) How to Deploy to Netlify Drop or Vercel in 2 Minutes

Because this site has **no build steps and no dependencies**, it can be deployed instantly:

### Method 1: Netlify Drop (Easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the entire `JUST_Curlyz` folder into the browser window.
3. Your site is live on a `.netlify.app` URL within 10 seconds!
4. (Optional) Connect your custom domain `justcurlz.in` under Domain Settings.

### Method 2: Vercel
1. Install Vercel CLI: `npm i -g vercel` (or drag into Vercel dashboard).
2. Inside `JUST_Curlyz` directory, run:
   ```bash
   vercel --prod
   ```
3. Your site is deployed worldwide with automatic SSL.

---

## 📝 (d) Complete List of Owner Confirmations (TODO Items)

The following items are marked with `<!-- TODO: CONFIRM WITH OWNER -->` across the codebase and should be verified before domain launch:

1. **WhatsApp & Phone Number:** Replace placeholder `91XXXXXXXXXX` with the official front desk mobile number.
2. **Exact Street Address & Landmark:** Verify building name, door number, street, and landmark in Rajahmundry (e.g. Danavaipeta / Main Road).
3. **Google Maps Place ID / Embed Link:** Generate official Google Maps embed URL for the Rajahmundry store.
4. **Operating Hours:** Confirm if timings are 10:00 AM – 9:00 PM all 7 days or if there are specific closing hours.
5. **Social Media Profiles:** Verify official Instagram handle (`@justcurlz_rajahmundry`) and Facebook page.
6. **Official Logo File:** [COMPLETED] Official logo provided (`logo_just_curlz.png`) and integrated into luxury circular medallion badge (`assets/logo_badge.png`), header, hero artwork, mobile drawer, footer, and favicons.
7. **Service Coverage for Home Visits:** Confirm which neighbourhoods across Rajahmundry/Godavari district are covered for home spa service.
8. **Product Brands Used:** Confirm official salon brands featured on shelves (e.g., L'Oréal Professionnel, Matrix, Cheryl's, Lotus Professional).
9. **Telugu Translation Proofreading:** Have native Telugu staff review the copy in `I18N.te` in `script.js` to ensure ideal local Godavari dialect alignment.
