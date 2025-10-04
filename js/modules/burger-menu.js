export function burgerMenu() {
  (function () {
    const burgerToggle = document.getElementById("burger-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");

    if (!burgerToggle || !mobileMenu || !overlay) {
      console.warn("Burger init: required elements missing");
      return;
    }

    function openMenu() {
      mobileMenu.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      mobileMenu.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    function syncFromCheckbox() {
      if (burgerToggle.checked) {
        openMenu();
      } else {
        closeMenu();
      }
    }

    burgerToggle.addEventListener("change", syncFromCheckbox);

    overlay.addEventListener("click", () => {
      burgerToggle.checked = false;
      closeMenu();
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burgerToggle.checked = false;
        closeMenu();
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960 && mobileMenu.classList.contains("open")) {
        burgerToggle.checked = false;
        closeMenu();
      }
    });
  })();
}
