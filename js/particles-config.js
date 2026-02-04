/**
 * Portfolio Website - Particles Configuration
 * tsParticles configuration for cyberpunk particle effects
 */

const ParticlesConfig = {
  async init() {
    if (typeof tsParticles === 'undefined') {
      console.warn('tsParticles not loaded');
      return;
    }

    await tsParticles.load('particles-js', {
      fullScreen: {
        enable: false,
        zIndex: 0
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#00d4ff', '#a855f7', '#ec4899']
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false
          }
        },
        links: {
          enable: true,
          distance: 150,
          color: '#00d4ff',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'bounce'
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          },
          onClick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
              color: '#a855f7'
            }
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      detectRetina: true,
      background: {
        color: 'transparent'
      }
    });
  },

  // Reduced particles for mobile devices
  async initMobile() {
    if (typeof tsParticles === 'undefined') {
      console.warn('tsParticles not loaded');
      return;
    }

    await tsParticles.load('particles-js', {
      fullScreen: {
        enable: false,
        zIndex: 0
      },
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#00d4ff', '#a855f7']
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.4,
          random: true
        },
        size: {
          value: 2,
          random: true
        },
        links: {
          enable: true,
          distance: 120,
          color: '#00d4ff',
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'bounce'
          }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: false
          },
          onClick: {
            enable: false
          },
          resize: true
        }
      },
      detectRetina: true,
      background: {
        color: 'transparent'
      }
    });
  },

  // Auto-detect and initialize appropriate config
  autoInit() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      this.initMobile();
    } else {
      this.init();
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure tsParticles is loaded
  setTimeout(() => {
    ParticlesConfig.autoInit();
  }, 100);
});

// Export for manual use
window.ParticlesConfig = ParticlesConfig;
