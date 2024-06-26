console.log("hello world");
// create variables to store the wins and loses and draws//
let computerWins =0
let userWins =0
let draws =0
//create a variable to make and store the computes choice//

//compare the user answer to that of the computer and determine how won  //
function compare (userAnswer ,comAnswer){
//take the user answer and store it in a new variable //
    let userAnswer =prompt("rock , paper , scissors")
    if (userAnswer == "rock" && comAnswer == "rock"){
        draw +=1
    } else if (userAnswer == "rock" && comAnswer == "paper"){
        computerWins +=1
    }else if (userAnswer == "rock" && comAnswer == "scissors"){
        userWins += 1
    }else if (userAnswer == "paper" && comAnswer == "rock"){
        userWins +1
    }else if (userAnswer == "paper" && comAnswer == "paper"){
        draw +=1
    }else if (userAnswer == "paper" && comAnswer == "scissors"){
        computerWins += 1
    }else if (userAnswer == "scissors" && comAnswer == "paper"){
        userWins+=1
    }else if (userAnswer == "scissors" && comAnswer == "rock"){
        computerWins
    }else if (userAnswer == "scissors" && comAnswer == "scissors"){
        draws+=1
    }
    alert("wins ="+userWins.toString()+" loses ="+computerWins.toString+" draws ="+draws.toString)
}
//a function that resets the game//
function reset(userWins ,computerWins ,draws){
    userWins =0
    computerWins =0
    draws =0 
}
//repeat five times and and determine the winner //
function theGame (userAnswer ,comAnswer){
    compare(userAnswer,comAnswer)
    compare(userAnswer,comAnswer)
    compare(userAnswer,comAnswer)
    compare(userAnswer,comAnswer)
    compare(userAnswer,comAnswer)
    if (userWins > computerWins){
        alert('you won')
    }else if (computerWins > userWins){
        alert(" you lost")
    }else {
        alert("it is a draw ")
    }
}