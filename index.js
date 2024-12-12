// Service tiles flip animation
document.querySelectorAll('.service-tile').forEach(tile => {
    const link = tile.querySelector('.service-link');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        tile.classList.toggle('flipped');
    });
});

// Animated counters
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
            clearInterval(timer);
            element.textContent = target;
        }
    }, 16);
}

const yearsCount = document.getElementById('yearsCount');
const hairFixedCount = document.getElementById('hairFixedCount');
const happyClientsCount = document.getElementById('happyClientsCount');

animateCounter(yearsCount, 2, 2000);
animateCounter(hairFixedCount, 100, 2000);
animateCounter(happyClientsCount, 100, 2000);

// Testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonialSlider();
}

function updateTestimonialSlider() {
    testimonialSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextTestimonial, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Image comparison slider
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.comparison-container');
    const beforeContainer = document.querySelector('.before-container');
    const sliderHandle = document.querySelector('.slider-handle');

    let isResizing = false;

    // Handle mouse events
    sliderHandle.addEventListener('mousedown', startSliding);
    document.addEventListener('mousemove', slide);
    document.addEventListener('mouseup', stopSliding);

    // Handle touch events
    sliderHandle.addEventListener('touchstart', startSliding);
    document.addEventListener('touchmove', slide);
    document.addEventListener('touchend', stopSliding);

    function startSliding(e) {
        isResizing = true;
        e.preventDefault(); // Prevent image dragging
    }

    function stopSliding() {
        isResizing = false;
    }

    function slide(e) {
        if (!isResizing) return;

        const containerRect = container.getBoundingClientRect();
        const x = (e.type === 'mousemove' ? e.pageX : e.touches[0].pageX) - containerRect.left;
        const position = Math.max(0, Math.min(x / containerRect.width * 100, 100));

        beforeContainer.style.width = `${position}%`;
        sliderHandle.style.left = `${position}%`;
    }

    // Initialize position
    beforeContainer.style.width = '50%';
    sliderHandle.style.left = '50%';
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});
