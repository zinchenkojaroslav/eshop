const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbarcenter");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})