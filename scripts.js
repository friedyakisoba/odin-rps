// console.log("Hello World!");

function getComputerChoice(min, max) {
    const ranInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (ranInt == 1) return "paper";
    if (ranInt == 2) return "scissors";
    // default case when const ranInt = 3 
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

    if (humanChoice == computerChoice) {
        return "Tie";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(1, 3);
        const roundWinner = playRound(humanChoice, computerChoice);


        if (roundWinner == "Human win") {
            alert("You won this round!");
            humanScore++;
        } else if (roundWinner == "Computer win") {
            alert("Computer won this round!");
            computerScore++;
        } else if (roundWinner == "Tie") {
            alert("It's a Tie")
            computerScore++;
            humanScore++;
        }

        // tracks the points and what the choices are to debug
        console.log("You chose", humanChoice);
        console.log("Computer chose", computerChoice);

        console.log("Your points", humanScore);
        console.log("Computer points", computerScore);
    }

    if (humanScore > computerScore) {
        alert("Human has won the game");

    } else if (computerScore > humanScore) {
        alert("Computer has won the game");
    } else if (computerChoice == humanScore) {
        alert("It's a Tie!")
    }

}

playGame();






