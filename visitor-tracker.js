// Visitor Tracking Script for Greengyeol Landing Page
(function() {
  'use strict';

  // Configuration
  const API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzMnXsjDyfenm_JAlfDoKPNGVl25-DOtA9ZJj75WQszgyNxoSlLuRochnE2LIB1j8F9rg/exec';

  let sessionStartTime = Date.now();
  let isTracked = false;
  let userActions = [];

  // Get visitor information
  function getVisitorInfo() {
    return {
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      referrer: document.referrer || 'Direct',
      user_agent: navigator.userAgent,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      language: getCurrentLanguage(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      session_duration: 0,
      actions: userActions,
    };
  }

  // Add action to tracking
  function addAction(action) {
    if (!userActions.some(a => a.name === action)) {
      userActions.push({ name: action });
    }
  }

  // Get current language from the page
  function getCurrentLanguage() {
    const activeLangBtn = document.querySelector('.lang-btn.active');
    if (activeLangBtn) {
      return activeLangBtn.getAttribute('data-lang') || 'en';
    }
    return navigator.language || 'en';
  }

  // Calculate session duration
  function getSessionDuration() {
    return Math.floor((Date.now() - sessionStartTime) / 1000);
  }

  // Send visitor data to Google Sheets
  async function trackVisitor() {
    if (isTracked) return;

    const visitorInfo = getVisitorInfo();
    visitorInfo.session_duration = getSessionDuration();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorInfo),
      });

      const data = await response.json();

      if (data.success) {
        console.log('✅ Visitor tracked successfully');
        isTracked = true;
      } else {
        console.error('❌ Failed to track visitor:', data.error);
      }
    } catch (error) {
      console.error('❌ Error tracking visitor:', error);
    }
  }

  // Initialize tracking
  function initTracking() {
    // Track after 5 seconds of page load
    setTimeout(() => {
      addAction('Page Visit');
      trackVisitor();
    }, 5000);

    // Track on page visibility change (when user leaves)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && !isTracked) {
        trackVisitor();
      }
    });

    // Track before page unload
    window.addEventListener('beforeunload', () => {
      if (!isTracked) {
        const visitorInfo = getVisitorInfo();
        visitorInfo.session_duration = getSessionDuration();
        navigator.sendBeacon(API_ENDPOINT, JSON.stringify(visitorInfo));
        isTracked = true;
      }
    });

    // Track language changes
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        addAction(`Language: ${lang === 'en' ? 'EN' : '中文'}`);
      });
    });

    // Track booking button clicks
    const bookingButtons = document.querySelectorAll('a[href="#booking"], .btn-primary');
    bookingButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        addAction('Booking Button Click');
      });
    });

    // Track WhatsApp button click
    const whatsappButton = document.querySelector('a[href*="wa.me"]');
    if (whatsappButton) {
      whatsappButton.addEventListener('click', () => {
        addAction('WhatsApp Contact');
      });
    }

    // Track portfolio viewing
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            addAction('Viewed Portfolio');
          }
        });
      }, { threshold: 0.5 });
      observer.observe(portfolioSection);
    }

    // Track process section viewing
    const processSection = document.querySelector('#process');
    if (processSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            addAction('Viewed Process');
          }
        });
      }, { threshold: 0.5 });
      observer.observe(processSection);
    }

    // Track Instagram link click
    const instagramLink = document.querySelector('a[href*="instagram.com"]');
    if (instagramLink) {
      instagramLink.addEventListener('click', () => {
        addAction('Instagram Click');
      });
    }

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
        if (maxScrollDepth >= 75 && !userActions.some(a => a.name === 'Scrolled 75%')) {
          addAction('Scrolled 75%');
        } else if (maxScrollDepth >= 50 && !userActions.some(a => a.name === 'Scrolled 50%')) {
          addAction('Scrolled 50%');
        } else if (maxScrollDepth >= 25 && !userActions.some(a => a.name === 'Scrolled 25%')) {
          addAction('Scrolled 25%');
        }
      }
    });
  }

  // Initialize tracking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }
})();
