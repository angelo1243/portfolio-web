/* Navigation buttons active state */
const navButton = document.querySelectorAll('.nav-button');

function setActive(id) {
  navButton.forEach(btn => {
    const target = btn.getAttribute('href').slice(1);
    btn.classList.toggle('active-nav-button', target === id);
  });
}


/* Intersection Observer to detect visible sections */
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    const visibleSection = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleSection) {
      setActive(visibleSection.target.id);
    }
  },
  {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  }
);

sections.forEach(section => observer.observe(section));

