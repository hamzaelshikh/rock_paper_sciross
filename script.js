
console.log("hello world");
// create variables to store the wins and loses and draws//
let computerWins =0
let userWins =0
let draws =0
let userAnswer =""
//create a variable to make and store the computes choice//
let b = ["rock", "paper", "scissors"]
comAnswer= ""
function computerAnswer(){
     comAnswer = b[Math.floor(Math.random()* b.length )]
}
//take the user answer and store it in a new variable //
function humanAnswer(){
userAnswer =prompt("rock , paper , scissors")
console.log(userAnswer)

if (userAnswer == 'rock' || 'paper'||'scissors'){
    return (userAnswer)
} else{
    alert('answer not valid')
    humanAnswer()
}
}
//a function that resets the game//
function reset(){
    userWins =0
    computerWins =0
    draws =0
    comAnswer="" 
}
//compare the user answer to that of the computer and determine who won  //
function compare (){
    computerAnswer()
    //humanAnswer()

    if (userAnswer == "rock" && comAnswer == "rock"){
        draws +=1
    } else if (userAnswer == "rock" && comAnswer == "paper"){
        computerWins +=1
    }else if (userAnswer == "rock" && comAnswer == "scissors"){
        userWins += 1
    }else if (userAnswer == "paper" && comAnswer == "rock"){
        userWins +1
    }else if (userAnswer == "paper" && comAnswer == "paper"){
        draws +=1
    }else if (userAnswer == "paper" && comAnswer == "scissors"){
        computerWins += 1
    }else if (userAnswer == "scissors" && comAnswer == "paper"){
        userWins+=1
    }else if (userAnswer == "scissors" && comAnswer == "rock"){
        computerWins
    }else if (userAnswer == "scissors" && comAnswer == "scissors"){
        draws+=1
    }
   
    if (userWins == 5){
        document.getElementById("finale").innerHTML="you won"
        reset()
}
    else if (computerWins == 5){
        document.getElementById("finale").innerHTML="you lost" 
        reset()
}
document.getElementById("result").innerHTML="wins ="+userWins.toString()+" loses ="+computerWins.toString()+" draws ="+draws.toString() ;
}

//repeat five times and and determine the winner //
function theGame (userAnswer ,){
/*    compare()
    compare()
    compare()
    compare()
    compare()*/ 
    if (userWins == 5){
        alert('you won')
        reset(userWins ,computerWins ,draws)
}
    else if (computerWins == 5){
        alert(" you lost")
        reset(userWins ,computerWins ,draws)
}
}
