const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const resultsButton = document.querySelector("#resultsButton");

const labels = document.querySelectorAll(".label");
const sections = document.querySelectorAll(".section");

let position = 0;

prevButton.addEventListener("click", () => {
  window.scrollTo(0, 0);

  labels[position].classList.remove("active");
  labels[position - 1].classList.add("active");
  sections[position].classList.remove("active");
  sections[position - 1].classList.add("active");
  position--;

  if (!(position === labels.length - 1)) {
    nextButton.disabled = false;
    resultsButton.disabled = true;
  }

  position === 0 ? (prevButton.disabled = true) : null;
});

nextButton.addEventListener("click", () => {
  window.scrollTo(0, 0);

  labels[position].classList.remove("active");
  labels[position + 1].classList.add("active");
  sections[position].classList.remove("active");
  sections[position + 1].classList.add("active");
  position++;

  position === 0 ? null : (prevButton.disabled = false);

  if (position === labels.length - 1) {
    nextButton.disabled = true;
    resultsButton.disabled = false;
  }
});
