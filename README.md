# Katalógus Plusz v1.2 - Marketing Website

Modern, responsive marketing website for the Katalógus Plusz library cataloging software by Arrabona.

## Features

- **Fully Responsive**: Mobile-friendly design that adapts to all screen sizes
- **Bilingual**: Hungarian (default) and English language support with dynamic switching
- **Modern Design**: Clean white theme with dark blue accent colors
- **Interactive Workflow**: Swiper.js-powered horizontal carousel showcasing the 3-step process
- **Smooth Animations**: AOS (Animate On Scroll) for engaging user experience
- **Contact Integration**: Contact form with mailto integration

## File Structure

```
arrabona_weboldal/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   ├── main.js            # Main JavaScript logic
│   ├── lang_hun.js        # Hungarian translations
│   └── lang_eng.js        # English translations
├── img/
│   ├── logo.png           # Arrabona logo (TO BE ADDED)
│   ├── product_1.png      # Import step screenshot (TO BE ADDED)
│   ├── product_2.png      # Browse/Search step screenshot (TO BE ADDED)
│   ├── product_3.png      # Export step screenshot (TO BE ADDED)
│   └── README.md          # Image requirements guide
├── website_requirements.md # Product Requirements Document
├── project_description.md  # Technical documentation
└── README.md              # This file
```

## Setup Instructions

1. **Add Images**: Place your images in the `img/` folder:
   - `logo.png` - Arrabona company logo
   - `product_1.png` - Import step screenshot
   - `product_2.png` - Browse/Search step screenshot
   - `product_3.png` - Export step screenshot

2. **Update Contact Information** (if needed):
   - Edit `index.html` lines with email and phone placeholders
   - Current: `info@arrabona.hu` and `+36 30 123 4567`

3. **Open the Website**:
   - Simply open `index.html` in a web browser
   - No build process or server required

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6)**: Dynamic language switching and interactions
- **Swiper.js v11**: Horizontal carousel for workflow steps
- **AOS (Animate On Scroll)**: Scroll-based animations
- **CDN Libraries**: All external libraries loaded via CDN (no installation required)

## Language Support

The website supports Hungarian and English. To add more languages:

1. Create a new language file: `js/lang_[code].js`
2. Copy the structure from `lang_hun.js` or `lang_eng.js`
3. Translate all text values
4. Add the language to the dropdown in `index.html`
5. Update `main.js` to include the new language

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-blue: #1e3a8a;
    --dark-blue: #1e40af;
    --light-blue: #3b82f6;
    /* ... */
}
```

### Content
- **Hungarian text**: Edit `js/lang_hun.js`
- **English text**: Edit `js/lang_eng.js`
- **Structure**: Edit `index.html`

### Pricing
To change the pricing:
- Edit the pricing section in both language files
- Update the HTML in `index.html` if needed

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All external dependencies are loaded via CDN
- No backend required for basic functionality
- Contact form uses mailto: protocol (opens email client)
- For production use, consider implementing a proper backend for form submissions

## Contact

For technical support or questions about the Katalógus Plusz software, contact:
- **Email**: info@arrabona.hu
- **Phone**: +36 30 123 4567

---

**Developed by Arrabona**
© 2025 All rights reserved
