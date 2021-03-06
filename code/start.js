class Start {
  constructor() {
    this.submitButton = document.getElementById("submit_button");
    this.quizTitle = document.getElementsByClassName("quiz_title")[0];
    this.startAnimation();
    this.start(this.questions, this.playerNameInput);
  }
  //method that calls two methods when startbutton is clicked
  start(questions, playerNameInput) {
    this.submitButton.addEventListener("click", function () {
      questions(playerNameInput());
    });
  }
  /*Method that takes the chosen amount of questions and fetches them from the api
  then creates an object from the Game class with the, from the api, given array and the playername as argument*/

  questions(playerName) {
    let amountOfQuestions = document.getElementById("amount_questions").value;
    fetch(
      `https://quizapi.io/api/v1/questions?apiKey=YTE8b9GiIfGRyRdeo3KsJa0owKtVmjiCic95wfq2&limit=${amountOfQuestions}`
    )
      .then((response) => response.json())
      .then((data) => new Game(data, playerName));
  }

  /*Method that takes the players name and return it*/
  playerNameInput() {
    return document.getElementById("player_name").value;
  }
  startAnimation() {
    this.quizTitle.classList.add("quiz_title_landing");
  }
}
