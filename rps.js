function rpsFight(choice, choice2){
    if (choice === choice2) {
        return 'tie';
    }
    if (choice === 'rock' && choice2 === 'scissors') {
        return "player 1 wins";
    }
    if (choice === 'scissors' && choice2 === 'paper') {
        return "player 1 wins";
    }
    if (choice === 'paper' && choice2 === 'rock') {
        return "player 1 wins";
    }
    else  {
        return "player 2 wins"
    }
} 