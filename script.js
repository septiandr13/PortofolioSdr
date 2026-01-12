document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Scroll Animation ---
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Penanganan khusus untuk animasi skill tags agar muncul satu per satu
                if (entry.target.id === 'skills') {
                    const tags = entry.target.querySelectorAll('.skill-tag');
                    tags.forEach((tag, index) => {
                        tag.style.transitionDelay = `${index * 50}ms`; // Stagger delay
                    });
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    // --- Generic Gallery/Slider Logic ---
    function initializeGallery(galleryElement) {
        const galleryInner = galleryElement.querySelector('.gallery-inner');
        const galleryImages = galleryElement.querySelectorAll('.gallery-inner img');
        const prevBtn = galleryElement.querySelector('.gallery-prev');
        const nextBtn = galleryElement.querySelector('.gallery-next');
        const dotsContainer = galleryElement.querySelector('.gallery-dots');

        if (!galleryInner || galleryImages.length === 0) return;

        let currentIndex = 0;
        const totalImages = galleryImages.length;
        let autoSlideInterval;

        // Create dots if a container exists
        if (dotsContainer) {
            dotsContainer.innerHTML = ''; // Clear existing dots
            for (let i = 0; i < totalImages; i++) {
                const dot = document.createElement('div');
                dot.classList.add('gallery-dot');
                dot.addEventListener('click', () => {
                    goToSlide(i);
                    resetAutoSlide(); // Reset timer when user interacts
                });
                dotsContainer.appendChild(dot);
            }
        }
        const galleryDots = dotsContainer ? dotsContainer.querySelectorAll('.gallery-dot') : [];

        function updateGallery() {
            galleryInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            if (galleryDots.length > 0) {
                galleryDots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
        }

        function goToSlide(index) {
            currentIndex = index;
            updateGallery();
        }

        const startAutoSlide = () => {
            autoSlideInterval = setInterval(() => {
                currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
                updateGallery();
            }, 5000); // Change image every 5 seconds
        };

        const stopAutoSlide = () => clearInterval(autoSlideInterval);
        const resetAutoSlide = () => {
            stopAutoSlide();
            startAutoSlide();
        };

        if (prevBtn) prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
            updateGallery();
            resetAutoSlide();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
            updateGallery();
            resetAutoSlide();
        });

        galleryElement.addEventListener('mouseenter', stopAutoSlide);
        galleryElement.addEventListener('mouseleave', startAutoSlide);

        updateGallery(); // Initial call
        startAutoSlide(); // Start on load
    }

    // Initialize all galleries on the page
    document.querySelectorAll('.project-gallery').forEach(initializeGallery);
});