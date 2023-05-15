"use strict";

// Selectors
const overlay = document.querySelector(".overlay");
const navIcon = document.querySelector("header .mobile-icon-container");
const headerNav = document.getElementById("header-nav");
const openIcon = navIcon.querySelector("#mobile-nav-open");
const closeIcon = navIcon.querySelector("#mobile-nav-close");






// Functions
function handleMobileNavToggle() {
  // Hide/Show nav icons
  openIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");

  // If closeIcon have active class
  if (closeIcon.classList.contains("active")) {
    // Show overlay and nav menu
    overlay.classList.toggle("active");
    headerNav.classList.toggle("active");
  } else {
    overlay.style.opacity = "0";
    headerNav.style.opacity = "0";

    // Reset to default to close mav menu/overlay
    setTimeout(() => {
      overlay.classList.toggle("active");
      headerNav.classList.toggle("active");
      // Default values
      overlay.style.opacity = "";
      headerNav.style.opacity = "";
    }, 300);
  }
}



function resetMobileMenu() {
  if ( window.innerWidth >= 992) {
    // Reset active classes
    overlay.classList.remove("active");
    headerNav.classList.remove("active");
    openIcon.classList.add("active");
    closeIcon.classList.remove("active");
    // Default values
    overlay.style.opacity = "";
    headerNav.style.opacity = "";
  }
}







// Events
navIcon.addEventListener("click", () => handleMobileNavToggle());
overlay.addEventListener("click", () => handleMobileNavToggle());

window.addEventListener('resize', () => resetMobileMenu())