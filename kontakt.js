// Obsługa menu mobilnego
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Zamykanie menu po kliknięciu poza nim
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Obsługa formularza
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Tutaj możesz dodać kod do wysyłania formularza, np. za pomocą fetch API
    alert('Dziękujemy za wysłanie wiadomości. Skontaktujemy się z Tobą wkrótce.');
    this.reset(); // Resetuje formularz po wysłaniu
});
