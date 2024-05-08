const navBar = document.getElementById("navUl");
const navUlLinks = document.querySelectorAll("navUlLinks")
const botaoHamburguer = document.getElementById("hamburguer");
navBar.style.display = "none";
botaoHamburguer.addEventListener("click", function() {
    if (navBar.style.display === "flex") {
        botaoHamburguer.classList.toggle('active')
    } else if (navBar.style.display === "none") {
        navBar.style.display = "flex";
        botaoHamburguer.classList.toggle('active')
    }
});
botaoHamburguer.addEventListener("click", function() {
    if (navBar.classList.contains("slide-in")) {
        navBar.classList.remove("slide-in");
        navBar.classList.add("slide-out");
        navUlLinks.classList.remove("slide-in-delayed");
        navUlLinks.classList.add("slide-out");
    } else {
        navBar.classList.remove("slide-out");
        navBar.classList.add("slide-in");
        navUlLinks.classList.remove("slide-out");
        navUlLinks.classList.add("slide-in-delayed")
    }
});