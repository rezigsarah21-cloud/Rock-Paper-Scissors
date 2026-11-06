const choices = ["rock","paper","scissors"];
const playerresult = document.getElementById("playerresult");
const computerresult = document.getElementById("computerresult");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore=0;
let computerscore=0;

function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerchoice === computerchoice){
        result ="IT'S A TIE";
    }else{
        switch(playerchoice){
            case 'rock':
                result= (computerchoice=== "paper")? "YOU LOSE" :"YOU WIN";
                break;
            case 'paper':
                result= (computerchoice=== "scissors")? "YOU LOSE" :"YOU WIN";
                break;
            case 'scissors':
                result= (computerchoice=== "paper")? "YOU WIN" :"YOU LOSE";
                break;
        }
    }
    playerresult.textContent= `Player:${playerchoice}`;
    computerresult.textContent= `Computer:${computerchoice}`;
    resultdisplay.textContent= result;

    resultdisplay.classList.remove("greentext","redtext");

    switch(result){
        case "YOU WIN":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "YOU LOSE":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent=computerscore;
            break;
    }

}