const options = ["rock", "paper", "scissors"];
const mapOfresult = {
    'rock&paper': 0,
    'rock&scissors': 1,
    'paper&scissors': 0,
    'paper&rock': 1,
    'scissors&rock': 0,
    'scissors&paper': 1,
}

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber];
}

function getHumanChoice() {
    let result = prompt("Please write one of the following options: rock, paper or scissors ").toLowerCase();
    
    result = options.includes(result) ? result : null;
    return result;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == null) { 
        console.log("Sorry, a human have made a bad choise.");
        return;
    }
    let choice = humanChoice + '&' + computerChoice;
    // console.log('choice ', choice);

    let result = mapOfresult[choice];
    
    if (result == undefined) {
        console.log("It's a draw");
    } else if (result) {
        console.log('Human won');
        humanScore++;
    } else {
        console.log('Human lost');
        computerScore++;
    }
}

function play(numberOfGames) {
    for (let index = 1; index <= numberOfGames; index++) {
        console.log('Iteration: ', index);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    console.log('Human Score ', humanScore);
    console.log('Computer Score ', computerScore);
}

play(5);