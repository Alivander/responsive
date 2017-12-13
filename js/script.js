var navButton = document.querySelector(".navigation__close");
var nav = document.querySelector(".navigation__list");

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navButton.classList.contains("button-close--on")) {
    navButton.classList.remove("button-close--on");
  } else {
    navButton.classList.add("button-close--on");
  }
  if (nav.classList.contains("navigation__list--close")) {
    nav.classList.remove("navigation__list--close");
  } else {
    nav.classList.add("navigation__list--close");
  }
});

window.addEventListener("keydown", function(evt) {
  evt.preventDefault();
  if (evt.keyCode == 27) {
    if (!nav.classList.contains("navigation__list--close")) {
      nav.classList.add("navigation__list--close");
    }
    if (navButton.classList.contains("button-close--on")) {
      navButton.classList.remove("button-close--on");
    }
  }
});
