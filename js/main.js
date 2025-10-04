// main.js - додаємо імпорт та ініціалізацію

import { initLanguageSwitcher } from "./modules/language-switcher.js";
import { initScrollIndicator } from "./modules/scroll-indicator.js";
import { initCustomSelects } from "./modules/custom-select.js";
import { initCountryFilter } from "./modules/country-filter.js";
import { initAddUniversity } from "./modules/add-university.js";
import { initFAQ } from "./modules/faq.js";
import { initSlider } from "./modules/slider-mobile.js";
import { modalBtnClose } from "./modules/modal.js";
import { burgerMenu } from "./modules/burger-menu.js";
import { initProgramSearch } from "./modules/program-search.js";

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initScrollIndicator();
  initCustomSelects();
  initCountryFilter();
  initAddUniversity();
  modalBtnClose();
  initSlider();
  burgerMenu();
  initFAQ();
  initProgramSearch();
});
