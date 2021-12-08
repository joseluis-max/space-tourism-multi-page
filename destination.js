let title = document.getElementsByClassName("destination-content-info_title");
title = title[0].innerHTML;
let nav_link = new Array(...document.getElementsByClassName("destination-content-info_navlink"))
if (title == "Moon"){
    nav_link[0].classList.add("destination-content-info_navlink_active")
}
if (title == "Mars") {
    nav_link[1].classList.add("destination-content-info_navlink_active")
}
if (title == "Europa") {
    nav_link[2].classList.add("destination-content-info_navlink_active")
}
if (title == "Titan") {
    nav_link[3].classList.add("destination-content-info_navlink_active")
}
