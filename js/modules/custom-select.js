export function initCustomSelects() {
  document.querySelectorAll(".custom-select-wrapper").forEach((wrapper) => {
    const mainInput = wrapper.querySelector(".custom-select-input");
    const dropdown = wrapper.querySelector(".custom-select-dropdown");
    const arrow = wrapper.querySelector(".select-arrow");
    const addButton = wrapper.querySelector(".custom-select-add-button");

    if (!dropdown) return;

    let options = Array.from(
      dropdown.querySelectorAll(".custom-select-option")
    );

    // --- NEW ITEM FORM  ---
    const newForm = wrapper.querySelector(".new-item-form");
    const newFormInput = newForm?.querySelector("input, textarea");

    // --- SEARCH INPUT ---
    let searchInput = dropdown.querySelector(".custom-select-search-input");
    if (!searchInput) {
      const searchDiv = document.createElement("div");
      searchDiv.classList.add("custom-select-search");

      searchInput = document.createElement("input");
      searchInput.type = "text";
      searchInput.placeholder = "Search...";
      searchInput.classList.add("custom-select-search-input");

      const searchIcon = document.createElement("img");
      searchIcon.src = "./project/img/search.svg";
      searchIcon.alt = "Search";
      searchIcon.classList.add("custom-select-search-icon");

      searchDiv.appendChild(searchInput);
      searchDiv.appendChild(searchIcon);
      dropdown.prepend(searchDiv);
    }

    // --- POSITION DROPDOWN ---
    const positionDropdown = () => {
      dropdown.style.top = `${mainInput.offsetHeight - 12}px`;
      dropdown.style.left = `0`;
      dropdown.style.width = `${mainInput.offsetWidth}px`;
    };

    // --- FILTER OPTIONS ---
    const filterOptions = (term = "") => {
      const searchTerm = term.toLowerCase();
      options.forEach((opt) => {
        opt.style.display = opt.textContent.toLowerCase().includes(searchTerm)
          ? "block"
          : "none";
      });
      dropdown.classList.add("active");
      wrapper.classList.add("active");
      positionDropdown();
    };

    const closeDropdown = () => {
      dropdown.classList.remove("active");
      wrapper.classList.remove("active");
      searchInput.value = "";
      options.forEach((opt) => (opt.style.display = "block"));
    };

    const toggleNewForm = (show) => {
      if (newForm) {
        if (show) {
          newForm.classList.add("active");
          newFormInput?.focus();
        } else {
          newForm.classList.remove("active");
        }
      }
    };

    // --- EVENT LISTENERS ---
    mainInput.addEventListener("click", (e) => {
      e.stopPropagation();
      if (wrapper.classList.contains("active")) closeDropdown();
      else {
        dropdown.classList.add("active");
        wrapper.classList.add("active");
        positionDropdown();
        searchInput.focus();
      }
    });

    mainInput.addEventListener("input", () => filterOptions(mainInput.value));
    searchInput.addEventListener("input", () =>
      filterOptions(searchInput.value)
    );

    arrow?.addEventListener("click", (e) => {
      e.stopPropagation();
      mainInput.click();
    });

    dropdown.addEventListener("click", (e) => {
      const option = e.target.closest(".custom-select-option");
      if (option) {
        mainInput.value = option.textContent.trim();
        closeDropdown();
      }
    });

    addButton?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDropdown();
      toggleNewForm(true);
    });

    newFormInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const value = newFormInput.value.trim();
        if (value) {
          mainInput.value = value;
          toggleNewForm(false);
          newFormInput.value = "";
        }
      }
    });

    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        closeDropdown();
        toggleNewForm(false);
      }
    });

    window.addEventListener("resize", () => {
      if (dropdown.classList.contains("active")) positionDropdown();
    });

    mainInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDropdown();
    });

    searchInput.addEventListener("click", (e) => e.stopPropagation());
  });
}
