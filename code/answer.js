class Answer {
  constructor(index, answers, correct) {
    this.answers = answers; 
    this.index = index;
    this.element = document.getElementById(`answer${this.index}`);
    this.output(this.answers);
    this.correct = correct === "true" ? true : false; //self-invented way of converting a string to boolean
    this.clicked = false; //checkes if this answer is clicked of not
  }
  //outputs this answer
  output(inputText) {
    this.element.classList.remove("hidden");
    this.element.textContent = inputText;
  }
}
