// ========== ANIMATIONS AU SCROLL (Intersection Observer) ==========
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -20px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Sélection de tous les éléments à animer (About, Projets, Études, Compétences, Contacts)
const elementsToAnimate = document.querySelectorAll(
  '.pages_about h2, .pages_about .content, .pages_about .avatar, ' +
  '.pages_projets h2, .projects-section h3, .project-card, ' +
  '.pages_etudes h2, .study-card, ' +
  '.competences h2, .skill-card, ' +
  '.pages_contacts h2, .contact-info, .contact-form-wrapper'
);

elementsToAnimate.forEach(el => observer.observe(el));

// ========== BOUTON RETOUR EN HAUT ==========
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}