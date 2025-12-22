const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        status.textContent = '';

        if (!form.checkValidity()) {
            form.reportValidity();
            status.textContent = 'Please complete the required fields to book your demo.';
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : '';
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }

        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            status.textContent = '';
            form.reset();
            setModalOpen(true);
        } catch (error) {
            status.textContent = 'Sorry, we could not send your message. Please try again shortly.';
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
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

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();

        const headerOffset = header ? header.offsetHeight : 0;
        const elementTop = target.getBoundingClientRect().top + window.scrollY;
        const scrollTo = elementTop - headerOffset;

        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    });
});

const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}
