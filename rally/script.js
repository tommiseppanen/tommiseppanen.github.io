/* ==========================================================================
   RALLY SLIDE - INTERACTIVE JAVASCRIPT & ANIMATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Navigation Menu Toggle --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
        });
    });
});
