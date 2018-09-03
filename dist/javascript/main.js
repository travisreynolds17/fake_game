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
const staffItem = document.querySelectorAll(".staff-item");
const moreButton = document.querySelectorAll(".more");

// Our goal is to make clicking the title cause the person's bio to drop down.

// attaches a CSS ID to each element with .name or .bio class. This is so we can determine which name was clicked on the page and then reveal the corresponding bio.
function attachId() {
  for (var i = 0; i < bio.length; i++) {
    var x = "bio" + i.toString(); // concatenate bio id corresponding to id
    var y = "name" + i.toString(); // '' '' '' staff-item
    var w = "item" + i.toString(); // '' '' '' .more spans

    staffItem[i].id = w;
    staffName[i].id = y; //attach id to element
    bio[i].id = x; // attach bio id
    moreButton[i].id = i.toString();
    moreButton[i].showMenu = false; // add toggle property to element
  }
}

// attach click listeners to name elements
moreButton.forEach(item => item.addEventListener("click", toggleBio));

function toggleBio() {
  // eventually move the id designation to page load. We want this to be able to support as many staff members as necessary without hard coding.
  attachId();

  // get bio element corresponding to clicked title
  var m = "name" + this.id.toString();
  var l = document.getElementById(m); // get numbered spans with .more class
  var x = "bio" + this.id.toString();
  var y = document.getElementById(x); // ''   ''  ''  ''  ''  '' .bio class
  var z = "item" + this.id.toString();
  var n = document.getElementById(z); // '' '' '' staff item

  if (!this.showBio) {
    y.classList.add("show");
    n.classList.add("show");
    l.classList.add("show");
    this.showBio = true;
    this.innerHTML = "X";
  } else {
    y.classList.remove("show");
    n.classList.remove("show");
    l.classList.remove("show");
    this.showBio = false;
    this.innerHTML = "...";
  }
} // end of toggleBio

/*888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
88888888888888888888888888888888888888888888888888888888888888888888888888
CONTACT PAGE
88888888888888888888888888888888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/

const contTwitter = document.querySelector(".twitter");
const contFacebook = document.querySelector(".facebook");
const contInstagram = document.querySelector(".instagram");
const contBody = document.querySelector(".bg-img");

let showTwit = false;
let showFace = false;
let showInsta = false;

// add event listeners

contTwitter.addEventListener("click", twitClick);
contFacebook.addEventListener("click", faceClick);

// functions

function twitClick() {
  if (!showTwit) {
    contTwitter.classList.add("show");
    showTwit = true;
  } else {
    contTwitter.classList.remove("show");
    showTwit = false;
  }
}

function faceClick() {}
