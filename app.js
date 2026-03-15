// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// pip copy — hero button
const pipBtn = document.getElementById('pip-copy-btn');
if (pipBtn) {
  pipBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText('pip install kodara').catch(() => {});
    pipBtn.textContent = 'Copied!';
    pipBtn.setAttribute('aria-label', 'Copied to clipboard');
    setTimeout(() => {
      pipBtn.textContent = 'pip install kodara';
      pipBtn.setAttribute('aria-label', 'Copy pip install kodara to clipboard');
    }, 2000);
  });
}

// pip copy — CTA input
const ctaInput = document.getElementById('cta-pip-input');
if (ctaInput) {
  ctaInput.addEventListener('click', () => {
    ctaInput.select();
    navigator.clipboard?.writeText(ctaInput.value).catch(() => {});
    ctaInput.style.background = '#f0fff6';
    setTimeout(() => { ctaInput.style.background = 'transparent'; }, 600);
  });
}

// Intersection observer for fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.bento-cell, .pricing-card, .savings-cell, .problem-col').forEach(el => {
  observer.observe(el);
});
