// Portfolio JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Certificates Data & Rendering
    const certificates = [
        {
            img: 'DBMS.png',
            title: ' DBMS Course - Master the Fundamentals and Advanced Concepts.',
            issuer: 'Scaler',
            year: '2025',
            url: 'https://moonshot.scaler.com/s/sl/YXE65d53Xk?_gl=1*hahvjf*_gcl_au*MTY5Mjk3MDA4LjE3NTQxOTYyMjU.*FPAU*MzcwNTIxNDcyLjE3NTQxOTYyMjU.*_ga*MTA1OTc2ODYxNC4xNzU0MTk2MjI1*_ga_53S71ZZG1X*czE3NTczMzEwNDYkbzQkZzEkdDE3NTczMzExNjAkajIxJGwwJGgxMzkzMTk4ODA0'
        },
        {
            img: '299ce8d4-89c4-47d4-a625-1ded67e81aeb_page-0001.jpg',
            title: 'AWS Cloud Practitioner Essential',
            issuer: 'Amazon Web Services',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-cloudcomputing-awscloud-activity-7355235914354208768-Y0M3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        },
        {
            img: 'OOPs.png',
            title: 'Object Oriented Programming in Java Course Online',
            issuer: 'Scaler',
            year: '2025',
            url:'https://moonshot.scaler.com/s/sl/kND7zrJK0A?_gl=1*sn4yqq*_gcl_au*MTY5Mjk3MDA4LjE3NTQxOTYyMjU.*FPAU*MzcwNTIxNDcyLjE3NTQxOTYyMjU.*_ga*MTA1OTc2ODYxNC4xNzU0MTk2MjI1*_ga_53S71ZZG1X*czE3NTczMzEwNDYkbzQkZzEkdDE3NTczMzExNjAkajIxJGwwJGgxMzkzMTk4ODA0'
        },
        {
            img: 'UC-fd52b5c2-9ea3-47c9-891f-c58336939fea_page-0001.jpg',
            title: 'Mastering AWS Serverless: Hands-On with Core AWS Services',
            issuer: 'Udemy',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-cloudcomputing-serverless-activity-7357641823911075840-6rLR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        },
        {
            img: 'Webdesign.png',
            title: 'Responsive Web Design',
            issuer: 'FreeCodeCamp',
            year: '2025',
            url:'https://www.freecodecamp.org/certification/fcc078d8d10-1143-4d67-896f-f07d4533a556/responsive-web-design'
        },
        {
            img: 'sql basic.jpg',
            title: 'SQL Basic',
            issuer: 'HakerRank',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_sql-database-hackerrank-activity-7371574252183101440-bVsd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        },
        {
            img: 'sql intermediate.jpg',
            title: 'SQL Intermediate',
            issuer: 'HakerRank',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_sql-certification-learning-activity-7372113014910566400-M0l5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        },
        {
            img: 'sql advanced.jpg',
            title: 'SQL Advanced',
            issuer: 'HakerRank',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_sql-hackerrank-certification-activity-7373031664828080129-03A0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        },
        {
            img: 'AWS Academy Graduate - Generation AI Foundations.png',
            title: 'AWS Academy Graduate - Generation AI Foundations',
            issuer: 'AWS Academy',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-generativeai-cloudcomputing-activity-7374477362006183936-zYVS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        },
        {
            img: 'AWS Cloud Quest Cloud Practitioner.jpg',
            title: 'AWS Cloud Quest: Cloud Practitioner',
            issuer: 'AWS Training and Certification',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-cloudquest-cloudpractitioner-activity-7376821747083493376-inXq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        },
        {
            img: 'AWS Certified Cloud Practitioner certificate_page-0001.jpg',
            title: 'AWS Certified Cloud Practioner',
            issuer: 'AWS',
            year: '2025',
            url:'https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-generativeai-cloudcomputing-activity-7374477362006183936-zYVS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE'
        }
    ];

    // Render certificates
    const grid = document.querySelector('.certificates-grid');
    if (grid) {
        grid.innerHTML = '';
        certificates.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'certificate-card';
            card.innerHTML = `
                <img src="${cert.img}" alt="${cert.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDIyMCAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMjAiIGhlaWdodD0iMTQwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjExMCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2VydGlmaWNhdGU8L3RleHQ+Cjx0ZXh0IHg9IjExMCIgeT0iOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K'">
                <h3>${cert.title}</h3>
                <p>Issued by ${cert.issuer} - ${cert.year}</p>
            `;
            if (cert.url) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    window.open(cert.url, '_blank');
                });
            }
            grid.appendChild(card);
        });
    }

    // Add click functionality to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        
        
        if (index === 1) { // Second project (Serverless Web Application)
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.open('https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-serverless-python-activity-7363006422348914688-Rxa4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE', '_blank');
            });
        }
        // Add click functionality to the third project (Cloud-Powered Tic Tac Toe Game)
        if (index === 2) { // Third project (0-indexed)
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.open('https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-serverless-lambda-activity-7370988955728609281-mH87?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE', '_blank');
            });
        }
        if (index === 3) { // Fourth project (0-indexed)
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.open('https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-cloudcomputing-ecommerce-activity-7373370538183847936-Zgll?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE', '_blank');
            });
        }
        if (index === 4) { // Fifth project (AI Chat Bot)
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.open('https://www.linkedin.com/posts/mohammed-arshad-2051182a4_aws-cloudcomputing-serverless-activity-7380129526976221184-ZD9T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElYFCUBrtfqbMRBRvGUdIyXprDqYrnBcXE', '_blank');
            });
        }
    });

    // Smooth scrolling for navigation
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Character-by-character typing animation
    console.log('Starting typing animation...');
    
    const roles = ['Software Developer', 'Frontend Developer', 'Cloud Enthusiast', 'Java Developer', 'Backend Developer'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const typingElement = document.getElementById('typing-text');
        console.log('Typing element:', typingElement);
        
        if (!typingElement) {
            console.log('Element not found, retrying...');
            setTimeout(typeWriter, 100);
            return;
        }
        
        const currentRole = roles[currentRoleIndex];
        console.log('Current role:', currentRole, 'Char index:', currentCharIndex, 'Is deleting:', isDeleting);
        
        if (isDeleting) {
            // Delete characters one by one
            typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            // Type characters one by one
            typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let speed = 150; // Typing speed: 150ms per character
        if (isDeleting) {
            speed = 75; // Deletion speed: 75ms per character
        }
        
        if (!isDeleting && currentCharIndex === currentRole.length) {
            // Finished typing, pause for 1 second then start deleting
            speed = 1000; // 1 second pause
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            // Finished deleting, add fade-out, switch role, then fade-in and continue
            typingElement.classList.add('fade-out');
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            speed = 500; // 0.5 second pause before next role
            setTimeout(() => {
                typingElement.classList.remove('fade-out');
                typingElement.classList.add('fade-in');
                setTimeout(() => typingElement.classList.remove('fade-in'), 320);
            }, 100);
        }
        
        setTimeout(typeWriter, speed);
    }
    
    // Start typing animation after a short delay
    setTimeout(() => {
        console.log('Starting typeWriter...');
        typeWriter();
    }, 500);

    // Update active navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const subjectInput = this.querySelector('input[name="subject"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            const honeypotInput = this.querySelector('input[name="_gotcha"]');
            const tsInput = this.querySelector('input[name="submission_timestamp"]');
            const urlInput = this.querySelector('input[name="page_url"]');
            const uaInput = this.querySelector('input[name="user_agent"]');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            // Fill metadata before submission
            if (tsInput) tsInput.value = new Date().toISOString();
            if (urlInput) urlInput.value = window.location.href;
            if (uaInput) uaInput.value = navigator.userAgent;

            // Honeypot: if filled, silently drop
            if (honeypotInput && honeypotInput.value) {
                return; // bot likely
            }

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                const formData = new FormData(this);
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    const banner = document.getElementById('form-banner');
                    if (banner) {
                        banner.style.display = 'block';
                        banner.textContent = 'Thank you! Your message has been sent.';
                    }
                    setTimeout(() => {
                        window.location.href = 'thank-you.html';
                    }, 900);
                } else {
                    const data = await response.json().catch(() => null);
                    const msg = data && data.errors && data.errors.length
                        ? data.errors.map(e => e.message).join(', ')
                        : 'There was a problem submitting your form.';
                    const banner = document.getElementById('form-banner');
                    if (banner) {
                        banner.style.display = 'block';
                        banner.style.background = '#ffefef';
                        banner.style.color = '#b42318';
                        banner.style.border = '1px solid #ffd1d1';
                        banner.textContent = msg;
                    } else {
                        alert(msg);
                    }
                }
            } catch (err) {
                const banner = document.getElementById('form-banner');
                if (banner) {
                    banner.style.display = 'block';
                    banner.style.background = '#ffefef';
                    banner.style.color = '#b42318';
                    banner.style.border = '1px solid #ffd1d1';
                    banner.textContent = 'Network error. Please try again later.';
                } else {
                    alert('Network error. Please try again later.');
                }
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .about-stats .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Enhanced skill section interactions
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        // Add click effect
        item.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.background = '#058e8f';
            this.style.color = '#fff';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }, 150);
        });

        // Add random delay to floating animation
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Add ripple effect on click
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add hover effects to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            const skillItems = this.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateY(-2px) scale(1.02)';
                }, index * 50);
            });
        });
        
        category.addEventListener('mouseleave', function() {
            const skillItems = this.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                item.style.transform = '';
            });
        });
    });

    // Mobile menu toggle (if needed for smaller screens)
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.className = 'mobile-menu-toggle';
                menuToggle.innerHTML = '☰';
                menuToggle.style.cssText = `
                    display: block;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #333;
                `;
                
                header.appendChild(menuToggle);
                
                menuToggle.addEventListener('click', () => {
                    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
                });
            }
        } else {
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (menuToggle) {
                menuToggle.remove();
            }
            nav.style.display = 'block';
        }
    };

    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Resume button functionality
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a modal for resume options
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            `;
            
            modal.innerHTML = `
                <div style="
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    text-align: center;
                    max-width: 400px;
                    width: 90%;
                ">
                    <h3 style="color: #333; margin-bottom: 20px;">Resume Options</h3>
                    <p style="color: #666; margin-bottom: 25px;">Choose how you'd like to view my resume:</p>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <button id="download-resume" style="
                            padding: 12px 24px;
                            background: #058e8f;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 16px;
                        ">Download PDF</button>
                        <button id="view-online" style="
                            padding: 12px 24px;
                            background: #87CEFA;
                            color: #333;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 16px;
                        ">View Online</button>
                        <button id="contact-for-resume" style="
                            padding: 12px 24px;
                            background: #f8f9fa;
                            color: #333;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 16px;
                        ">Contact Me</button>
                        <button id="close-modal" style="
                            padding: 8px 16px;
                            background: #dc3545;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 14px;
                        ">Close</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Add event listeners
            modal.querySelector('#download-resume').addEventListener('click', () => {
                // Direct download of the PDF resume
                const link = document.createElement('a');
                link.href = 'Mohammed Arshad I.pdf';
                link.download = 'Mohammed Arshad I - Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                modal.remove();
            });
            
            modal.querySelector('#view-online').addEventListener('click', () => {
                // Open PDF in new tab for viewing
                window.open('Mohammed Arshad I.pdf', '_blank');
                modal.remove();
            });
            
            modal.querySelector('#contact-for-resume').addEventListener('click', () => {
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                modal.remove();
            });
            
            modal.querySelector('#close-modal').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    }
});

// Add some interactive hover effects

document.addEventListener('DOMContentLoaded', function() {
    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

// Add dark mode CSS and skill tooltip CSS
const style = document.createElement('style');
style.textContent = `
    body.dark-mode {
        background: #222 !important;
        color: #eee !important;
    }
    body.dark-mode header,
    body.dark-mode .container,
    body.dark-mode .certificate-card,
    body.dark-mode .project-card {
        background: #2c2c2c !important;
        color: #eee !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.18);
    }
    body.dark-mode .section-title {
        color: #eee !important;
    }
    body.dark-mode .skill-item {
        background: #058e8f !important;
        color: #fff !important;
    }
    .skill-tooltip {
        position: absolute;
        background: #058e8f;
        color: #fff;
        padding: 6px 14px;
        border-radius: 8px;
        font-size: 0.95rem;
        box-shadow: 0 2px 8px rgba(8,142,143,0.15);
        pointer-events: none;
        z-index: 4000;
        white-space: nowrap;
        transition: opacity 0.2s;
    }
`;
document.head.appendChild(style);

    // Button ripple effect
    const buttons = document.querySelectorAll('.btn, .btn-small');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
