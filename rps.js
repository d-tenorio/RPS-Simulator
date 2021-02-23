function rps(choice, choice2) {
    if (choice === choice2) {
        return 'tie';
    }

    if (choice === 'rock' && choice2 === 'scissors') {
        return "You win!";
    }
    if (choice === 'scissors' && choice2 === 'paper') {
        return "You win!";
    }
    if (choice === 'paper' && choice2 === 'rock') {
        return "You win!";
    }

    else {
        return "The Computer wins :(";
    }
}

// Events and Event Listeners
/*
Events: any interaction the user has with a page
click, hover, scrolling onto a particular section,
doubleclicking
*/

// when I click on a button, log the value of that button to
// the console "Rock", "Paper", "scissors"

function logValue(event) {
    console.log(event.target.value);
}

function playGame(event) {
    // the user is Player 1, the computer is Player 2

    // save the user's choice from the button 
    // that was clicked on
    let userChoice = event.target.value;
    // what the computer can choose from
    let options = ["rock", "paper", "scissors"];
    // get a random index
    /*
    Math.random => random number between 0 and 1
    0.212382193782197932, 0.68901481024821801
    Multiply by the length of the array
    0.63783728427, 1.987943279432893489
    Math.floor => Round down
    0, 1
    */
    let randomIndex = Math.floor(Math.random() * options.length);

    // for the computer, make a random choice
    let computerChoice = options[randomIndex];

    // we have both choices, so play the game
    let winner = rps(userChoice, computerChoice);

    // build up a string 
    let userChoiceText = `The user chose ${userChoice}\n`;
    let compChoiceText = `The computer chose ${computerChoice}\n`;
    // concatenation 
    let finalText = userChoiceText + compChoiceText + winner;

    let winnerLocation = document.querySelector(".text");
    winnerLocation.innerText = finalText;
}

// get a list of all of the buttons from the DOM
let buttons = document.getElementsByClassName("button");
let buttons2 = document.querySelectorAll(".button");
// add an event listener to each button
for (let i = 0; i < buttons.length; i++) {
    // get an individual button in the list
    let button = buttons[i];
    // console.log(button)
    button.onclick = playGame;

}



