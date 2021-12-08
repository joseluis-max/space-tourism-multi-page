let title = document.getElementsByClassName("crew-content_subtitle");
title = title[0].innerHTML;
let links = document.getElementsByClassName("crew-content-circles_circle");

if(title == "Commander"){
    links[0].classList.add("crew-content-circles_circle_active");
}
if (title == "Flight Engineer") {
    links[1].classList.add("crew-content-circles_circle_active");
}
if (title == "Pilot") {
    links[2].classList.add("crew-content-circles_circle_active");
}
if (title == "Mission Specialist") {
    links[3].classList.add("crew-content-circles_circle_active");
}