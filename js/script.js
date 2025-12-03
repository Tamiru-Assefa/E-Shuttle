// slider.js

/* ---------- HERO SLIDER ---------- */
let heroSlides = document.querySelectorAll("#hero-slider .slide");
let currentHero = 0;

function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextHeroSlide() {
    currentHero = (currentHero + 1) % heroSlides.length;
    showHeroSlide(currentHero);
}

// Initial hero slide
showHeroSlide(currentHero);
setInterval(nextHeroSlide, 5000);


/* ---------- TESTIMONIAL SLIDER ---------- */
let tSlides = document.querySelectorAll(".t-slide");
let tDots = document.querySelectorAll(".dot");
let currentT = 0;

function showTSlide(index) {
    tSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        tDots[i].classList.toggle("active", i === index);
    });
}

function nextTSlide() {
    currentT = (currentT + 1) % tSlides.length;
    showTSlide(currentT);
}

// Initial testimonial slide
showTSlide(currentT);
setInterval(nextTSlide, 2000);

// Click dots to navigate
tDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        currentT = i;
        showTSlide(currentT);
    });
});
