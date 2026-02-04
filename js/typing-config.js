/**
 * Portfolio Website - Typing Effect Configuration
 * Typed.js configuration for hero section typing animation
 */

const TypingConfig = {
  init() {
    if (typeof Typed === 'undefined') {
      console.warn('Typed.js not loaded');
      return;
    }

    const typedElement = document.getElementById('typed-roles');
    if (!typedElement) {
      return;
    }

    new Typed('#typed-roles', {
      strings: [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Software Engineer',
        'UI/UX Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure Typed.js is loaded
  setTimeout(() => {
    TypingConfig.init();
  }, 100);
});

// Export for manual use
window.TypingConfig = TypingConfig;
