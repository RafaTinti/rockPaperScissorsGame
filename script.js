let getComputerChoice = () => Math.floor(Math.random()*3); // gets a number between 0-2 0-rock, 1-scissor, 2-paper

document.querySelector("#startBtn").addEventListener("click", game);
gameScore = [0,0]; // [player, cpu]
function game(){
    gameScore[0] = gameScore[1] = 0; //resets score
    updateScore(0,0);
    const choiceBar = document.querySelector(".choiceBar");
    choiceBar.addEventListener("click", playRound);
}

function playRound(e){
    if(!e.target.id) return; //leaves if you didnt click the buttons
    if(gameScore[0]>4||gameScore[1]>4) return; //stops the game once one player gets 5
    let playerChoice = codeChoice(e.target.id);
    let computerChoice = getComputerChoice();
    updateBoxes(playerChoice, computerChoice);
    let result = getResults(playerChoice, computerChoice);
    displayResult(result);
    if (result === "Won"){
        gameScore[0]++;
    }
    else if(result === "Lost"){
        gameScore[1]++;
    }
    updateScore(gameScore[0],gameScore[1]);
    if(gameScore[0]>4||gameScore[1]>4){
        alert(`End Game - you ${(gameScore[0]>gameScore[1])? "won" : "Lost"}`)
    }
}

function updateScore(playerScore, cpuScore){
    const scoreBoard = document.querySelector(".scoreBoard");
    scoreBoard.firstElementChild.textContent = `Player: ${playerScore}`;
    scoreBoard.lastElementChild.textContent = `CPU: ${cpuScore}`;
}

function updateBoxes (playerChoice, computerChoice){
    const pBox = document.querySelector(".player.choice");
    const cpuBox = document.querySelector(".cpu.choice");
    pBox.style.backgroundImage = `url(${chooseImg(decodeChoice(playerChoice))})`;
    cpuBox.style.backgroundImage = `url(${chooseImg(decodeChoice(computerChoice))})`;
}

function getResults(playerChoice, computerChoice){//ugly, compares player choice and computer choice to determine result
    if(playerChoice === 0){
        if(computerChoice ===0){
            return "Draw";
        }
        else{
            if (computerChoice ===1){
                return "Won";
            }
            else{
                return "Lost"
            }
        }
    }
    else if(playerChoice === 1){
        if(computerChoice ===1){
            return "Draw";
        }
        else{
            if (computerChoice ===2){
                return "Won";
            }
            else{
                return "Lost"
            }
        }
    }
    else{ // playerChoice is 2
        if(computerChoice ===2){
            return "Draw";
        }
        else{
            if (computerChoice ===0){
                return "Won";
            }
            else{
                return "Lost"
            }
        }
    }
}

function chooseImg(choice){
    if(choice === "Rock"){
        return "./imgs/rock.png";
    }
    else if(choice === "Scissor"){
        return "./imgs/scissor.png";
    }
    else{
        return "./imgs/paper.png";
    }
}

function displayResult(result){
    const div = document.querySelector(".results")
    if (result === "Draw"){
        div.firstElementChild.innerHTML = "It's a Draw"
    }
    else{
        div.firstElementChild.innerHTML = `You ${result} this round`
    }
}

function decodeChoice(op){
    return (op===0)? "Rock" : (op===1)? "Scissor" : "Paper";
}

function codeChoice (op){
    return (op === "rock")? 0 : (op === "scissor")? 1 : 2;
}