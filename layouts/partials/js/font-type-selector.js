const fontFamilyButtons = document.querySelectorAll('.font-family-controls button');

const fontFamilies = {
  serif: {
    '--header-font': 'var(--serif-header-font)',
    '--paragraph-font': 'var(--serif-paragraph-font)',
    '--tab-font': 'var(--serif-tab-font)'
  },
  sans: {
    '--header-font': 'var(--sans-serif-header-font)',
    '--paragraph-font': 'var(--sans-serif-paragraph-font)',
    '--tab-font': 'var(--sans-serif-tab-font)'
  }
};

function applyFontFamily(type) {
  const vars = fontFamilies[type];
  Object.keys(vars).forEach(key => {
    root.style.setProperty(key, vars[key]);
  });

  fontFamilyButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-font-family') === type);
  });
  localStorage.setItem('preferredFontFamily', type);
}

// Load preferred font family from local storage or default to serif
const root = document.documentElement;
const savedFamily = localStorage.getItem('preferredFontFamily') || 'serif';
applyFontFamily(savedFamily);

fontFamilyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.getAttribute('data-font-family');
    applyFontFamily(selected);
  });
});
