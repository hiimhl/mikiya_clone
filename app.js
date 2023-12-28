"use strict";

const projectsBtn = document.querySelector(".header__projects__btn");
const allBtn = document.querySelector(".header__all__btn");

const projectsMenu = document.querySelector(".menu__projects");
const allMenu = document.querySelector(".menu__all");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

// Right menu all
const menu__all__ul = document.querySelector(".menu__all__ul");
const menuFurniture = document.querySelector(".menu__all__furniture");

function onToggleMenu(target) {
  const other = target === projectsMenu ? allMenu : projectsMenu;
  target.classList.toggle("hidden");
  // 중복 방지
  other.classList.add("hidden");
  target.classList.contains("hidden") && (target.style.opacity = "1");

  target.classList.contains("hidden")
    ? overlay.classList.add("hidden")
    : overlay.classList.remove("hidden");
}

function onMouseOverMenu(e) {
  const target = e.target.dataset.type;
  console.log(target);
  if (target === "furniture") {
    menuFurniture.classList.toggle("hidden");
  }
}

function eventHandler() {
  projectsBtn.addEventListener("click", () => onToggleMenu(projectsMenu));
  allBtn.addEventListener("click", () => onToggleMenu(allMenu));
  menu__all__ul.addEventListener("mouseover", onMouseOverMenu);
}

eventHandler();
