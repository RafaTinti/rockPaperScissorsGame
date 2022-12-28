let getComputerChoice = () => Math.floor(Math.random()*2); // gets a number between 0-2 0-rock, 1-scissor, 2-paper

game();


function game(){
    console.log("this will be a best of five games of Rock, Paper, Scissors");
    let playerScore=0, computerScore=0;
    for(let i=0; i<5; i++){
        result = playRound();
        if(result !== "Draw"){
            (result === "Won")? playerScore++ : computerScore++;
        }
        console.log(`Round ${i+1} player ${playerScore} wins and computer ${computerScore} wins`);
    }
    displayFinalResults(playerScore, computerScore);
}



function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(`You chose ${decodeChoice(playerChoice)} and your opponent chose ${decodeChoice(computerChoice)}`);
    let result = getResults(playerChoice, computerChoice);
    displayResult(result);
    return result;
}

function displayFinalResults(playerScore, computerScore){
    if (playerScore > computerScore){
        console.log("Congratulations you won!");
    }
    else if (playerScore == computerScore){
        console.log("It's a Draw!");
    }
    else{
        console.log("Sadly you lost");
    }
    console.log(`Final score\nplayer: ${playerScore} computer: ${computerScore}`);
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

function getPlayerChoice(){//returns a valid player choice as a integer
    let invalidChoice = true;
    let formatedChoice;
    while (invalidChoice){//runs the prompt until a valid choice is entered 
        let playerChoice = prompt("write your choice. \nrock, scissor or paper?");
        formatedChoice = playerChoice.toUpperCase();
        switch(formatedChoice){
            case "ROCK":
                invalidChoice = false;
                formatedChoice = 0;
                break;
            case "SCISSOR":
                invalidChoice = false;
                formatedChoice = 1;
                break;
            case "PAPER":
                invalidChoice = false;
                formatedChoice = 2;
                break;
            default:
                console.log("choice is invalid, please enter rock, scissor or paper. case does not matter");
        }
    }
    return formatedChoice;
}

function displayResult(result){
    if (result === "Draw"){
        console.log("It's a Draw");
    }
    else{
        console.log(`You ${result} this round`);
    }
}

function decodeChoice(op){
    return (op===0)? "Rock" : (op===1)? "Scissor" : "Paper";
}





// function getComputerChoice(){ //old version preferred to work with the numbers
//     let choice = Math.floor(Math.random()*2);// get a number between 0 and 2
//     switch(choice){
//         case 0:
//             return "Rock";
//         case 1:
//             return "Scissor";
//         case 2:
//             return "paper";
//         default:
//             console.log("this shouldn't have happend");
//     }
// }
