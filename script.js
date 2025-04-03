 // Hamburger Menu
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.nav-menu');

 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
 });

 document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
     hamburger.classList.remove('active');
     navMenu.classList.remove('active');
 }));

 // Scroll Animation
 const header = document.querySelector('header');
 const sections = document.querySelectorAll('.section');
 const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    // Header scroll effect
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Animate sections on scroll
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        // Check if section is visible in viewport
        if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
            // Section is visible, add animation class
            section.classList.add('animated');
            const aboutContent = section.querySelector('.about-content');
            if (aboutContent) {
                aboutContent.style.opacity = '1';
                aboutContent.style.transform = 'translateY(0)';
                const aboutBtn = aboutContent.querySelector('.btn');
                if (aboutBtn) {
                    aboutBtn.style.opacity = '1';
                    aboutBtn.style.transform = 'translateY(0)';
                }
            }
        } else {
            // Section is not visible, remove animation class to reset animations
            section.classList.remove('animated');
            const aboutContent = section.querySelector('.about-content');
            if (aboutContent) {
                aboutContent.style.opacity = '0';
                aboutContent.style.transform = 'translateY(30px)';
                const aboutBtn = aboutContent.querySelector('.btn');
                if (aboutBtn) {
                    aboutBtn.style.opacity = '0';
                    aboutBtn.style.transform = 'translateY(30px)';
                }
            }
        }
    });
});

 // Animate hero section on load
 window.addEventListener('load', () => {
     heroSection.classList.add('animated');
     
     // Create rainbow floating shapes
    const floatingShapes = document.querySelectorAll('.floating-shapes');
    floatingShapes.forEach(container => {
        for (let i = 0; i < 10; i++) {
            const size = Math.random() * 50 + 10;
            const shape = document.createElement('div');
            shape.classList.add('shape');
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${Math.random() * 100}%`;
            // Position shapes at the bottom of the container
            shape.style.top = `${80 + Math.random() * 20}%`;
            shape.style.animationDuration = `${Math.random() * 20 + 10}s`;
            shape.style.animationDelay = `${Math.random() * 5}s`;
            // Start with 0 opacity
            shape.style.opacity = '0';
            container.appendChild(shape);
        
            // Fade in the shape
            setTimeout(() => {
                shape.style.opacity = '0.1';
                shape.style.transition = 'opacity 1s ease-in';
            }, Math.random() * 1000);
            }
        });
 });

 // Smooth scroll for navigation
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Button hover effects
 const buttons = document.querySelectorAll('.btn');
 buttons.forEach(btn => {
     btn.addEventListener('mouseover', () => {
         btn.style.transform = 'translateY(-5px)';
         btn.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
     });
     
     btn.addEventListener('mouseout', () => {
 btn.style.transform = '';
 btn.style.boxShadow = '';
});
});