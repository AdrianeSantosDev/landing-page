let menuButton = document.querySelectorAll(".menuButton")[0];
let menu = document.getElementsByTagName("nav")[0];
let creditsDialog = document.getElementsByTagName("dialog")[0];

document.body.addEventListener(
  "click",
  function (evt) {
    if (evt.target.className === "menuButton") {
      menu.style.transform = "translateX(0%)";
    }

    if (evt.target.className === "closeButton") {
      menu.style.transform = "translateX(100%)";
    }

    if (evt.target.innerHTML === "Credits") {
      if (
        creditsDialog.style.display === "none" ||
        creditsDialog.style.display === ""
      ) {
        creditsDialog.style.display = "flex";
      } else {
        creditsDialog.style.display = "none";
      }
      creditsDialog.open = !creditsDialog.open;
      console.log(creditsDialog.open);
    }

    if (evt.target.className === "closeCredits") {
      creditsDialog.style.display = "none";
      creditsDialog.open = false;
    }
  },
  false
);

window.addEventListener(
  "resize",
  function (event) {
    if (window.innerWidth >= 430) {
      menu.style.transform = "translateX(100%)";
    }
  },
  true
);
