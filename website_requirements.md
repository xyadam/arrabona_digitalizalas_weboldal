# Katalógus Plusz - Website Requirements (PRD)

## Project Overview
Marketing website for "Katalógus Plusz v1.2" - a library cataloging software that uses AI and OCR to digitize and manage book catalog data.

**Developer**: Arrabona Company
**Technical Documentation**: See `project_description.md` for detailed technical architecture

---

## Target Audience
- Library administrators
- Librarians
- Decision makers in library management

---

## Design Requirements

### Theme & Visual Style
- **Color Scheme**: Light mode only with dark blue accent color
- **Typography**: Modern, clean fonts
- **Layout**: Clean, easy to navigate, professional appearance
- **Responsive**: Mobile-responsive (width adaptation required)

### Language Support
- **Languages**: Hungarian (default) and English
- **Implementation**: Language files (`lang_hun.js`, `lang_eng.js`) loaded dynamically
- **Switcher**: Dropdown menu in header (HU/EN)

---

## Page Structure

### 1. Header
- Arrabona logo (placeholder: `img/logo.png`)
- Language dropdown (HU/EN)
- Navigation menu (if needed)

### 2. Hero Section (Main Area)
- Software name: **Katalógus Plusz v1.2**
- Tagline explaining the software's purpose
- Primary call-to-action: Contact information display

### 3. Features Section
**Technologies Section** (explained in simple terms):
- "AI-powered text recognition" (not technical: OCR with GPT-5)
- "Smart database search" (not technical: SQLite with fuzzy matching)
- Works with scanned documents
- Creates easy-to-search database
- Accessible data retrieval

### 4. Three-Step Workflow Section
**Interactive horizontal tabs/carousel** showing the workflow:

**Step 1: Import (Importálás)**
- Import from scanned catalog cards (katalógus cédula)
- Import from external databases
- Import from PDF files
- Screenshot placeholder: `img/product_1.png`

**Step 2: Browse & Search (Böngészés és Keresés)**
- Browse cataloged data in Katalógus Plusz
- View original scanned documents
- View PDF documents in built-in viewer
- Advanced search capabilities
- Screenshot placeholder: `img/product_2.png`

**Step 3: Export (Exportálás)**
- Export data to Excel format
- Export to USMARC table format for external systems
- Compatible with library management systems
- Screenshot placeholder: `img/product_3.png`

**Implementation**: Use well-known JavaScript library for horizontal tab navigation (e.g., Slick Carousel, Swiper.js, or similar)

### 5. Pricing Section
**Per-card Processing Fee**:
- **100 HUF per catalog card** (katalógus cédula) for OCR processing and data extraction

### 6. Contact Section
**Arrabona Company Contact Information**:
- Email address
- Phone number
- Contact form with fields:
  - Name
  - Email
  - Phone (optional)
  - Message
  - Submit button

### 7. Footer
- Copyright information
- Company name: Arrabona
- Additional links (if needed)

---

## Technical Implementation

### File Structure
```
/
├── index.html           # Main page
├── css/
│   └── style.css       # All styling
├── js/
│   ├── main.js         # Main JavaScript logic
│   ├── lang_hun.js     # Hungarian translations
│   └── lang_eng.js     # English translations
├── img/
│   ├── logo.png        # Arrabona logo (placeholder)
│   ├── product_1.png   # Step 1 screenshot (placeholder)
│   ├── product_2.png   # Step 2 screenshot (placeholder)
│   └── product_3.png   # Step 3 screenshot (placeholder)
└── README.md           # Setup instructions
```

### JavaScript Libraries (Recommendations)
- **Carousel/Tabs**: Swiper.js or Slick Carousel (horizontal step navigation)
- **Smooth Scrolling**: AOS (Animate On Scroll) or similar
- **Form Handling**: Vanilla JS or lightweight validation library

### Separation of Concerns
- HTML: Structure only
- CSS: All styling in separate file
- JS: Logic, language switching, and interactivity in separate files

---

## Content Tone
- Professional but approachable
- Focus on benefits, not technical jargon
- Clear value proposition for libraries
- Emphasize time-saving and accuracy

---

## Key Messages
1. Digitize library catalogs efficiently
2. AI-powered accuracy
3. Works with existing scanned documents
4. Easy-to-use database and search
5. Export to standard library formats (USMARC)
6. Affordable per-card pricing

---

## Out of Scope (Not Included)
- System requirements section (can be added later if needed)
- Customer testimonials/case studies (can be added later)
- FAQ section (can be added later)
- "About Us" company section (contact info only)

---

## Notes
- All placeholder images should be clearly marked for replacement
- Language files should be easily extensible for adding more content
- Mobile responsiveness is critical for library staff on-the-go
- Contact form does not need backend implementation initially (can use mailto: or add backend later)
