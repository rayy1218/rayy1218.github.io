/**
 * Portfolio Website - Main JavaScript
 * Core functionality for theme, navigation, and animations
 */


// Mobile Navigation
const MobileNav = {
  init() {
    this.menu = document.getElementById('mobile-menu');
    this.overlay = document.getElementById('mobile-menu-overlay');
    this.hamburger = document.getElementById('hamburger');

    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggle());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }

    // Close on mobile link click
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  },

  toggle() {
    this.menu?.classList.toggle('open');
    this.overlay?.classList.toggle('open');
    this.hamburger?.classList.toggle('open');
  },

  close() {
    this.menu?.classList.remove('open');
    this.overlay?.classList.remove('open');
    this.hamburger?.classList.remove('open');
  }
};

// Active Navigation Highlight
const ActiveNav = {
  init() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const linkPath = href.replace('./', '/').replace('index.html', '');
        const normalizedCurrent = currentPath.replace('index.html', '');

        if (
          (linkPath === '/' && (normalizedCurrent === '/' || normalizedCurrent.endsWith('/index.html') || normalizedCurrent === '')) ||
          (linkPath !== '/' && normalizedCurrent.includes(linkPath.replace('/', '')))
        ) {
          link.classList.add('active');
        }
      }
    });
  }
};

// Smooth Scroll
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
};

// Navigation Header Component
const NavHeader = {
  render() {
    return `
      <!-- Navigation -->
      <nav class="nav-blur fixed w-full top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center h-16">
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-6">
              <a href="index.html" class="nav-link">Home</a>
              <a href="resume.html" class="nav-link">Resume</a>
              <a href="portfolio.html" class="nav-link">Portfolio</a>
              <a href="contact.html" class="nav-link">Contact</a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
              <div id="hamburger" class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu-overlay" class="mobile-menu-overlay"></div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="mobile-menu">
        <div class="flex flex-col gap-6 mt-16">
          <a href="index.html" class="mobile-nav-link text-lg font-medium text-text-secondary hover:text-neon-cyan transition-colors">Home</a>
          <a href="resume.html" class="mobile-nav-link text-lg font-medium text-text-secondary hover:text-neon-cyan transition-colors">Resume</a>
          <a href="portfolio.html" class="mobile-nav-link text-lg font-medium text-text-secondary hover:text-neon-cyan transition-colors">Portfolio</a>
          <a href="contact.html" class="mobile-nav-link text-lg font-medium text-text-secondary hover:text-neon-cyan transition-colors">Contact</a>
        </div>
      </div>
    `;
  },

  inject() {
    const headerPlaceholder = document.getElementById('header');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = this.render();
    }
  }
};

// Footer Component
const Footer = {
  render() {
    return `
      <footer class="border-t border-white/10 py-8 mt-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-center">
            <div class="flex items-center gap-6">
              <a href="https://github.com/rayy1218" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-neon-cyan transition-colors">
                <i data-lucide="github" class="w-5 h-5"></i>
              </a>
              <a href="https://www.linkedin.com/in/ray-tham-100443234" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-neon-cyan transition-colors">
                <i data-lucide="linkedin" class="w-5 h-5"></i>
              </a>
              <a href="mailto:raytham1218@gmail.com" class="text-text-muted hover:text-neon-cyan transition-colors">
                <i data-lucide="mail" class="w-5 h-5"></i>
              </a>
            </div>
                      </div>
        </div>
      </footer>
    `;
  },

  inject() {
    const footerPlaceholder = document.getElementById('footer');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = this.render();
    }
  }
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  // Inject components
  NavHeader.inject();
  Footer.inject();

  // Initialize managers
  MobileNav.init();
  ActiveNav.init();
  SmoothScroll.init();

  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

});
window.NavHeader = NavHeader;
window.Footer = Footer;
