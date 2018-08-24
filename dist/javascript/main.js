// Select menu elements to transform

let navMain = document.querySelector(".nav");
let navButton = document.querySelector(".nav-button");
let navBranding = document.querySelector(".nav-branding");
let navMenu = document.querySelector(".nav-menu");
let navItem = document.querySelectorAll(".nav-item");
let main = document.querySelector("#main");

// set initial menu state
let showMenu = false;

//attach listeners

navButton.addEventListener("click", toggleMenu);

// Function to change hamburger menu to left arrow
function toggleMenu() {
  if (!showMenu) {
    navButton.classList.add("close");
    navBranding.classList.add("show");
    navMenu.classList.add("show");
    navMain.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));
    main.classList.add("show");
    //Set current state of menu
    showMenu = true;
  } else {
    navButton.classList.remove("close");
    navBranding.classList.remove("show");
    navMenu.classList.remove("show");
    navMain.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));
    main.classList.remove("show");
    // set menu state
    showMenu = false;
  }
}

// JS for about page: Hidden message on mouseover

let aboutCreepy = document.getElementById("about-creepy");

// listeners
aboutCreepy.addEventListener("mouseenter", creepyOn);
aboutCreepy.addEventListener("mouseleave", creepyOff);

// set initial message state
let isCreepy = false;

// changes hospitality to rest of your life on mouseover. TODO: Roll these two into one toggle function
function creepyOn() {
  console.log(isCreepy);
  if (!isCreepy) {
    isCreepy = true;
    aboutCreepy.innerHTML = "rest of your life";
  }
}

function creepyOff() {
  console.log("Why is this not working");
  isCreepy = false;
  aboutCreepy.innerHTML = "hospitality";
}
