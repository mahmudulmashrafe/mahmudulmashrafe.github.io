document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Navigation
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');

        // Animate Links
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            
            navLinksLi.forEach(link => {
                link.style.animation = '';
            });
        }
    });

    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle i');

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Toggle dark mode
    themeToggle.addEventListener('click', () => {
        // Toggle body class
        document.body.classList.toggle('dark-mode');
        
        // Toggle icon
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Smooth scrolling for anchor links with section animations
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Remove animation classes from all sections
                document.querySelectorAll('section').forEach(section => {
                    section.classList.remove('animate-in');
                });
                
                // Reset social icons animation if navigating to home
                if (targetId === '#home') {
                    const socialIcons = document.querySelectorAll('.social-links a');
                    socialIcons.forEach(icon => {
                        // Force a reflow to restart the animation
                        icon.style.animation = 'none';
                        void icon.offsetWidth; // Trigger reflow
                        icon.style.animation = '';
                    });
                }
                
                // Reset animations for tech stack if navigating there
                if (targetId === '#tech-stack') {
                    document.querySelectorAll('.stack-category').forEach(category => {
                        category.classList.remove('animate');
                    });
                }
                
                // Reset animations for education section if navigating there
                if (targetId === '#education') {
                    document.querySelectorAll('.education-card').forEach(card => {
                        card.classList.remove('animate');
                    });
                }
                
                // Reset animations for experience section if navigating there
                if (targetId === '#experience') {
                    document.querySelectorAll('.experience-card').forEach(card => {
                        card.classList.remove('animate');
                    });
                }
                
                // Reset animations for projects section if navigating there
                if (targetId === '#projects') {
                    document.querySelectorAll('.project-card').forEach(card => {
                        card.classList.remove('animate');
                    });
                }
                
                // Scroll to target section
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Add animation class after a short delay
                setTimeout(() => {
                    targetElement.classList.add('animate-in');
                    
                    // If navigating to home, trigger animations
                    if (targetId === '#home') {
                        setTimeout(() => {
                            const socialIcons = document.querySelectorAll('.social-links a');
                            socialIcons.forEach(icon => {
                                // Force a reflow to restart the animation
                                icon.style.animation = 'none';
                                void icon.offsetWidth; // Trigger reflow
                                icon.style.animation = '';
                            });
                        }, 400);
                    }
                    
                    // If navigating to education, trigger animations
                    if (targetId === '#education') {
                        setTimeout(() => {
                            const educationCards = document.querySelectorAll('.education-card');
                            educationCards.forEach((card) => {
                                // Add animation class to trigger line-by-line animations
                                card.classList.add('animate');
                            });
                        }, 400);
                    }
                    
                    // If navigating to tech stack, animate first category immediately
                    if (targetId === '#tech-stack') {
                        setTimeout(() => {
                            const firstCategory = document.querySelector('.stack-category');
                            if (firstCategory) firstCategory.classList.add('animate');
                        }, 400);
                    }
                    
                    // If navigating to experience, trigger animations
                    if (targetId === '#experience') {
                        setTimeout(() => {
                            const experienceCards = document.querySelectorAll('.experience-card');
                            experienceCards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.classList.add('animate');
                                }, 100 * index);
                            });
                        }, 400);
                    }
                    
                    // If navigating to projects, trigger animations
                    if (targetId === '#projects') {
                        setTimeout(() => {
                            const projectCards = document.querySelectorAll('.project-card');
                            projectCards.forEach((card) => {
                                // Add animation class to trigger line-by-line animations
                                card.classList.add('animate');
                            });
                        }, 400);
                    }
                }, 300);
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burger.classList.remove('active');
                }
            }
        });
    });

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            console.log('Form submission:', Object.fromEntries(formData));
            
            // Show success message (replace with actual form submission)
            contactForm.innerHTML = '<div class="success-message">Thanks for your message! I\'ll get back to you soon.</div>';
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '-50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
                // Optional: Remove animation when section is out of view for re-animation
                if (entry.target.id !== 'home') { // Keep home section animated
                    entry.target.classList.remove('animate-in');
                }
            }
        });
    }, observerOptions);

    // Set up directional animations for different sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        // Apply different animation directions based on section order
        if (section.id === 'home') {
            // Home already has special animation in CSS
        } else if (index % 2 === 0) {
            section.classList.add('slide-in-left');
        } else {
            section.classList.add('slide-in-right');
        }
        
        // Observe the section
        sectionObserver.observe(section);
    });
    
    // Element-specific animations observer
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                elementObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements with animation classes
    document.querySelectorAll('.stack-item, .experience-card, .project-card, .info-item').forEach(el => {
        elementObserver.observe(el);
    });
    
    // Education section animation - should run before tech stack
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.education-card');
                cards.forEach((card) => {
                    // Add animation class to each card to trigger line-by-line animation
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, 200);
                });
            } else {
                // Reset animations when section goes out of view
                const cards = entry.target.querySelectorAll('.education-card');
                cards.forEach(card => {
                    card.classList.remove('animate');
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-50px 0px'
    });
    
    // Observe the education section
    const educationSection = document.querySelector('.education');
    if (educationSection) {
        educationObserver.observe(educationSection);
    }
    
    // Experience section animation
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.experience-card');
                cards.forEach((card, index) => {
                    // Set animation with sequential delay
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, 200 + (index * 100));
                });
            } else {
                // Reset animations when section goes out of view
                const cards = entry.target.querySelectorAll('.experience-card');
                cards.forEach(card => {
                    card.classList.remove('animate');
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-50px 0px'
    });
    
    // Observe the experience section
    const experienceSection = document.querySelector('.experience');
    if (experienceSection) {
        experienceObserver.observe(experienceSection);
    }
    
    // Projects section animation
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card) => {
                    // Add animation class to each card to trigger line-by-line animation
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, 200);
                });
            } else {
                // Reset animations when section goes out of view
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach(card => {
                    card.classList.remove('animate');
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-50px 0px'
    });
    
    // Observe the projects section
    const projectsSection = document.querySelector('.projects');
    if (projectsSection) {
        projectsObserver.observe(projectsSection);
    }
    
    // Tech stack category animations
    const stackObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set small timeout to ensure section animation completes first
                setTimeout(() => {
                    entry.target.classList.add('animate');
                    
                    // Select all stack items in this category and ensure animations reset properly
                    const items = entry.target.querySelectorAll('.stack-item');
                    items.forEach(item => {
                        item.style.animation = 'none';
                        void item.offsetWidth; // Force reflow
                        item.style.animation = '';
                    });
                }, 200);
                
                // Don't unobserve for tech stack - allow reanimation when revisiting
                // stackObserver.unobserve(entry.target);
            } else {
                // Remove animation class when out of view for reanimation
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-100px 0px'
    });
    
    // Observe all tech stack categories
    document.querySelectorAll('.stack-category').forEach(category => {
        stackObserver.observe(category);
    });
    
    // Typing Animation
    const typingElement = document.querySelector('.typing-text');
    const roles = ['Data Engineer', 'Machine Learning Engineer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100; // Delay between each character typing
    
    function typeText() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Removing text
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50; // Faster when deleting
        } else {
            // Adding text
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 120; // Slower when typing
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at the end of typing
            isDeleting = true;
            typingDelay = 1500; // Wait before starting to delete
        } 
        // If deletion is complete
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // Move to next word
            typingDelay = 500; // Pause before typing next word
        }
        
        setTimeout(typeText, typingDelay);
    }
    
    // Start the typing animation
    setTimeout(typeText, 1000);
    
    // Parallax effect for hero image
    window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.hero-image');
        const scrollPosition = window.scrollY;
        
        if (heroImage && scrollPosition < window.innerHeight) {
            // Add parallax-scroll class if not already added
            if (!heroImage.classList.contains('parallax-scroll')) {
                heroImage.classList.add('parallax-scroll');
            }
            
            // Apply parallax effect
            heroImage.style.transform = `translateY(${scrollPosition * 0.15}px)`;
        }
    });
    
    // Mouse move effect for hero image
    const heroSection = document.querySelector('.hero');
    const profileImg = document.querySelector('.profile-img');
    
    if (heroSection && profileImg) {
        heroSection.addEventListener('mousemove', (e) => {
            if (!heroSection.classList.contains('animate-in')) return; // Only apply if section is animated in
            
            const { left, top, width, height } = heroSection.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            // Use a transition to avoid conflicts with animation
            profileImg.style.transition = 'transform 0.2s ease-out';
            profileImg.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        heroSection.addEventListener('mouseleave', () => {
            if (!heroSection.classList.contains('animate-in')) return;
            
            profileImg.style.transition = 'transform 0.5s ease';
            profileImg.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
        });
    }
    
    // Hover effect for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) scale(1.1)';
            icon.style.color = getComputedStyle(document.documentElement).getPropertyValue('--gradient-1');
            icon.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
            icon.style.color = '';
        });
    });
    
    // Trigger initial home section animation
    document.getElementById('home').classList.add('animate-in');
}); 