let getComputerChoice = () => Math.floor(Math.random()*2); // gets a number between 0-2 0-rock, 1-scissor, 2-paper

function getResults(playerChoice, computerChoice){//ugly
    if(playerChoice === 0){
        if(computerChoice ===0){
            return "Draw";
        }
        else{
            if (computerChoice ===1){
                return "Wins";
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
                return "Wins";
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
        console.log(`You ${result}`);
    }
}

function decodeChoice(op){
    return (op===0)? "Rock" : (op===1)? "Scissor" : "Paper";
}

function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(`You chose ${decodeChoice(playerChoice)} and your opponent chose ${decodeChoice(computerChoice)}`);
    let result = getResults(playerChoice, computerChoice);
    displayResult(result);
}

playRound();

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
