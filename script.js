// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    /* ========================================
       1. MOBILE MENU CODE
       ======================================== */
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const navRight = document.getElementById('navRight');

    if (menuToggle && menuClose && navRight) {
        menuToggle.addEventListener('click', () => {
            navRight.classList.add('is-open');
        });

        menuClose.addEventListener('click', () => {
            navRight.classList.remove('is-open');
        });
    } else {
        // This log is helpful for debugging if you ever change the HTML ids
        console.warn("Could not find one or more menu elements (menuToggle, menuClose, navRight).");
    }


    /* ========================================
       2. SCROLL REVEAL ANIMATION
       ======================================== */
    
    // Select all elements with the class "reveal"
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        // Set up the Intersection Observer
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If the element is on screen (intersecting)
                if (entry.isIntersecting) {
                    // Add the 'active' class to make it visible
                    entry.target.classList.add('active');
                }
                /* // Optional: Uncomment this 'else' block if you want 
                // the animation to repeat every time you scroll past
                else {
                    entry.target.classList.remove('active');
                }
                */
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Tell the observer to watch each of the .reveal elements
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }


    /* ========================================
       3. GALLERY STAGGERED ANIMATION
       ======================================== */
    
    // This code finds all gallery items and gives them a custom CSS variable (--i)
    // Your style.css uses this variable to create a staggered (delayed) fade-in effect.
    
    const galleryItems = document.querySelectorAll('.gallery-item.reveal');
    
    if (galleryItems.length > 0) {
        galleryItems.forEach((item, index) => {
            // Sets --i to 1, 2, 3, 4... for each item
            item.style.setProperty('--i', index + 1); 
        });
    }

});