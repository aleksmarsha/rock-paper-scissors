function getComputerChoice() {
    let artificialChoice = Math.floor(Math.random() * 3);
    if (artificialChoice===0) {
        return `rock`;
    } else if (artificialChoice===1) {
        return `paper`;
    } else {
        return `scissors`;
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {    
        let allScore = playRound(x);
        if (allScore.includes(`win`)) {
            playerScore += 1;
            alert(allScore + `\nYour score: ${playerScore} Computer score: ${computerScore}`);
        } else if (allScore.includes(`lose`)) {
            computerScore += 1;
            alert(allScore + `\nYour score: ${playerScore} Computer score: ${computerScore}`);
        } else {
            alert(allScore + `\nYour score: ${playerScore} Computer score: ${computerScore}`);
        }
    }

    if (playerScore > computerScore) {
        alert(`Congratulations! You win the game! Reload this page and try again`);
    } else if (playerScore < computerScore) {
        alert(`You lose the game! Don't Worry! Reload this page and try again`);
    } else {
        alert(`It's a tie! You can win the game! Reload this page and try again`);
    }
}

const firstScore = 0;
const secondScore = 0;
document.getElementById('playerScore').textContent = firstScore;
document.getElementById('aiScore').textContent = secondScore;


