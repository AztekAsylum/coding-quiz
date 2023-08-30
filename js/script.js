// DOM manipulation
var myBtn = document.querySelector("#start-btn");

function startQuiz() {
  var dataTypes = document.querySelector("#data-types");

  dataTypes.classList.remove("hide")

  var quizChallenge = document.querySelector("#quiz-challenge");

  quizChallenge.classList.add("hide")


}

myBtn.addEventListener("click", startQuiz);
