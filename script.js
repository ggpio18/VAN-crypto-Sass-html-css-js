document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction:  'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger for animations
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.from('#header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Hero section animation
    gsap.from('#hero h1, #hero p, #hero .cta-button', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Features animation
    gsap.from('.feature-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#features',
            start: 'top 80%'
        }
    });

    // Gallery animation
    gsap.from('.gallery-item', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 80%'
        }
    });

    // CTA section animation
    gsap.from('#cta h2, #cta p, #cta .subscribe-form', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#cta',
            start: 'top 80%'
        }
    });

    // Handle form submission
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        subscribeForm.reset();
    });

    // Handle buy button clicks
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('NFT purchase functionality would be implemented here.');
        });
    });
});