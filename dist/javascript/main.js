// Select menu elements to transform

let navMain = document.querySelector(".nav");
let navButton = document.querySelector(".nav-button");
let navBranding = document.querySelector(".nav-branding");
let navMenu = document.querySelector(".nav-menu");
let navItem = document.querySelectorAll(".nav-item");
let main = document.querySelector("#main");

// page identifiers

const landingPage = document.querySelector(".landing");
const aboutPage = document.querySelector(".about");
const downloadPage = document.querySelector(".download");
const staffPage = document.querySelector(".staff");
const contactPage = document.querySelector(".contact");

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

if (aboutPage == !null) {
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
} // end of about page check

// JS for staff page

const staffName = document.querySelectorAll(".name");
const bio = document.querySelectorAll(".bio");

// Our goal is to make clicking the title cause the person's bio to drop down.

// attaches a CSS ID to each element with .name or .bio class. This is so we can determine which name was clicked on the page and then reveal the corresponding bio.
function attachId() {
  for (var i = 0; i < bio.length; i++) {
    staffName[i].id = i.toString(); //attach id to element
    staffName[i].showMenu = false; // add toggle property to element
    var x = "bio" + i.toString(); // concatenate bio id corresponding to id
    bio[i].id = x; // attach bio id
  }
}

// attach click listeners to name elements
staffName.forEach(item => item.addEventListener("click", toggleBio));

function toggleBio() {
  // eventually move the id designation to page load. We want this to be able to support as many staff members as necessary without hard coding.
  attachId();

  // get bio element corresponding to clicked title
  var x = "bio" + this.id.toString();
  var y = document.getElementById(x);

  if (!this.showBio) {
    y.classList.add("show");
    this.showBio = true;
  } else {
    y.classList.remove("show");
    this.showBio = false;
  }
} // end of toggleBio
