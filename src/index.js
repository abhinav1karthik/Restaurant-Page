import "./styles/styles.css";
import loadHomePage from "./modules/home.js";
import loadMenuPage from "./modules/menu.js";
import loadAboutPage from "./modules/about.js";
import loadContactPage from "./modules/contact.js";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();

  const navButtons = document.querySelectorAll("nav button");
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearContent();
      const tab = button.textContent.trim();
      if (tab === "Home") {
        loadHomePage();
      } else if (tab === "Menu") {
        loadMenuPage();
      } else if (tab === "About") {
        loadAboutPage();
      } else if (tab === "Contact Us") {
        loadContactPage();
      }
    });
  });
});
