const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal animations

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const toggleBtn = document.getElementById('toggle-btn');
let isDarkMode = false;

toggleBtn.addEventListener('click', function() {
    isDarkMode = !isDarkMode; // Toggle dark mode state

    if (isDarkMode) {
        // Apply dark mode styles
        document.body.classList.add('dark-mode');
        toggleBtn.classList.add('on');
        applyDarkModeToContactPage(); // Apply dark mode to contact page if needed
    } else {
        // Revert to default styles
        document.body.classList.remove('dark-mode');
        toggleBtn.classList.remove('on');
        removeDarkModeFromContactPage(); // Remove dark mode from contact page if needed
    }
});

function applyDarkModeToContactPage() {
    const contactPage = document.querySelector('.contact-page');
    if (contactPage) {
        contactPage.classList.add('dark-mode');
    }
}

function removeDarkModeFromContactPage() {
    const contactPage = document.querySelector('.contact-page');
    if (contactPage) {
        contactPage.classList.remove('dark-mode');
    }
}
function toggleDarkMode() {
  const toggleBtn = document.querySelector('.toggle-btn');
  const toggleIcon = document.querySelector('#toggle-icon');

  toggleBtn.classList.toggle('on');
  toggleIcon.classList.toggle('moon');
  toggleIcon.classList.toggle('sun');
}
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}
