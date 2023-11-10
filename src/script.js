window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = section.offsetTop + section.offsetHeight - 50;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            correspondingNavLink.classList.add('active');
        } else {
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            correspondingNavLink.classList.remove('active');
        }
    });
});


const mobileMenuButton = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('nav ul');

mobileMenuButton.addEventListener('click', function() {
    nav.classList.toggle('show');
});
