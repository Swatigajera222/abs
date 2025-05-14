document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function updateCustomCountdown() {
        const eventDate = new Date("March 22, 2025 23:00:00 GMT-0800").getTime();
        const now = new Date().getTime();
        const timeDiff = eventDate - now;

        const countdownContainer = document.querySelector(".custom-countdown-container");
        const newSection = document.querySelector(".after-countdown-section");

        if (timeDiff <= 0) {
            // Hide countdown section
            if (countdownContainer) {
                countdownContainer.style.display = "none";
            }

            // Show new section
            if (newSection) {
                newSection.style.display = "flex";
            }
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("custom-days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("custom-hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("custom-minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("custom-seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    if (document.getElementById("custom-days")) {
        setInterval(updateCustomCountdown, 1000);
        updateCustomCountdown();
    }

    // Membership Button Click Event
    const membershipBtn = document.querySelector('.membership-btn');
    if (membershipBtn) {
        membershipBtn.addEventListener('click', function () {
            alert('You clicked Join Now!');
        });
    }

    // Image Slider
    const slides = document.querySelectorAll(".custom-slide-item");
    const prevBtn = document.querySelector(".custom-slider-prev");
    const nextBtn = document.querySelector(".custom-slider-next");
    const dots = document.querySelectorAll(".custom-dot");
    let currentIndex = 0;
    let autoSlide;

    function showSlide(index) {
        if (slides.length === 0) return;

        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            showSlide(i);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    const sliderWrapper = document.querySelector(".custom-slider-wrapper");
    if (sliderWrapper) {
        sliderWrapper.addEventListener("mouseenter", stopAutoSlide);
        sliderWrapper.addEventListener("mouseleave", startAutoSlide);
    }

    if (slides.length > 0) {
        showSlide(currentIndex);
        startAutoSlide();
    }
});
