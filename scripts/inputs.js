const allQuestions = document.querySelectorAll(".question");
const questionsAmount = document
  .querySelector(".section")
  .querySelectorAll(".section > *").length;
let resultsArray = [];
const results_Button = document.querySelector("#resultsButton");

// даём нужным инпутам value очков при их выборе
for (let i = 0; i < allQuestions.length; i++) {
  let localeInputs = allQuestions[i].querySelectorAll("input");
  localeInputs[0].value = 1;
  localeInputs[1].value = 1;
  localeInputs[2].value = 3;
  localeInputs[3].value = 5;
}

results_Button.addEventListener("click", function (e) {
  let uncheckedInputExists = true;
  for (let i = 0; i < allQuestions.length; i++) {
    let localeInputs = allQuestions[i].querySelectorAll("input");
    for (let j = 0; j < 4; j++) {
      if (localeInputs[j].checked === true) {
        uncheckedInputExists = false;
        continue;
      }
    }
  }

  if (!uncheckedInputExists) {
    window.scrollTo(0, 0);

    for (let i = 0; i < allQuestions.length; i += questionsAmount) {
      let sum = 0;
      let inputs = [];
      for (let j = i; j < i + questionsAmount; j++) {
        inputs.push(allQuestions[j]);
      }

      for (let k = 0; k < inputs.length; k++) {
        let localeRadios = inputs[k].querySelectorAll("input");
        for (let l = 0; l < localeRadios.length; l++) {
          if (localeRadios[l].checked) {
            sum += Number(localeRadios[l].value);
          }
        }
      }
      resultsArray.push(sum);

      let percentsArray = [];
      for (let i = 0; i < resultsArray.length; i++) {
        percentsArray.push(Math.round(resultsArray[i] / 50 * 100));
      }
    }

    document.querySelector("main > div").style.display = "none";
    document.querySelector(".results").style.display = "flex";

  } else {
    e.target.style.backgroundColor = "red";
    e.target.style.border = "1px solid red";
    alert("Заполните все поля!");
  }
});
