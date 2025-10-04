export function initFAQ() {
  const faqQuestions = document.querySelectorAll(".faq__toggle-question");

  faqQuestions.forEach((question) => {
    const faqContent = question.closest(".faq__content");
    const faqAnswer = faqContent.querySelector(".faq__answer");
    const faqMetaTop = faqContent.querySelector(".faq__meta--top");
    const faqMetaBottom = faqContent.querySelector(".faq__meta--bottom");

    if (faqMetaTop) {
      faqMetaTop.classList.add("active");
    }
    if (faqAnswer) {
      faqAnswer.classList.remove("active");
    }
    if (faqMetaBottom) {
      faqMetaBottom.classList.remove("active");
    }

    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true";
      question.setAttribute("aria-expanded", !isExpanded);

      if (faqAnswer) faqAnswer.classList.toggle("active");
      if (faqMetaTop) faqMetaTop.classList.toggle("active");
      if (faqMetaBottom) faqMetaBottom.classList.toggle("active");
    });

    question.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        question.click();
      }
    });
  });
}
