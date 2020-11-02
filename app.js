let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randmNumber = Math.floor(Math.random() * 3);
    return choices[randmNumber];
}


function convertChoiceToWord(letter) {
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else {
        return "Scissors"
    }
}



function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertChoiceToWord(userChoice)} ${smallUserWord} beats ${convertChoiceToWord(computerChoice)} ${smallCompWord}. You win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("green-glow")
    }, 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertChoiceToWord(userChoice)} ${smallUserWord} loses to  ${convertChoiceToWord(computerChoice)} ${smallCompWord}. You lost!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("red-glow")
    }, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertChoiceToWord(userChoice)} ${smallUserWord} equals ${convertChoiceToWord(computerChoice)} ${smallCompWord}. It's a draw!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("gray-glow")
    }, 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;    
        default:
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game("r");
    })
    
    paper_div.addEventListener('click', () => {
        game("p");
    })
    
    scissors_div.addEventListener('click', () => {
        game("s");
    })
}


main();