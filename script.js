function getComputerChoice() {
    let artificialChoice = Math.floor(Math.random() * 3);
    if (artificialChoice===0) {
        return 'rock';
    } else if (artificialChoice===1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
	 document.getElementById('result').innerHTML = `It's a <b>TIE</b>! ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;
	 document.querySelector('b').style.color = '#7C98AB';
	 return 'tie';
    } else if ((playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='paper' && computerSelection==='rock') || (playerSelection==='scissors' && computerSelection==='paper')) {
     document.getElementById('result').innerHTML = `You <b>WIN</b> this round! ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;
	 document.querySelector('b').style.color = '#218B82';
         return 'win';
    } else {
     document.getElementById('result').innerHTML = `You <b>LOSE</b> this round! ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;
	 document.querySelector('b').style.color = '#C54B6C';
         return 'lose';
    }
}

function game(choose) {   
        let allScore = playRound(choose);
        if (allScore === 'win') {
            firstScore += 1;
            document.getElementById('playerScore').textContent = firstScore;
        } else if (allScore === 'lose') {
            secondScore += 1;
            document.getElementById('aiScore').textContent = secondScore;
        } else {
            
        }

   if(firstScore === 5 || secondScore === 5) {
    if (firstScore > secondScore) {
	 document.getElementById('first').style.color = '#218B82';
	 document.getElementById('result').innerHTML += '<p style="color:#218B82">YOU WIN THE GAME!</p>';

    } else if (firstScore < secondScore) {
	 document.getElementById('second').style.color = '#C54B6C';
	 document.getElementById('result').innerHTML += '<p style="color:#C54B6C">YOU LOSE THE GAME!</p>';
  } else {

    }
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
	 restart();
    } else if (firstScore !== 5 && secondScore !== 5) {
	 game(id);
    } else {
	 document.getElementById('result').textContent = "PLEASE PRESS RESTART!";
    }
    });
});

function restart() {
firstScore = 0;
secondScore = 0;

document.getElementById('playerScore').textContent = firstScore;
document.getElementById('aiScore').textContent = secondScore;
document.getElementById('result').textContent = '';
document.getElementById('first').style.color = '#342B4A';
document.getElementById('second').style.color = '#342B4A';
}