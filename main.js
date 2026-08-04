import './style.css';

// ─────────────────────────────────────────────
// 1. Theme Toggle (Light / Dark)
// ─────────────────────────────────────────────
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(dark) {
  if (dark) {
    html.classList.add('dark');
    themeIcon.textContent = 'light_mode';
  } else {
    html.classList.remove('dark');
    themeIcon.textContent = 'dark_mode';
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Sync icon to the theme already applied by the anti-FOUC inline script
// (avoids a double-apply that could cause flicker)
const isDark = html.classList.contains('dark');
themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  applyTheme(!html.classList.contains('dark'));
});

// ─────────────────────────────────────────────
// 2. Typewriter Effect
// ─────────────────────────────────────────────
const words = ['Engineer', 'Student', 'Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById('typing-text');

function type() {
  if (!typingText) return;
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    typingText.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    typingText.textContent = currentWord.substring(0, charIndex);
  }

  let speed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    speed = 2000; // pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

type();

// ─────────────────────────────────────────────
// 3. Scroll-Reveal Animation (IntersectionObserver)
// ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ─────────────────────────────────────────────
// 4. Active Nav Link Tracking on Scroll
// ─────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  let current = '';
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove(
      'text-primary',
      'font-bold',
      "after:content-['']",
      'after:absolute',
      'after:-bottom-2',
      'after:left-1/2',
      'after:-translate-x-1/2',
      'after:w-1.5',
      'after:h-1.5',
      'after:bg-primary',
      'after:rounded-full'
    );
    link.classList.add('text-on-surface-variant');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add(
        'text-primary',
        'font-bold',
        "after:content-['']",
        'after:absolute',
        'after:-bottom-2',
        'after:left-1/2',
        'after:-translate-x-1/2',
        'after:w-1.5',
        'after:h-1.5',
        'after:bg-primary',
        'after:rounded-full'
      );
      link.classList.remove('text-on-surface-variant');
    }
  });
}

window.addEventListener('scroll', highlightNav);
highlightNav();

// ─────────────────────────────────────────────
// 5. Mobile Menu Toggle
// ─────────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ─────────────────────────────────────────────
// 6. Project Filter Buttons
// ─────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.project-filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active button styles
    filterBtns.forEach((b) => {
      b.classList.remove('bg-primary', 'text-on-primary', 'shadow-md');
      b.classList.add(
        'border',
        'border-outline-variant/40',
        'text-on-surface-variant'
      );
    });
    btn.classList.add('bg-primary', 'text-on-primary', 'shadow-md');
    btn.classList.remove(
      'border',
      'border-outline-variant/40',
      'text-on-surface-variant'
    );

    // Filter project cards with animation
    projectCards.forEach((card) => {
      const tags = card.dataset.tags || '';
      if (filter === 'all' || tags.includes(filter)) {
        card.style.display = '';
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ─────────────────────────────────────────────
// 7. GitHub Contribution Grid Simulation
// ─────────────────────────────────────────────
const githubGrid = document.getElementById('github-grid');

if (githubGrid) {
  const intensities = [
    'bg-surface-container-high',
    'bg-surface-container-high',
    'bg-surface-container-high',
    'bg-[#9be9a8]',
    'bg-[#40c463]',
    'bg-[#30a14e]',
    'bg-[#216e39]',
  ];

  for (let i = 0; i < 180; i++) {
    const cell = document.createElement('div');
    const color = intensities[Math.floor(Math.random() * intensities.length)];
    cell.className = `github-cell ${color}`;
    cell.title = `${Math.floor(Math.random() * 6)} contributions`;
    githubGrid.appendChild(cell);
  }
}

// ─────────────────────────────────────────────
// 8. Contact Form Submission (Mock)
// ─────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = 'Please fill in all fields.';
      formFeedback.classList.remove('hidden', 'bg-primary/10', 'text-primary');
      formFeedback.classList.add('bg-red-500/10', 'text-red-400');
      return;
    }

    // Simulate successful submission
    formFeedback.textContent = `Thanks, ${name}! Your message has been received. I'll get back to you soon.`;
    formFeedback.classList.remove('hidden', 'bg-red-500/10', 'text-red-400');
    formFeedback.classList.add('bg-primary/10', 'text-primary');

    contactForm.reset();

    setTimeout(() => {
      formFeedback.classList.add('hidden');
    }, 5000);
  });
}

// ─────────────────────────────────────────────
// 9. Smooth Scroll for Anchor Links
// ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
