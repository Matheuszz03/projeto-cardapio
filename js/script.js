let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}

// Scroll suave 
// const menuItens = document.querySelectorAll(".bx-menu a");

// menuItens.forEach(item => {
//     item.addEventListener('click', scrollToIdOnClick);
// })

// function scrollToIdOnClick(event) {
//     event.preventDefault();
//     const element = event.target;
//     const id = element.getAttribute('href');
//     const to = document.querySelector(id).offsetTop;

//     window.scroll({
//         top: to;
//         behavior: "smooth",
//     });
// }