// alert("wolololo");

const showmenu = document
  .querySelector(".menu__btn")
  .addEventListener("click", () => {
    const nav = document.querySelector(".navigation__nav");
    nav.classList.toggle("show_menu");

    console.log("halo");

    const btn = document.querySelector(".menu__btn");
    btn.classList.toggle("burger");
  });

const showLogin = document
  .getElementById("login")
  .addEventListener("click", () => {
    const form = document.querySelector(".login");

    const screenSize = window.matchMedia("(max-width: 800px)");

    function closeLogin(screen) {
      if (screen.matches) {
        const logInBtn = document.querySelector(".login__span");
        logInBtn.classList.toggle("login--close");
      } else {
      }
    }

    const screen = window.matchMedia("(min-width: 800px)");
    closeLogin(screen);

    screen.addListener(closeLogin);

    form.classList.toggle("show__login");
    event.preventDefault();
  });

const closeLogin = document
  .querySelector(".login__close")
  .addEventListener("click", () => {
    const form = document.querySelector(".login");

    form.classList.remove("show__login");
    event.preventDefault();
  });
