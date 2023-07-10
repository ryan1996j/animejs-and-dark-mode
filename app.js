const body = document.querySelector("body");
const toogleSwitch = document.querySelector(".toogle-switch");
const switchbutton = document.querySelector(".switch");
const navBar = document.querySelector(".nav-bar")
console.log(toogleSwitch);
toogleSwitch.addEventListener("click", () => {
    body.classList.toggle("active");
    navBar.classList.toggle("active");
    toogleSwitch.classList.toggle("active")
})
