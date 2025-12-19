const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        status.textContent = '';

        if (!form.checkValidity()) {
            form.reportValidity();
            status.textContent = 'Please complete the required fields to book your demo.';
            return;
        }

        status.textContent = 'Thanks! We received your request and will reply within one business day.';
    });
}

const navLinks = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector('header');

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();

        const headerOffset = header ? header.offsetHeight + 8 : 0;
        const elementTop = target.getBoundingClientRect().top + window.scrollY;
        const scrollTo = elementTop - headerOffset;

        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    });
});
