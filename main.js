document.documentElement.classList.remove('no-js');

// Page loading state
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});

// Analytics helper function
const trackEvent = (eventName, eventParams = {}) => {
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventParams);
    }
};

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        status.textContent = '';
        status.className = 'form-status';

        if (!form.checkValidity()) {
            form.reportValidity();
            status.textContent = 'Please complete all required fields.';
            status.classList.add('error');
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : '';
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-small"></span> Sending...';
            submitButton.classList.add('loading');
        }

        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        // Honeypot spam protection - reject if honeypot field is filled
        if (payload.website) {
            console.warn('Spam detected via honeypot field');
            // Pretend it worked to avoid giving spammers feedback
            setTimeout(() => {
                form.reset();
                setModalOpen(true);
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    submitButton.classList.remove('loading');
                }
            }, 1000);
            return;
        }

        // Remove honeypot field from payload
        delete payload.website;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Server error: ${response.status}`);
            }

            status.textContent = '';
            form.reset();
            setModalOpen(true);

            // Track successful form submission
            trackEvent('form_submit', {
                form_name: 'contact_form',
                form_destination: '/api/contact'
            });
        } catch (error) {
            status.textContent = error.message.includes('Server error')
                ? 'We\'re experiencing technical difficulties. Please try again in a few minutes or email us directly at contact@lsvautocloud.com'
                : 'Sorry, we could not send your message. Please check your connection and try again.';
            status.classList.add('error');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                submitButton.classList.remove('loading');
            }
        }
    });
}

const navLinks = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector('header');
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navBackdrop = document.getElementById('nav-backdrop');
const body = document.body;
const successModal = document.getElementById('success-modal');
const successBackdrop = document.getElementById('success-backdrop');
const successClose = document.getElementById('success-close');

const setNavOpen = (isOpen) => {
    if (!navToggle || !mobileNav) return;
    body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileNav.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
        // Focus trap: focus first link when menu opens
        const firstLink = mobileNav.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    } else {
        // Return focus to toggle button when menu closes
        navToggle.focus();
    }
};

const setModalOpen = (isOpen) => {
    if (!successModal || !successBackdrop) return;
    body.classList.toggle('modal-open', isOpen);
    successModal.setAttribute('aria-hidden', String(!isOpen));
    successBackdrop.setAttribute('aria-hidden', String(!isOpen));
};

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isOpen = body.classList.contains('nav-open');
        setNavOpen(!isOpen);
    });
}

if (navBackdrop) {
    navBackdrop.addEventListener('click', () => setNavOpen(false));
}

if (mobileNav) {
    mobileNav.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            setNavOpen(false);
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('nav-open')) {
        setNavOpen(false);
    }
    if (event.key === 'Escape' && body.classList.contains('modal-open')) {
        setModalOpen(false);
    }
});

if (successBackdrop) {
    successBackdrop.addEventListener('click', () => setModalOpen(false));
}

if (successClose) {
    successClose.addEventListener('click', () => setModalOpen(false));
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let activeScrollAnimation = null;
let lastScrollTop = null;

const cancelScrollAnimation = () => {
    body.classList.remove('is-scroll-animating');
    if (!activeScrollAnimation) return;
    activeScrollAnimation.cancelled = true;
    if (activeScrollAnimation.rafId) {
        cancelAnimationFrame(activeScrollAnimation.rafId);
    }
    activeScrollAnimation = null;
};

const scrollToTop = (top) => {
    const clampedTop = Math.max(0, top);
    const nextTop = Math.round(clampedTop);
    if (nextTop === lastScrollTop) return;
    lastScrollTop = nextTop;
    window.scrollTo(0, nextTop);
};

const easeInOutSmootheststep = (t) => {
    // 7th-order S-curve: smooth position, velocity, and acceleration at ends.
    // 35t^4 - 84t^5 + 70t^6 - 20t^7
    const t2 = t * t;
    const t4 = t2 * t2;
    return t4 * (35 + t * (-84 + t * (70 - 20 * t)));
};

window.addEventListener('wheel', cancelScrollAnimation, { passive: true });
window.addEventListener('touchstart', cancelScrollAnimation, { passive: true });

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        cancelScrollAnimation();

        if (body.classList.contains('nav-open')) {
            setNavOpen(false);
        }

        const headerOffset = header ? header.offsetHeight : 0;
        const elementTop = target.getBoundingClientRect().top + window.scrollY;
        const scrollTo = elementTop - headerOffset;

        if (prefersReducedMotion) {
            scrollToTop(scrollTo);
            return;
        }

        // Smooth scroll with balanced duration using custom easing
        const startPosition = window.scrollY;
        const distance = scrollTo - startPosition;
        const duration = 1600; // Slightly longer: 1600ms (1.6 seconds) for extra smoothness
        let startTime = null;

        if (Math.abs(distance) < 1) return;

        const scrollAnimation = { cancelled: false, rafId: null };
        activeScrollAnimation = scrollAnimation;
        lastScrollTop = null;
        body.classList.add('is-scroll-animating');

        function animation(currentTime) {
            if (scrollAnimation.cancelled) return;
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutSmootheststep(progress);

            scrollToTop(startPosition + distance * ease);

            if (progress < 1) {
                scrollAnimation.rafId = requestAnimationFrame(animation);
            } else {
                activeScrollAnimation = null;
                body.classList.remove('is-scroll-animating');
            }
        }

        scrollAnimation.rafId = requestAnimationFrame(animation);
    });
});

const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Track demo button clicks
document.querySelectorAll('a[href*="calendly.com"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('click', {
            event_category: 'CTA',
            event_label: 'Book Demo',
            link_url: link.href
        });
    });
});

// Track Talk to Sales clicks
document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('click', {
            event_category: 'CTA',
            event_label: 'Talk to Sales',
            link_url: '#contact'
        });
    });
});

// Track social media link clicks
document.querySelectorAll('.nav-social, .nav-social-mobile').forEach(link => {
    link.addEventListener('click', () => {
        const platform = link.href.includes('instagram') ? 'Instagram' : 'Facebook';
        trackEvent('click', {
            event_category: 'Social',
            event_label: platform,
            link_url: link.href
        });
    });
});

const revealOnScroll = (elements, options = {}) => {
    const elementList = Array.from(elements);
    if (!elementList.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elementList.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        elementList.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px 0px -10% 0px',
            ...options,
        }
    );

    elementList.forEach((el) => observer.observe(el));
};

revealOnScroll(document.querySelectorAll('.feature-grid .feature'));

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile Sticky CTA
const mobileStickyCta = document.getElementById('mobile-sticky-cta');
if (mobileStickyCta) {
    window.addEventListener('scroll', () => {
        // Show after scrolling past hero section (approximately 600px)
        if (window.scrollY > 600) {
            mobileStickyCta.classList.add('visible');
        } else {
            mobileStickyCta.classList.remove('visible');
        }
    }, { passive: true });

    // Track clicks on mobile sticky CTA
    mobileStickyCta.addEventListener('click', () => {
        trackEvent('click', {
            event_category: 'CTA',
            event_label: 'Mobile Sticky Book Demo',
            link_url: '#book-demo'
        });
    });
}

// Cookie Consent
const cookieConsent = document.getElementById('cookie-consent');
const acceptCookies = document.getElementById('accept-cookies');
const declineCookies = document.getElementById('decline-cookies');

const showCookieConsent = () => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }
};

if (acceptCookies) {
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');

        // Enable analytics if consent is given
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    });
}

if (declineCookies) {
    declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('show');

        // Disable analytics if consent is declined
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    });
}

showCookieConsent();

// Phone Number Formatting
const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');

    // Format based on length
    if (phoneNumber.length <= 3) {
        return phoneNumber;
    } else if (phoneNumber.length <= 6) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else {
        // Limit to 10 digits
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
};

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        const cursorPosition = e.target.selectionStart;
        const oldLength = e.target.value.length;
        const formatted = formatPhoneNumber(e.target.value);
        e.target.value = formatted;

        // Adjust cursor position after formatting
        const newLength = formatted.length;
        const diff = newLength - oldLength;
        e.target.setSelectionRange(cursorPosition + diff, cursorPosition + diff);
    });

    // Prevent non-numeric input (except backspace, delete, arrow keys, etc.)
    phoneInput.addEventListener('keydown', (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    });
}

// Form Data Persistence
const saveFormData = () => {
    if (!form) return;
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        if (key !== 'website') { // Don't save honeypot field
            data[key] = value;
        }
    });

    localStorage.setItem('contactFormData', JSON.stringify(data));
};

const loadFormData = () => {
    if (!form) return;
    const savedData = localStorage.getItem('contactFormData');

    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const field = form.elements[key];
                if (field && data[key]) {
                    field.value = data[key];
                }
            });
        } catch (e) {
            console.error('Error loading form data:', e);
        }
    }
};

// Save form data on input
if (form) {
    const formInputs = form.querySelectorAll('input:not([type="submit"]), textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('input', saveFormData);
        input.addEventListener('change', saveFormData);
    });

    // Load saved data on page load
    loadFormData();

    // Clear saved data on successful submission
    const originalFormSubmit = form.addEventListener;
    form.addEventListener('submit', async (event) => {
        const wasSuccessful = await new Promise(resolve => {
            setTimeout(() => {
                // Check if form was reset (indicates success)
                const isEmpty = Array.from(formInputs).every(input => !input.value);
                if (isEmpty) {
                    localStorage.removeItem('contactFormData');
                }
                resolve(true);
            }, 2000);
        });
    });
}
