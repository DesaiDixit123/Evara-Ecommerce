function search() {
    let search = document.querySelector(".search-box")
    console.log(search.getAttribute("class"));
    if (search.getAttribute("class") === "search-box notActive") {
        search.setAttribute("class", "search-box active")
    } else {
        search.setAttribute("class", "search-box notActive")
    }
}

function dropdown(element) {
    const dropdownId = element.parentElement.id;
    console.log(dropdownId);
    const dropdown = document.getElementById(dropdownId);
    console.log(dropdown);
    const isActive = dropdown.classList.contains("active")
    console.log(isActive);

    const allDropDowns = document.getElementsByClassName("dropDown1")
    console.log(allDropDowns);

    for (let i = 0; i < allDropDowns.length; i++) {
        allDropDowns[i].classList.remove("active")
    }
    if (!isActive) {
        dropdown.classList.add("active")
    }

}

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
showSlides();



let endDate = "21 March 2024 ";
let call = document.querySelector(".call");
let inputs = call.querySelectorAll("input");

function updateTimer() {
    let end = new Date(endDate);
    let now = new Date();
    let diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24); // Days
    inputs[1].value = Math.floor(diff / 3600) % 24; // Hours
    inputs[2].value = Math.floor(diff / 60) % 60; // Minutes
    inputs[3].value = Math.floor(diff) % 60; // Seconds
}


updateTimer();


setInterval(updateTimer, 1000);





let enddate2 = "25 March 2024"
let call1 = document.querySelector(".call1")
let inputs2 = call1.querySelectorAll("input");
// console.log(inputs2);


function updateTime2() {
    let end = new Date(enddate2)
    let now = new Date();


    let diff = (end - now) / 1000;
    // console.log(diff);

    inputs2[0].value = Math.floor(diff / 3600 / 24);
    inputs2[1].value = Math.floor(diff / 3600) % 24;
    inputs2[2].value = Math.floor(diff / 60) % 60;
    inputs2[3].value = Math.floor(diff) % 60;

}


updateTime2();
setInterval(updateTime2, 1000);

let products5 = document.querySelectorAll(".product")
    // console.log(products5);


function renderCarts() {
    const rendercart = document.querySelector(".rendercart")
    if (rendercart.getAttribute("class") === "rendercart") {
        rendercart.setAttribute("class", "rendercart rendercartActive")
    } else {
        rendercart.setAttribute("class", "rendercart")
    }
}



function menuBar() {
    let menubar = document.querySelector(".categories");
    if (menubar.getAttribute("class") === "categories") {
        menubar.setAttribute("class", "categories categoriesActive")
    } else {
        menubar.setAttribute("class", "categories")
    }
}

function removenav() {
    let removenav = document.querySelector(".categories")
    if (removenav.getAttribute("class") == "categories categoriesActive") {
        removenav.classList.remove("categoriesActive")
    }
}