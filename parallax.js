// ==========================================================================
// PARALLAX & INTERACTIVE EFFECTS
// ==========================================================================

(function() {
    'use strict';

    // === SCROLL NAVIGATION === //
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class to nav
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // === PARALLAX SCROLL EFFECT === //
    function parallaxScroll() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const yPos = -(rect.top + scrolled) * speed;

            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }

    // === SMOOTH SCROLL REVEAL === //
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    // === MOUSE PARALLAX EFFECT === //
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;

        // Apply to hero elements
        const heroElements = document.querySelectorAll('[data-mouse-parallax]');
        heroElements.forEach(element => {
            const speed = element.dataset.mouseParallax || 20;
            const x = mouseX * speed;
            const y = mouseY * speed;

            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // === CURSOR GLOW EFFECT === //
    function createCursorGlow() {
        const cursorGlow = document.createElement('div');
        cursorGlow.classList.add('cursor-glow');
        document.body.appendChild(cursorGlow);

        let cursorX = 0;
        let cursorY = 0;
        let glowX = 0;
        let glowY = 0;

        document.addEventListener('mousemove', (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
        });

        function animateGlow() {
            // Smooth follow effect
            glowX += (cursorX - glowX) * 0.15;
            glowY += (cursorY - glowY) * 0.15;

            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';

            requestAnimationFrame(animateGlow);
        }

        animateGlow();
    }

    // Only create cursor glow on desktop
    if (window.innerWidth > 768) {
        createCursorGlow();
    }

    // === FLOATING ANIMATION === //
    function initFloatingElements() {
        const floatingElements = document.querySelectorAll('[data-float]');

        floatingElements.forEach((element, index) => {
            const delay = index * 0.2;
            const duration = 3 + (index * 0.5);

            element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        });
    }

    // === TILT EFFECT ON CARDS === //
    function initTiltEffect() {
        const tiltElements = document.querySelectorAll('.portfolio-item, .process-step, .pricing-card');

        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    // === IMAGE REVEAL ON SCROLL === //
    function initImageReveal() {
        const images = document.querySelectorAll('.technique-image-wrapper img');

        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transform = 'scale(1.1)';

            const imgObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                        img.style.opacity = '1';
                        img.style.transform = 'scale(1)';
                        imgObserver.unobserve(img);
                    }
                });
            }, { threshold: 0.1 });

            imgObserver.observe(img);
        });
    }

    // === STATS COUNTER ANIMATION === //
    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            const suffix = element.textContent.replace(/[\d,]/g, '');
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }

    function initCounters() {
        const counters = document.querySelectorAll('.stat-number');

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // === SMOOTH ANCHOR SCROLLING === //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === FAQ ACCORDION === //
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.faq-answer').style.maxHeight = '0';
                });

                // Open clicked if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }

    // === STAGGER ANIMATION === //
    function staggerAnimation(elements, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * delay);
        });
    }

    // === VIDEO AUTOPLAY ON SCROLL === //
    function initVideoAutoplay() {
        const videos = document.querySelectorAll('video[autoplay]');

        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.5 });

        videos.forEach(video => videoObserver.observe(video));
    }

    // === PARALLAX BACKGROUND === //
    function createParallaxLayers() {
        const sections = document.querySelectorAll('.hero, .about-section, .portfolio-section');

        sections.forEach(section => {
            // Create parallax background if it doesn't exist
            if (!section.querySelector('.parallax-bg')) {
                const parallaxBg = document.createElement('div');
                parallaxBg.classList.add('parallax-bg');
                parallaxBg.setAttribute('data-parallax', '0.3');
                section.insertBefore(parallaxBg, section.firstChild);
            }
        });
    }

    // === INITIALIZE ALL === //
    function init() {
        // Set up parallax layers
        createParallaxLayers();

        // Initialize floating elements
        initFloatingElements();

        // Initialize tilt effect
        if (window.innerWidth > 768) {
            initTiltEffect();
        }

        // Initialize image reveal
        initImageReveal();

        // Initialize counters
        initCounters();

        // Initialize FAQ
        initFAQ();

        // Initialize video autoplay
        initVideoAutoplay();

        // Add animation classes to elements
        document.querySelectorAll('.about-content').forEach(el => el.classList.add('fade-in'));
        document.querySelectorAll('.portfolio-item').forEach(el => el.classList.add('scale-in'));
        document.querySelectorAll('.process-step').forEach((el, i) => {
            el.classList.add(i % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        });

        console.log('🎨 Glassmorphism & Parallax effects initialized!');
    }

    // === EVENT LISTENERS === //
    window.addEventListener('scroll', parallaxScroll);
    window.addEventListener('load', init);

    // Initialize immediately if DOM is already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(init, 1);
    }

})();
