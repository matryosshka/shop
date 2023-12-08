const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faqs.forEach((otherFaq) => {
        otherFaq.classList.remove("active");
      });
      faq.classList.add("active");
    }
  });

  const title = faq.querySelector(".faq-title");
  if (title) {
    title.addEventListener("click", (event) => {
      if (faq.classList.contains("active") && event.target === title) {
        faq.classList.remove("active");
      }
    });
  }
});

const hideBtn = document.querySelector('.btn');

hideBtn.addEventListener("click", () => {
  if (hideBtn.textContent === 'Скрыть') {
    const activeFaq = document.querySelector(".faq.active");
    if (activeFaq) {
      activeFaq.classList.remove("active");
    }
  }
}); 