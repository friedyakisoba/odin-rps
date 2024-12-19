// console.log("Hello World!");

function getComputerChoice(min, max) {
    const ranInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (ranInt === 1) return "paper";
    if (ranInt === 2) return "scissors";
    // default case when const ranInt === 3 
    return "rock";
}


function getHumanChoice() {
    while (true) {
        let userChoice = prompt("Rock Paper Scissors!").toLowerCase();
        if (userChoice === "rock" ||
            userChoice === "paper" ||
            userChoice === "scissors") {
            return userChoice;
        }
        alert("Invalid Input. Enter Rock Paper or Scissors.");
    }

}


function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        return "Human Win";
    }

    if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        return "Computer Win";
    }

    if (computerChoice === humanChoice) return "Tie";

}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(1, 3);
        const roundWinner = playRound(humanChoice, computerChoice);


        if (roundWinner === "Human Win") {
            humanScore++;
            alert(`You won Round ${round}! // The score is You: ${humanScore} Computer: ${computerScore}`);
        } else if (roundWinner === "Computer Win") {
            computerScore++;
            alert(`Computer has won Round ${round}! // The score is You: ${humanScore} Computer: ${computerScore}`);
        } else if (roundWinner == "Tie") {
            computerScore++;
            humanScore++;
            alert(`It's a tie for Round ${round}! // The score is You: ${humanScore} Computer: ${computerScore}`);

        }
        // DEBUGGER tracks the points and what the choices are 
        // console.log("You chose", humanChoice);
        // console.log("Computer chose", computerChoice);
        // console.log("Your points", humanScore);
        // console.log("Computer points", computerScore);
    }

    if (humanScore > computerScore) {
        alert(`You: ${humanScore} // Computer: ${computerScore}`);
        alert ("You Won!");
    } else if (computerScore > humanScore) {
        alert(`You: ${humanScore} // Computer: ${computerScore}`);
        alert ("Computer Won!");
    } else if (computerScore == humanScore) {
        alert(`You: ${humanScore} // Computer: ${computerScore}`);
        alert("It's a Tie!")
    }

}

playGame();






