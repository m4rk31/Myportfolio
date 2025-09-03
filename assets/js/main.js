// ================= MENU =================
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

// ================= TYPING EFFECT =================
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  const text = "Updating this window, projects will appear soon...";
  let i = 0;

  function typeWriter() {
    if (i <= text.length) {
      typingElement.innerHTML = text.substring(0, i) + '<span class="cursor"></span>';
      i++;
      setTimeout(typeWriter, 80); // velocidad del tecleo
    }
  }

  typeWriter();
});