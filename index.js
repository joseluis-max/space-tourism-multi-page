let main = document.getElementsByTagName("main");
main = main[0];
nav_link  = new Array(...document.getElementsByClassName("header-nav_link"));
if(main.className == "main"){
    nav_link[0].classList.add("header-nav_link_active")
}
if (main.className == "destination") {
    nav_link[1].classList.add("header-nav_link_active")
}
if (main.className == "crew") {
    nav_link[2].classList.add("header-nav_link_active")
}
if (main.className == "technology") {
    nav_link[3].classList.add("header-nav_link_active")
}