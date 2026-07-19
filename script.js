/* ==========================================
   THEME TOGGLE
========================================== */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });
}

/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.style.display = "none";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    });
}

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".section-title,.skill-card,.project-card,.achievement-card,.timeline-item,.contact-container,.about-container"
);

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ==========================================
   HERO COUNTERS
========================================== */

const counters = document.querySelectorAll(".hero-stats h3");

counters.forEach(counter => {

    const original = counter.innerText;
    const target = parseInt(original);

    if (isNaN(target)) return;

    let count = 0;

    function updateCounter() {

        if (count < target) {

            count++;

            counter.innerText = count + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = original;

        }

    }

    updateCounter();

});

/* ==========================================
   PROJECT IMAGE HOVER
========================================== */

document.querySelectorAll(".project-card img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/* ==========================================
   TYPING EFFECT
========================================== */

const heroHeading = document.querySelector(".hero h2");

if (heroHeading) {

    const text = heroHeading.textContent;

    heroHeading.textContent = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            heroHeading.textContent += text.charAt(i);

            i++;

            setTimeout(typing, 70);

        }

    }

    window.addEventListener("load", () => {

        setTimeout(typing, 500);

    });

}

/* ==========================================
   RIPPLE BUTTON EFFECT
========================================== */

document.querySelectorAll(".primary-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = (e.offsetX - diameter / 2) + "px";

        circle.style.top = (e.offsetY - diameter / 2) + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    console.log("Portfolio Loaded Successfully 🚀");
});