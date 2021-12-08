let title = document.getElementsByClassName("technology-content_title");
title = title[0].innerHTML;
let links = document.getElementsByClassName("technology-content_number");

if (title == "Launch vehicle") {
    links[0].classList.add("technology-content_number_active");
}
if (title == "Spaceport") {
    links[1].classList.add("technology-content_number_active");
}
if (title == "Space capsule") {
    links[2].classList.add("technology-content_number_active");
}