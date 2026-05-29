const mobileMenu = document.querySelector(".mobile-menu");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const mobileNavigation = document.querySelector(".mobile-menu-list");

const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    document.body.style.overflow = isOpen ? "hidden" : "";
}

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);

mobileNavigation.addEventListener("click", (e) => {
    if (e.target.closest('.mobile-menu-link')) {
        toggleMenu();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains('is-open')) {
        toggleMenu();
    }
})

