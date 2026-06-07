// ==============================
// MOBILE MENU
// ==============================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==============================
// HEADER — scroll state
// ==============================
const header = document.getElementById('header');

function updateHeader() {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // hide header in the middle of the hero on desktop
    if (window.innerWidth > 768) {
        const scrollY = window.scrollY;
        const heroH = window.innerHeight;
        const inHero = scrollY < heroH - 200;
        const pastTop = scrollY > 80;

        if (inHero && pastTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    } else {
        header.style.transform = 'translateY(0)';
    }
}

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', updateHeader);
updateHeader();