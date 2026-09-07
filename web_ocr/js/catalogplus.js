// LANGUAGE AND ILLUSTRATIONS
const translations = {hu: window.LANG_OCR_HU, en: window.LANG_OCR_EN};
const imageDialog = document.getElementById('figure-dialog');

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = copy[element.dataset.i18n]; });
  for (const attribute of ['aria-label', 'alt', 'content']) {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
      element.setAttribute(attribute, copy[element.getAttribute(`data-i18n-${attribute}`)]);
    });
  }
  document.querySelectorAll('[data-localised-image]').forEach(image => {
    image.src = `img/${image.dataset.localisedImage}-${language}.png?v=20260907-1`;
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  history.replaceState(null, '', url);
  if (imageDialog.open) imageDialog.close();
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
const requestedLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(requestedLanguage === 'en' ? 'en' : 'hu');

document.querySelectorAll('.enlarge-image').forEach(button => button.addEventListener('click', () => {
  const source = button.querySelector('img');
  const target = document.getElementById('large-figure');
  target.src = source.src;
  target.alt = source.alt;
  imageDialog.showModal();
}));
document.querySelector('.close-figure').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
