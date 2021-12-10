let main = document.getElementsByTagName("main");
main = main[0];
nav_link  = new Array(...document.getElementsByClassName("header-nav_link"));
if(main.className == "main"){
    nav_link[0].classList.add("header-nav_link_active");
}
if (main.className == "destination") {
    nav_link[1].classList.add("header-nav_link_active");
}
if (main.className == "crew") {
    nav_link[2].classList.add("header-nav_link_active");
}
if (main.className == "technology") {
    nav_link[3].classList.add("header-nav_link_active")
}
let button_burguer = document.getElementsByClassName("header-burguer");
button_burguer = button_burguer[0];
button_burguer.addEventListener("click", () => {
    let nav = document.querySelector(".header-nav");
    if (button_burguer.className == "header-burguer"){
        button_burguer.className = "header-close";
        nav.style.display = "block";
    }
    else {
        button_burguer.className = "header-burguer";
        nav.style.display = "none";
    }
    console.log(nav);
}) 