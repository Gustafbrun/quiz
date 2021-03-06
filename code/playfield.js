class Playfield {
  constructor(player) {
    this.player = player;
    this.questionElement = document.getElementById("question_output");
    this.questionCategory = document.getElementById("question_category");
    this.questionNumber = document.getElementById("question_number");
    this.restart = document.getElementById("restart_button");
    this.resultButton = document.getElementById("result_button");
    this.done = document.getElementById("done_button");
    this.message = document.getElementById("question_output");
    this.start = document.getElementById("start_input");
    this.counter = 0;
    this.questionArray;
    this.answerArray;
  }
  //resets the playfield
  resetPlayfield() {
    this.questionElement.textContent = "";
    this.questionCategory.textContent = "";
    this.questionNumber.textContent = "";
    for (let i = 0; i < 6; i++) {
      let tempElement = document.getElementById(`answer${i}`);
      if (!tempElement.classList.contains("hidden")) {
        tempElement.classList.add("hidden");
        if (tempElement.classList.contains("clicked")) {
          tempElement.classList.remove("clicked");
        }
      }
      if (!tempElement.classList.contains("answer_div")) {
        tempElement.classList.add("answer_div");
      }
      if (tempElement.classList.contains("correct_div")) {
        tempElement.classList.remove("correct_div");
      }
      if (tempElement.classList.contains("false_div")) {
        tempElement.classList.remove("false_div");
      }
    }
  }
  //hides the start functionalities
  hideStart() {
    this.start.setAttribute("class", "hidden");
  }
  //outputs the question and the answers and finaly returns an array filled with objects from the class Answer
  createPlayfield() {
    this.questionNumber.textContent = `Question: ${this.counter + 1}/${this.questionArray.length}`;
    this.questionCategory.textContent =
      this.questionArray[this.counter].category === ""
        ? "Category: Random"
        : `Category: ${this.questionArray[this.counter].category}`;
    this.questionElement.textContent = this.questionArray[this.counter].question;
    let outputtedAnswers = [];

    for (let i = 0; i < 6; i++) {
      if (this.answerArray[this.counter][i][0]) {
        outputtedAnswers.push(
          new Answer(i, this.answerArray[this.counter][i][0], this.answerArray[this.counter][i][1])
        );
        outputtedAnswers[i].element.addEventListener("click", function () {
          if (!outputtedAnswers[i].clicked) {
            outputtedAnswers[i].element.classList.add("clicked");
            outputtedAnswers[i].clicked = true;
          } else {
            outputtedAnswers[i].element.classList.remove("clicked");
            outputtedAnswers[i].clicked = false;
          }
        });
      }
    }
    this.counter++;
    return outputtedAnswers;
  }
  //outputs the quitscreen when user press the done button
  quitScreen() {
    this.done.classList.add("hidden");
    this.restart.classList.add("hidden");
    this.message.textContent = "Thank you for playing!";
  }
  //outputs the resultscreen when user press the get resultbutton
  resultScreen() {
    this.restart.classList.remove("hidden");
    this.done.classList.remove("hidden");
    this.resultButton.classList.add("hidden");
    if (this.player.score === 1) {
      this.message.textContent = `Congrats, ${this.player.name}! You got ${this.player.score} point!`;
    } else {
      this.message.textContent = `Congrats, ${this.player.name}! You got ${this.player.score} points!`;
    }
    this.message.classList.remove("hidden");
  }
  //toggles between buttons and their values
  resultStartNextQuestionToggle() {
    if (this.counter === this.answerArray.length) {
      this.resultButton.classList.remove("hidden");
    } else {
      let startButton = document.getElementById("start_button");
      startButton.value = "Next question";
      startButton.classList.remove("hidden");
    }
  }
  //resets the counter
  resetCounter() {
    this.counter = 0;
  }
}
