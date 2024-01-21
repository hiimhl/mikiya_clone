"use strict";

const projectsBtn = document.querySelector(".header__projects__btn");
const allBtn = document.querySelector(".header__all__btn");

const projectsMenu = document.querySelector(".menu__projects");
const allMenu = document.querySelector(".menu__all");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

// Right menu all
const allList = document.querySelectorAll(".menu__all__list");

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

const toggleClass = (target) => target.classList.toggle("hidden");

function onMouseOverMenu(e) {
  const target = e.target;
  const type = target.dataset.type;
  const classList = target.classList[0];

  if (type) return;

  switch (classList) {
    case "menu__all__list": {
      return toggleClass(target.lastElementChild);
    }
    case "menu__all__a": {
      return toggleClass(target.nextElementSibling);
    }
    case "menu__all__hover": {
      return toggleClass(target);
    }
    case "hover__list": {
      return toggleClass(target.parentElement);
    }
    case "hover__list__heading": {
      const ul = target.parentElement.parentElement;
      return toggleClass(ul);
    }
    case "hover__list__contents": {
      const ul = target.parentElement.parentElement;
      return toggleClass(ul);
    }
    default:
      break;
  }
}

const getImgData = async () => {
  const accessKey = "6IrhqT0gfrZKjzbQcomAW-hOUciJchXSXsThXZLkeCw";
  const page = "30";

  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${page}`;

  await fetch(apiUrl)
    .then((res) => res.json())
    .then((json) => printCardList(json))
    .catch((error) => console.log(error));
};

function printCardList(data) {
  console.log(data);
}

function eventHandler() {
  projectsBtn.addEventListener("click", () => onToggleMenu(projectsMenu));
  allBtn.addEventListener("click", () => onToggleMenu(allMenu));

  allList.forEach((list) => {
    list.addEventListener("mouseover", onMouseOverMenu);
    list.addEventListener("mouseout", onMouseOverMenu);
  });
}

eventHandler();
getImgData();
