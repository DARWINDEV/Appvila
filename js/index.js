const navToggle = document.querySelector(".navegacion__boton");
const navMenu = document.querySelector(".navegacion__menu");
const navLink = document.querySelectorAll(".navegacion__link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navegacion__menu--visible");
    
    if (navMenu.classList.contains("navegacion__menu--visible")){
        navToggle.setAttribute("aria-label", "Close menu");
    } else {
        navToggle.setAttribute("aria-label", "Open menu");
    }

});


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    navToggle.classList.remove("navegacion__menu--visible");
    navMenu.classList.remove("navegacion__menu--visible")
}
