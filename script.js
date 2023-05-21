function playGame(userChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computer= choices[Math.floor(Math.random() * choices.length)];

  var result = determineWinner(userChoice, computer);

  displayResult(userChoice, computer, result);
}

function determineWinner(userChoice, computer) {
  if (userChoice === computer) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computer === 'scissors') ||
    (userChoice === 'paper' && computer === 'rock') ||
    (userChoice === 'scissors' && computer === 'paper')
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(userChoice, computer, result) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Your choice: ${userChoice}</p>
    <p>Computer's choice: ${computer}</p>
    <p>${result}</p>
  `;
}
