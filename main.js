// Updated main.js
document.addEventListener("DOMContentLoaded", function () {
  // Menu functionality
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  if (menu && navbar) {
    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }

  // Scroll functionality
  window.onscroll = () => {
    if (menu && navbar) {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  };
});
