// jshint esversion: 6
// Declare variables for DOM elements

let humanScore = 0;
let machineScore = 0;
const humanScorespan = document.getElementById("human-score");
const machineScorespan = document.getElementById("machine-score");
const resultp = document.querySelector(".result > p");
const rockdiv = document.getElementById("rock");
const paperdiv = document.getElementById("paper");
const scissorsdiv = document.getElementById("scissors");
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Function that checks choice
function getMachineChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// Function that increases human score by one
function win(humanChoice, machineChoice) {
    humanScore++;
    humanScorespan.innerHTML = humanScore;
    resultp.innerHTML = humanChoice + " defeats " + machineChoice + ". You won ";
}
// Function that increases machine score by one
function lose(humanChoice, machineChoice) {
    machineScore++;
    machineScorespan.innerHTML = machineScore;
    resultp.innerHTML = humanChoice + " defeats " + machineChoice + ". You lost ";
}
// Function that keep result Draw
function draw(humanChoice, machineChoice) {
    resultp.innerHTML = humanChoice + " equals " + machineChoice + ". Keep it draw ";
}
// Function that resets the score of human and machine to zero
function resetScores() {
    document.getElementById('human-score').innerText = 0;
    document.getElementById('machine-score').innerText = 0;
    humanScore = 0;
    machineScore = 0;
}

/* Function that show in what case will player win, lose or draw 
code credit from freeCodeCamp technical courses channel 
*/
function game(humanChoice) {
    let machineChoice = getMachineChoice();
    switch (humanChoice + machineChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(humanChoice, machineChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(humanChoice, machineChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(humanChoice, machineChoice);
            break;
    }
}

// Event listeners to open and close modal
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
// Add event listener for control buttons
function main() {
    rockdiv.addEventListener('click', function () {
        game("rock");
    });

    paperdiv.addEventListener('click', function () {
        game("paper");
    });

    scissorsdiv.addEventListener('click', function () {
        game("scissors");
    });
}

main();