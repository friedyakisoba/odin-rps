// console.log("Hello World!");

function getComputerChoice(min, max) {
    const ranInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (ranInt == 1) {
        return "paper";
    } else if (ranInt == 2) {
        return "scissors";
    } else if (ranInt == 3) {
        return "rock";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Rock Paper Scissors!").toLowerCase();
    if (userChoice == "rock") {
        return userChoice;
    } else if (userChoice == "paper") {
        return userChoice;
    } else if (userChoice == "scissors") {
        return userChoice;
    } else {
        alert("invalid choice...exiting");
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        return "human wins";

    } else if (computerChoice == "paper" && humanChoice == "rock" ||
        computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "scissors" && humanChoice == "paper") {

        return "computer wins";
    } else if (humanChoice == computerChoice){
        return "tie";

    }
}

function playGame() {
        let humanScore = 0;
        let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(1, 3);
        const roundWinner = playRound(humanChoice, computerChoice);

    

        if (roundWinner == "human wins") {
            alert("you won this round");
            humanScore++;
        } else if (roundWinner == "computer wins") {
            alert("computer won this round");
            computerScore++;
        } else if (roundWinner == "tie") {
            alert ("It's a tie")
            computerScore++;
            humanScore++;
        }
        

        console.log("human chose", humanChoice);
        console.log("computer chose", computerChoice);
        
        

        console.log("human points", humanScore);
        console.log("computer points", computerScore);
    }
   
    if (humanScore > computerScore) {
        alert("human won the game");

    } else if (computerScore > humanScore) {
        alert("computer won the game");
    }
      
}

playGame();






