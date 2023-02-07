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
    while(firstScore <= 5 && secondScore <= 5) {    
        let allScore = playRound(x);
        if (allScore.includes(`win`)) {
            firstScore += 1;
            alert(allScore + `\nYour score: ${playerScore} Computer score: ${computerScore}`);
        } else if (allScore.includes(`lose`)) {
            secondScore += 1;
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

let firstScore = 0;
let secondScore = 0;

document.getElementById('playerScore').textContent = firstScore;
document.getElementById('aiScore').textContent = secondScore;

let button = document.querySelectorAll('button');
button.forEach(btn => {
    let id = btn.getAttribute('id');
btn.addEventListener('click', () => {
    if (id === 'restart') {

    } else {
        
    }
    });
});

