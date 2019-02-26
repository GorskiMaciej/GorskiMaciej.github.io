const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", turnOnMenu);

function turnOnMenu() {
    console.log("click");
    document.querySelector(".burger-menu .fas").classList.toggle('fa-bars');
    document.querySelector(".burger-menu .fas").classList.toggle('fa-angle-double-up');
    document.querySelector("nav ul").classList.toggle('clicked');
}