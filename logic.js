
//Total Score:
const totalScore = { 'playerScore': 0, 'computerScore': 0 };

//Computer Choice:
function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];

    let random = Math.floor(Math.random() * 3);
    // console.log(choice[random]);
    return choice[random];
};
// getComputerChoice();

//Result?:
function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice == computerChoice) {
        score = 0;
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1;
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1;
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1;
    }
    else {
        score = -1;
    };

    return score;
};
// getResult();


//Setting the score:
function showResult(score, playerChoice, computerChoice, playerSum, compSum) {
    let playerScore = document.getElementById('player_score');
    let msg = document.getElementById('msg');
    let result = document.getElementById('result');
    let totScr = document.getElementById('total_score');

    if (score == -1) {
        result.innerText = 'Try Again';
        // totScr.innerText = playerSum;
    }
    else if (score == 0) {
        result.innerText = "It's a Tie"
        // totScr.innerText = playerSum;
    }
    else {
        result.innerText = "You Won!!!";
        // totScr.innerText = playerSum;
    }

    msg.innerText = `👨 ${playerChoice} vs  🤖 ${computerChoice}`

    totScr.innerText = `Your Score: ${playerSum} vs Robot Score: ${compSum}`;
}


//Clicking on Btn function:
function onClickBtn(playerChoice) {
    // console.log({ playerChoice });
    let compChoice = getComputerChoice();
    // console.log({ compChoice });

    let score = getResult(playerChoice, compChoice);
    // console.log({ score });
    totalScore.playerScore += score;

    if (score == -1) {
        totalScore.computerScore++;
    }
    else if (score == 1) {
        totalScore.computerScore--;
    }

    showResult(score, playerChoice, compChoice, totalScore.playerScore, totalScore.computerScore);
}

//Adding listners:
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', () => onClickBtn(btn.value)));

const endGameBtn = document.getElementById('end_game').addEventListener('click', () => endGame(totalScore));

//End Btn:
function endGame(totalScore) {
    totalScore.playerScore = 0;
    totalScore.computerScore = 0;

    document.getElementById('player_score').innerText = '';
    document.getElementById('msg').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('total_score').innerText = '';
}