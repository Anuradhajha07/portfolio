/**
 * ==============================================================================
 * ANURADHA JHA - PORTFOLIO JAVASCRIPT
 * Features:
 *  - Sticky Navbar with blur & dynamic scroll state
 *  - Mobile Navigation Drawer with accessible ARIA toggle
 *  - Active Section Spy using IntersectionObserver
 *  - Smooth Scroll behavior
 *  - Dynamic Copyright Year
 *  - Contact Form client-side validation, helpful feedback & mailto integration
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
  initContactForm();
  setCurrentYear();
});

/* --------------------------------------------------------------------------
   1. STICKY NAVBAR ON SCROLL
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on page load
}

/* --------------------------------------------------------------------------
   2. MOBILE HAMBURGER MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
    navToggle.classList.toggle('open', isOpen);
    navMenu.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen.toString());

    // Prevent background scrolling when menu is open on mobile
    if (window.innerWidth <= 768) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  };

  navToggle.addEventListener('click', () => toggleMenu());

  // Close menu when clicking on any navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  });

  // Close menu if user clicks outside of navbar on mobile
  document.addEventListener('click', (event) => {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      toggleMenu(false);
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Reset body overflow on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
      toggleMenu(false);
      document.body.style.overflow = '';
    }
  });
}

/* --------------------------------------------------------------------------
   3. ACTIVE NAVIGATION LINK (SCROLL SPY)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------------
   4. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM VALIDATION & HANDLING
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const formStatusBox = document.getElementById('formStatusBox');
  const statusIcon = document.getElementById('statusIcon');
  const statusTitle = document.getElementById('statusTitle');
  const statusDesc = document.getElementById('statusDesc');
  const statusActions = document.getElementById('statusActions');

  if (!form) return;

  // Simple email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const clearErrors = () => {
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.classList.remove('invalid');
    });
    [nameError, emailError, messageError].forEach((error) => {
      error.classList.remove('visible');
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;
    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const messageVal = messageInput.value.trim();

    // Validation rules
    if (!nameVal) {
      nameInput.classList.add('invalid');
      nameError.classList.add('visible');
      isValid = false;
    }

    if (!emailVal || !emailPattern.test(emailVal)) {
      emailInput.classList.add('invalid');
      emailError.classList.add('visible');
      isValid = false;
    }

    if (!messageVal) {
      messageInput.classList.add('invalid');
      messageError.classList.add('visible');
      isValid = false;
    }

    if (!isValid) return;

    /* =========================================================================
       NOTE ON BACKEND INTEGRATION:
       Right now, the website runs completely locally without a backend.
       Instead of falsely claiming the message was sent to a server, we:
       1. Provide a direct mailto action prefilled with the user's message.
       2. Give clear feedback explaining how to send or link Formspree/EmailJS.
       ========================================================================= */

    // Prepare mailto link details
    const recipient = 'anuradhajha1303@gmail.com';
    const emailSubject = encodeURIComponent(`Portfolio Inquiry from ${nameVal}`);
    const emailBody = encodeURIComponent(
      `Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    // Render feedback inside formStatusBox
    statusTitle.textContent = `Thank you, ${nameVal}!`;
    statusDesc.innerHTML = `Your message is ready. Since this website runs locally without a backend server, you can send it directly to <strong>${recipient}</strong> right now using your default email client.`;

    statusActions.innerHTML = `
      <a href="${mailtoUrl}" class="btn btn-sm btn-primary" id="openMailBtn">
        Open in Mail App &amp; Send
      </a>
      <button type="button" class="btn btn-sm btn-outline" id="resetStatusBtn">
        Send Another Message
      </button>
    `;

    formStatusBox.classList.remove('hidden');

    // Attach reset handler
    const resetStatusBtn = document.getElementById('resetStatusBtn');
    if (resetStatusBtn) {
      resetStatusBtn.addEventListener('click', () => {
        form.reset();
        formStatusBox.classList.add('hidden');
      });
    }
  });

  // Real-time error removal when typing
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      const err = document.getElementById(`${input.id}Error`);
      if (err) err.classList.remove('visible');
    });
  });
}

/* --------------------------------------------------------------------------
   6. DYNAMIC COPYRIGHT YEAR
   -------------------------------------------------------------------------- */
function setCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
