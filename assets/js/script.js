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

// Functions that show result (You won, You lost, Keep it draw)
function getMachineChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(humanChoice, machineChoice) {
    humanScore++;
    humanScorespan.innerHTML = humanScore;
    machineScorespan.innerHTML = machineScore;
    resultp.innerHTML = humanChoice + " defeats " + machineChoice + ". You won ";
}

function lose(humanChoice, machineChoice) {
    machineScore++;
    humanScorespan.innerHTML = humanScore;
    machineScorespan.innerHTML = machineScore;
    resultp.innerHTML = humanChoice + " defeats " + machineChoice + ". You lost ";
}

function draw(humanChoice, machineChoice) {
    humanScorespan.innerHTML = humanScore;
    machineScorespan.innerHTML = machineScore;
    resultp.innerHTML = humanChoice + " equals " + machineChoice + ". Keep it draw ";
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

// Events
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
// event listener for control buttons
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