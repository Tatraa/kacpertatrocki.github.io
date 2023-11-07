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

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        event.preventDefault();
        alert('Proszę wypełnić wszystkie pola formularza.');
    }
});
