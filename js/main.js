// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Initialize Swiper
const swiper = new Swiper('.workflowSwiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: false,
    initialSlide: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    autoHeight: false,
    effect: 'slide',
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true
        }
    }
});

// Language Management
let currentLanguage = 'hu';
const translations = {
    hu: LANG_HU,
    en: LANG_EN
};

// Language Dropdown Toggle
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const currentLangDisplay = document.getElementById('currentLang');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langBtn.classList.toggle('active');
    langMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langBtn.classList.remove('active');
        langMenu.classList.remove('active');
    }
});

// Language Selection
const langOptions = document.querySelectorAll('.lang-option');
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        if (selectedLang !== currentLanguage) {
            currentLanguage = selectedLang;
            updateLanguage(selectedLang);
            currentLangDisplay.textContent = selectedLang.toUpperCase();
        }
        langBtn.classList.remove('active');
        langMenu.classList.remove('active');
    });
});

// Update Language Function
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    document.documentElement.lang = lang;
}

// Helper function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    const subject = currentLanguage === 'hu'
        ? 'Katalógus Plusz - Érdeklődés'
        : 'Katalógus Plusz - Inquiry';

    const body = `
${currentLanguage === 'hu' ? 'Név' : 'Name'}: ${formData.name}
${currentLanguage === 'hu' ? 'Email' : 'Email'}: ${formData.email}
${currentLanguage === 'hu' ? 'Telefon' : 'Phone'}: ${formData.phone || 'N/A'}

${currentLanguage === 'hu' ? 'Üzenet' : 'Message'}:
${formData.message}
    `.trim();

    window.location.href = `mailto:info@arrabona.hu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    contactForm.reset();
});

// Smooth scroll for anchor links (if any added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize with default language
updateLanguage(currentLanguage);
