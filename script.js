// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
}

// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Feature card animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Team member animations
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Achievement card animations
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Nav link active state
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // // Contact form submission
// Compact Contact Form Submission
const contactFormCompact = document.getElementById('contactFormCompact');
if (contactFormCompact) {
    contactFormCompact.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const data = {
            firstName: document.getElementById('firstNameCompact').value,
            lastName: document.getElementById('lastNameCompact').value,
            email: document.getElementById('emailCompact').value,
            subject: document.getElementById('subjectCompact').value,
            message: document.getElementById('messageCompact').value
        };
        
        // Show success message
        const submitBtn = this.querySelector('.submit-btn-compact');
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        
        submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            alert('Message sent securely! We will respond within 24 hours.');
            contactFormCompact.reset();
            submitBtn.querySelector('.btn-text').textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});