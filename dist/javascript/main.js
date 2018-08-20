// Select menu elements to transform

let navMain = document.querySelector(".nav");
let navButton = document.querySelector(".nav-button");
let navBranding = document.querySelector(".nav-branding");
let navMenu = document.querySelector(".nav-menu");
let navItem = document.querySelectorAll(".nav-item");

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
    //Set current state of menu
    showMenu = true;
  } else {
    navButton.classList.remove("close");
    navBranding.classList.remove("show");
    navMenu.classList.remove("show");
    navMain.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));
    // set menu state
    showMenu = false;
  }
}
