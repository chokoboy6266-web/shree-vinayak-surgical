// Simple interactive elements

document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect on hero image
    const heroSection = document.querySelector('.hero-section');
    const heroImg = document.querySelector('.hero-img');
    const backgroundShape = document.querySelector('.background-shape');
    
    if (heroSection && heroImg) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if (scrollPos < window.innerHeight) {
                heroImg.style.transform = `translateY(${scrollPos * 0.1}px) scale(1.05)`;
                backgroundShape.style.transform = `translateY(${scrollPos * 0.2}px)`;
            }
        });
    }

    // Testimonial selection
    const nameItems = document.querySelectorAll('.name-item');
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    
    const testimonials = [
        {
            text: `"Shree Vinayak Surgical has consistently provided top-tier equipment that I rely on for my most complex procedures. Their quality is unmatched."`,
            author: "- Dr. Olivia Mitchell, Head of Surgery"
        },
        {
            text: `"The precision of their instruments is incredible. It gives me and my team the confidence we need in the operating room."`,
            author: "- Dr. Benjamin Hayes, Cardiovascular Surgeon"
        },
        {
            text: `"I highly recommend Shree Vinayak Surgical. Their customer service is as excellent as the medical equipment they provide."`,
            author: "- Dr. Sophia Davis, Orthopedic Specialist"
        },
        {
            text: `"When it comes to advanced surgical tools, I don't compromise. Shree Vinayak always delivers the best in the industry."`,
            author: "- Dr. Mitchell Thompson, Neurosurgeon"
        },
        {
            text: `"An essential partner for our hospital. Their modern equipment has completely elevated our surgical practices."`,
            author: "- Dr. Chief Surgeon, General Hospital"
        }
    ];

    nameItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Remove active from all
            nameItems.forEach(ni => {
                ni.classList.remove('active');
                ni.classList.remove('bold-name');
            });
            
            // Add active to clicked
            item.classList.add('active');
            item.classList.add('bold-name');
            
            // Update quote with simple fade effect
            const quoteBox = document.querySelector('.quote-box');
            quoteBox.style.opacity = 0;
            
            setTimeout(() => {
                quoteText.textContent = testimonials[index].text;
                quoteAuthor.textContent = testimonials[index].author;
                quoteBox.style.opacity = 1;
            }, 300);
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
