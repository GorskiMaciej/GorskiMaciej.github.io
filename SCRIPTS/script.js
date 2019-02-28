const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", turnOnMenu);

const navStart = document.querySelector("nav ul li .a-start");
const navAboutMe = document.querySelector("nav ul li .a-about-me");
const navWorkflow = document.querySelector("nav ul li .a-workflow");
const navProjects = document.querySelector("nav ul li .a-projects");
const navContact = document.querySelector("nav ul li .a-contact");

const navTab = [navStart, navAboutMe, navWorkflow, navProjects, navContact];

// function navToggleBackground() {

//     navTab.forEach(function (Element) {
//         if (Element.classList.contains("activeSection")) {
//         Element.classList.remove("activeSection");
//         }
//     });
//     this.classList.add("activeSection");
// };

// navTab.forEach(function (navTabElement) {
//     navTabElement.addEventListener("click", navBtnBackground);
// });
// navStart.addEventListener("click", navToggleBackground());
navStart.addEventListener("click", function () {
    navTab.forEach(function (Element) {
        Element.classList.remove("activeSection");
    });
    navStart.classList.add("activeSection");
});
navAboutMe.addEventListener("click", function () {
    navTab.forEach(function (Element) {
        Element.classList.remove("activeSection");
    });
    navAboutMe.classList.add("activeSection");
});
navWorkflow.addEventListener("click", function () {
    navTab.forEach(function (Element) {
        Element.classList.remove("activeSection");
    });
    navWorkflow.classList.add("activeSection");
});
navProjects.addEventListener("click", function () {
    navTab.forEach(function (Element) {
        Element.classList.remove("activeSection");
    });
    navProjects.classList.add("activeSection");
});
navContact.addEventListener("click", function () {
    navTab.forEach(function (Element) {
        Element.classList.remove("activeSection");
    });
    navContact.classList.add("activeSection");
});



function turnOnMenu() {
    document.querySelector(".burger-menu .fas").classList.toggle('fa-bars');
    document.querySelector(".burger-menu .fas").classList.toggle('fa-angle-double-up');
    document.querySelector("nav ul").classList.toggle('clicked');
}