function getComputerChoice() {
    let artificialChoice = Math.floor(Math.random() * 3);
    if (artificialChoice===0) {
        return "Rock";
    } else if (artificialChoice===1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}