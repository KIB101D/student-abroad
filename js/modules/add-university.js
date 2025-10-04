// export function initAddUniversity() {
//   const addInvitingUniButton = document.getElementById(
//     "add-inviting-uni-button"
//   );
//   const newInvitingUniFields = document.getElementById(
//     "new-inviting-uni-fields"
//   );

//   if (addInvitingUniButton && newInvitingUniFields) {
//     addInvitingUniButton.addEventListener("click", () => {
//       newInvitingUniFields.style.display =
//         newInvitingUniFields.style.display === "none" ? "block" : "none";

//       if (newInvitingUniFields.style.display === "block") {
//         newInvitingUniFields
//           .querySelectorAll("input")
//           .forEach((input) => (input.value = ""));
//         const newRegionFields = document.getElementById("new-region-fields");
//         if (newRegionFields) newRegionFields.style.display = "none";
//       }
//     });
//   }

//   const addHomeUniButton = document.getElementById("add-home-uni-button");
//   const newHomeUniFields = document.getElementById("new-home-uni-fields");

//   if (addHomeUniButton && newHomeUniFields) {
//     addHomeUniButton.addEventListener("click", () => {
//       newHomeUniFields.style.display =
//         newHomeUniFields.style.display === "none" ? "block" : "none";
//       if (newHomeUniFields.style.display === "block") {
//         newHomeUniFields
//           .querySelectorAll("input")
//           .forEach((input) => (input.value = ""));
//         const newHomeUniRegionFields = document.getElementById(
//           "new-home-uni-region-fields"
//         );
//         if (newHomeUniRegionFields)
//           newHomeUniRegionFields.style.display = "none";
//       }
//     });
//   }

//   const addRegionButton = document.getElementById("add-region-button");
//   const newRegionFields = document.getElementById("new-region-fields");

//   if (addRegionButton && newRegionFields) {
//     addRegionButton.addEventListener("click", (event) => {
//       event.stopPropagation();
//       newRegionFields.style.display =
//         newRegionFields.style.display === "none" ? "block" : "none";
//       if (newRegionFields.style.display === "block") {
//         newRegionFields
//           .querySelectorAll("input")
//           .forEach((input) => (input.value = ""));
//       }
//     });
//   }

//   const addHomeUniRegionButton = document.getElementById(
//     "add-home-uni-region-button"
//   );
//   const newHomeUniRegionFields = document.getElementById(
//     "new-home-uni-region-fields"
//   );

//   if (addHomeUniRegionButton && newHomeUniRegionFields) {
//     addHomeUniRegionButton.addEventListener("click", (event) => {
//       event.stopPropagation();
//       newHomeUniRegionFields.style.display =
//         newHomeUniRegionFields.style.display === "none" ? "block" : "none";
//       if (newHomeUniRegionFields.style.display === "block") {
//         newHomeUniRegionFields
//           .querySelectorAll("input")
//           .forEach((input) => (input.value = ""));
//       }
//     });
//   }

//   const addCountryButton = document.getElementById("add-country-button");
//   if (addCountryButton) {
//     addCountryButton.addEventListener("click", (event) => {
//       event.stopPropagation();
//       console.log(
//         'Кнопка "Додати країну" для нового регіону запрошуючого університету натиснута'
//       );
//     });
//   }

//   const addHomeUniCountryButton = document.getElementById(
//     "add-home-uni-country-button"
//   );
//   if (addHomeUniCountryButton) {
//     addHomeUniCountryButton.addEventListener("click", (event) => {
//       event.stopPropagation();
//       console.log(
//         'Кнопка "Додати країну" для нового регіону домашнього університету натиснута!'
//       );
//     });
//   }

//   // --- SUBMIT LOGIC FOR "ADD A NEW UNI" BUTTONS ---
//   const addNewInvitingUniSubmitButton =
//     document.getElementById("add-new-uni-button");
//   if (addNewInvitingUniSubmitButton) {
//     addNewInvitingUniSubmitButton.addEventListener("click", () => {
//       const newUniNameInput = newInvitingUniFields.querySelector(
//         'input[placeholder="Name:"]'
//       );
//       const newUniShortNameInput = newInvitingUniFields.querySelector(
//         'input[placeholder="Short Name:"]'
//       );
//       const newUniSlugInput = newInvitingUniFields.querySelector(
//         'input[placeholder="Slug:"]'
//       );
//       const newUniRegionInput = newInvitingUniFields.querySelector(
//         'input[placeholder="Region:"]'
//       );
//       const newUniCountryInput = newInvitingUniFields.querySelector(
//         '#new-region-fields input[placeholder="Country:"]'
//       );
//       const newUniUrlInput = newInvitingUniFields.querySelector(
//         'input[placeholder="URL:"]'
//       );
//       const newUniContactInput = newInvitingUniFields.querySelector(
//         'input[placeholder="Contact:"]'
//       );

//       if (!newUniNameInput.value.trim() || !newUniSlugInput.value.trim()) {
//         alert(
//           'Будь ласка, заповніть поля "Name" та "Slug" для нового університету.'
//         );
//         return;
//       }

//       const newUniData = {
//         name: newUniNameInput.value.trim(),
//         shortName: newUniShortNameInput.value.trim(),
//         slug: newUniSlugInput.value.trim(),
//         region: newUniRegionInput.value.trim(),
//         country: newUniCountryInput ? newUniCountryInput.value.trim() : "",
//         url: newUniUrlInput.value.trim(),
//         contact: newUniContactInput.value.trim(),
//       };

//       console.log("Відправка нового університету:", newUniData);

//       alert("Дані збережено.");
//       newInvitingUniFields
//         .querySelectorAll("input")
//         .forEach((input) => (input.value = ""));
//       newInvitingUniFields.style.display = "none";
//       const newRegionFieldsForInviting =
//         document.getElementById("new-region-fields");
//       if (newRegionFieldsForInviting)
//         newRegionFieldsForInviting.style.display = "none";
//     });
//   }

//   const addNewHomeUniSubmitButton = document.getElementById(
//     "add-new-home-uni-button"
//   );
//   if (addNewHomeUniSubmitButton) {
//     addNewHomeUniSubmitButton.addEventListener("click", () => {
//       const newHomeUniNameInput = newHomeUniFields.querySelector(
//         'input[placeholder="Name:"]'
//       );
//       const newHomeUniShortNameInput = newHomeUniFields.querySelector(
//         'input[placeholder="Short Name:"]'
//       );
//       const newHomeUniSlugInput = newHomeUniFields.querySelector(
//         'input[placeholder="Slug:"]'
//       );
//       const newHomeUniRegionInput = newHomeUniFields.querySelector(
//         'input[placeholder="Region:"]'
//       );
//       const newHomeUniCountryInput = newHomeUniFields.querySelector(
//         '#new-home-uni-region-fields input[placeholder="Country:"]'
//       );
//       const newHomeUniUrlInput = newHomeUniFields.querySelector(
//         'input[placeholder="URL:"]'
//       );
//       const newHomeUniContactInput = newHomeUniFields.querySelector(
//         'input[placeholder="Contact:"]'
//       );

//       if (
//         !newHomeUniNameInput.value.trim() ||
//         !newHomeUniSlugInput.value.trim()
//       ) {
//         alert(
//           'Будь ласка, заповніть поля "Name" та "Slug" для нового університету.'
//         );
//         return;
//       }

//       const newHomeUniData = {
//         name: newHomeUniNameInput.value.trim(),
//         shortName: newHomeUniShortNameInput.value.trim(),
//         slug: newHomeUniSlugInput.value.trim(),
//         region: newHomeUniRegionInput.value.trim(),
//         country: newHomeUniCountryInput
//           ? newHomeUniCountryInput.value.trim()
//           : "",
//         url: newHomeUniUrlInput.value.trim(),
//         contact: newHomeUniContactInput.value.trim(),
//       };

//       console.log("Відправка нового університету:", newHomeUniData);

//       alert("Дані збережено.");
//       newHomeUniFields
//         .querySelectorAll("input")
//         .forEach((input) => (input.value = ""));
//       newHomeUniFields.style.display = "none";
//       const newHomeUniRegionFieldsForInviting = document.getElementById(
//         "new-home-uni-region-fields"
//       );
//       if (newHomeUniRegionFieldsForInviting)
//         newHomeUniRegionFieldsForInviting.style.display = "none";
//     });
//   }
// };
export function initAddUniversity() {
  // --- ADD INVITING UNI LOGIC ---
  const addInvitingUniButton = document.getElementById(
    "add-inviting-uni-button"
  );
  const newInvitingUniFields = document.getElementById(
    "new-inviting-uni-fields"
  );

  if (addInvitingUniButton && newInvitingUniFields) {
    addInvitingUniButton.addEventListener("click", () => {
      newInvitingUniFields.style.display =
        newInvitingUniFields.style.display === "none" ? "block" : "none";

      if (newInvitingUniFields.style.display === "block") {
        newInvitingUniFields
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
        const newRegionFields = document.getElementById("new-region-fields");
        if (newRegionFields) newRegionFields.style.display = "none";
      }
    });
  }

  // --- ADD HOME UNI LOGIC ---
  const addHomeUniButton = document.getElementById("add-home-uni-button");
  const newHomeUniFields = document.getElementById("new-home-uni-fields");

  if (addHomeUniButton && newHomeUniFields) {
    addHomeUniButton.addEventListener("click", () => {
      newHomeUniFields.style.display =
        newHomeUniFields.style.display === "none" ? "block" : "none";
      if (newHomeUniFields.style.display === "block") {
        newHomeUniFields
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
        const newHomeUniRegionFields = document.getElementById(
          "new-home-uni-region-fields"
        );
        if (newHomeUniRegionFields)
          newHomeUniRegionFields.style.display = "none";
      }
    });
  }

  // --- ADD REGION BUTTON FOR INVITING UNI ---
  const addRegionButton = document.getElementById("add-region-button");
  const newRegionFields = document.getElementById("new-region-fields");

  if (addRegionButton && newRegionFields) {
    addRegionButton.addEventListener("click", (event) => {
      event.stopPropagation();
      newRegionFields.style.display =
        newRegionFields.style.display === "none" ? "block" : "none";
      if (newRegionFields.style.display === "block") {
        newRegionFields
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
      }
    });
  }

  // --- ADD HOME UNI REGION BUTTON ---
  const addHomeUniRegionButton = document.getElementById(
    "add-home-uni-region-button"
  );
  const newHomeUniRegionFields = document.getElementById(
    "new-home-uni-region-fields"
  );

  if (addHomeUniRegionButton && newHomeUniRegionFields) {
    addHomeUniRegionButton.addEventListener("click", (event) => {
      event.stopPropagation();
      newHomeUniRegionFields.style.display =
        newHomeUniRegionFields.style.display === "none" ? "block" : "none";
      if (newHomeUniRegionFields.style.display === "block") {
        newHomeUniRegionFields
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
      }
    });
  }

  // --- ADD COUNTRY BUTTONS (PLACEHOLDERS) ---
  const addCountryButton = document.getElementById("add-country-button");
  if (addCountryButton) {
    addCountryButton.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(
        'Кнопка "Додати країну" для нового регіону запрошуючого університету натиснута'
      );
    });
  }

  const addHomeUniCountryButton = document.getElementById(
    "add-home-uni-country-button"
  );
  if (addHomeUniCountryButton) {
    addHomeUniCountryButton.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(
        'Кнопка "Додати країну" для нового регіону домашнього університету натиснута!'
      );
    });
  }

  // --- SUBMIT LOGIC FOR "ADD A NEW UNI" BUTTONS ---
  const addNewInvitingUniSubmitButton =
    document.getElementById("add-new-uni-button");
  if (addNewInvitingUniSubmitButton) {
    addNewInvitingUniSubmitButton.addEventListener("click", () => {
      const newUniNameInput = newInvitingUniFields.querySelector(
        'input[placeholder="Name:"]'
      );
      const newUniShortNameInput = newInvitingUniFields.querySelector(
        'input[placeholder="Short Name:"]'
      );
      const newUniSlugInput = newInvitingUniFields.querySelector(
        'input[placeholder="Slug:"]'
      );
      const newUniRegionInput = newInvitingUniFields.querySelector(
        'input[placeholder="Region:"]'
      );
      const newUniCountryInput = newInvitingUniFields.querySelector(
        '#new-region-fields input[placeholder="Country:"]'
      );
      const newUniUrlInput = newInvitingUniFields.querySelector(
        'input[placeholder="URL:"]'
      );
      const newUniContactInput = newInvitingUniFields.querySelector(
        'input[placeholder="Contact:"]'
      );

      if (!newUniNameInput.value.trim() || !newUniSlugInput.value.trim()) {
        alert(
          'Будь ласка, заповніть поля "Name" та "Slug" для нового університету.'
        );
        return;
      }

      const newUniData = {
        name: newUniNameInput.value.trim(),
        shortName: newUniShortNameInput.value.trim(),
        slug: newUniSlugInput.value.trim(),
        region: newUniRegionInput.value.trim(),
        country: newUniCountryInput ? newUniCountryInput.value.trim() : "",
        url: newUniUrlInput.value.trim(),
        contact: newUniContactInput.value.trim(),
      };

      console.log("Відправка нового університету:", newUniData);

      alert("Дані збережено.");
      newInvitingUniFields
        .querySelectorAll("input")
        .forEach((input) => (input.value = ""));
      newInvitingUniFields.style.display = "none";
      const newRegionFieldsForInviting =
        document.getElementById("new-region-fields");
      if (newRegionFieldsForInviting)
        newRegionFieldsForInviting.style.display = "none";
    });
  }

  const addNewHomeUniSubmitButton = document.getElementById(
    "add-new-home-uni-button"
  );
  if (addNewHomeUniSubmitButton) {
    addNewHomeUniSubmitButton.addEventListener("click", () => {
      const newHomeUniNameInput = newHomeUniFields.querySelector(
        'input[placeholder="Name:"]'
      );
      const newHomeUniShortNameInput = newHomeUniFields.querySelector(
        'input[placeholder="Short Name:"]'
      );
      const newHomeUniSlugInput = newHomeUniFields.querySelector(
        'input[placeholder="Slug:"]'
      );
      const newHomeUniRegionInput = newHomeUniFields.querySelector(
        'input[placeholder="Region:"]'
      );
      const newHomeUniCountryInput = newHomeUniFields.querySelector(
        '#new-home-uni-region-fields input[placeholder="Country:"]'
      );
      const newHomeUniUrlInput = newHomeUniFields.querySelector(
        'input[placeholder="URL:"]'
      );
      const newHomeUniContactInput = newHomeUniFields.querySelector(
        'input[placeholder="Contact:"]'
      );

      if (
        !newHomeUniNameInput.value.trim() ||
        !newHomeUniSlugInput.value.trim()
      ) {
        alert(
          'Будь ласка, заповніть поля "Name" та "Slug" для нового університету.'
        );
        return;
      }

      const newHomeUniData = {
        name: newHomeUniNameInput.value.trim(),
        shortName: newHomeUniShortNameInput.value.trim(),
        slug: newHomeUniSlugInput.value.trim(),
        region: newHomeUniRegionInput.value.trim(),
        country: newHomeUniCountryInput
          ? newHomeUniCountryInput.value.trim()
          : "",
        url: newHomeUniUrlInput.value.trim(),
        contact: newHomeUniContactInput.value.trim(),
      };

      console.log("Відправка нового університету:", newHomeUniData);

      alert("Дані збережено.");
      newHomeUniFields
        .querySelectorAll("input")
        .forEach((input) => (input.value = ""));
      newHomeUniFields.style.display = "none";
      const newHomeUniRegionFieldsForInviting = document.getElementById(
        "new-home-uni-region-fields"
      );
      if (newHomeUniRegionFieldsForInviting)
        newHomeUniRegionFieldsForInviting.style.display = "none";
    });
  }
}
