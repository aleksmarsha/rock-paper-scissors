function getComputerChoice() {
    let artificialChoice = Math.floor(Math.random() * 3);
    if (artificialChoice===0) {
        return `Rock`;
    } else if (artificialChoice===1) {
        return `Paper`;
    } else {
        return `Scissors`;
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    } else if ((playerSelection===`Rock` && computerSelection===`Scissors`) || (playerSelection===`Paper` && computerSelection===`Rock`) || (playerSelection===`Scissors` && computerSelection===`Paper`)) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}