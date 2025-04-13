document.addEventListener("DOMContentLoaded", function () {
  const fontButtons = document.querySelectorAll('.text-size-controls button');
  const root = document.documentElement;

  const fontVars = {
    small: {
      '--font-scale-h1': 'var(--font-scale-small-h1)',
      '--font-scale-h2': 'var(--font-scale-small-h2)',
      '--font-scale-h3': 'var(--font-scale-small-h3)',
      '--font-scale-p':  'var(--font-scale-small-p)',
      '--font-scale-sm': 'var(--font-scale-small-sm)'
    },
    normal: {
      '--font-scale-h1': 'var(--font-scale-normal-h1)',
      '--font-scale-h2': 'var(--font-scale-normal-h2)',
      '--font-scale-h3': 'var(--font-scale-normal-h3)',
      '--font-scale-p':  'var(--font-scale-normal-p)',
      '--font-scale-sm': 'var(--font-scale-normal-sm)'
    },
    large: {
      '--font-scale-h1': 'var(--font-scale-large-h1)',
      '--font-scale-h2': 'var(--font-scale-large-h2)',
      '--font-scale-h3': 'var(--font-scale-large-h3)',
      '--font-scale-p':  'var(--font-scale-large-p)',
      '--font-scale-sm': 'var(--font-scale-large-sm)'
    }
  };

  function applyFontSize(size) {
    const vars = fontVars[size];
    Object.keys(vars).forEach(key => {
      root.style.setProperty(key, vars[key]);
    });

    fontButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-font-size') === size);
    });
  }

  const savedSize = localStorage.getItem('preferredFontSize') || 'normal';
  applyFontSize(savedSize);

  fontButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedSize = button.getAttribute('data-font-size');
      localStorage.setItem('preferredFontSize', selectedSize);
      applyFontSize(selectedSize);
    });
  });
});
