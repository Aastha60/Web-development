let userScore=0;
let compScore=0;

const game=document.querySelectorAll(".box");
const msg=document.querySelector(".result");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp")
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>
    {
       
        msg.innerText="Game was Draw. Play again!";
        msg.style.backgroundColor="#081b31";
    }

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}    

const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice)

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

game.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userChoice=box.getAttribute("id");
        playGame(userChoice);
    })
})