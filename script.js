// ===== Navbar scroll state =====
const navbar = document.getElementById('navbar');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 40);
  toTop.classList.toggle('show', y > 600);
}, { passive: true });

// ===== Mobile menu =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    mobileMenu.classList.remove('open');
  });
});

// ===== Back to top =====
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Typewriter line in hero =====
const typedLines = [
  'npm run build — internship-ready.',
  'status: open to Software Development Internships.',
  'currently learning: system design patterns.'
];
const typedEl = document.getElementById('typedText');
let lineIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = typedLines[lineIndex];
  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % typedLines.length;
    }
  }
  setTimeout(typeLoop, deleting ? 28 : 42);
}
typeLoop();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Resume placeholder =====
const resumeBtn = document.getElementById('resumeBtn');
resumeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  resumeBtn.textContent = 'Add your résumé PDF link here';
  setTimeout(() => { resumeBtn.textContent = 'Download Resume'; }, 2200);
});

// ===== Contact form (visual placeholder) =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Message ready — connect a backend to send it';
  setTimeout(() => { btn.textContent = original; }, 2600);
});
