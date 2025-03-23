// Changing the Mode
let btn = document.querySelector("#mode-btn");
let b = document.querySelector("body");
let mode = "light";
let changeMode = () => {
    if(mode == "light"){
        mode = "dark";
        b.classList.remove("light");
        b.classList.add("dark");
        // b.style.backgroundColor = "grey";
    } else {
        mode = "light";
        // b.style.backgroundColor = "white";
        b.classList.remove("dark");
        b.classList.add("light");
    }
};
btn.addEventListener("click",changeMode);


// Game 
let user_score = 0;
let comp_score = 0;
let user_win ;
const choices = document.querySelectorAll(".choice");
const user_sc = document.querySelector("#user-sc");
const comp_sc = document.querySelector("#comp-sc");
const msg = document.querySelector("#msg");
const restart = document.querySelector("#restart button");
const winner = document.querySelector("#winner p");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
});
generateChoice = ()=>{
    let option = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3);
    return option[idx];
}
draw = (userchoice,compchoice)=>{
    msg.innerText = `Your ${userchoice} and Computer ${compchoice} makes a DRAW`;
    msg.style.color = "yellow";
    msg.style.backgroundColor = "green";
}
showWinner = (user_win,userchoice,compchoice)=>{
    if(user_win){
        user_score++;
        user_sc.innerText = user_score;
        msg.innerText = `Your ${userchoice} beats Computer's ${compchoice}.YOU WIN`;
        msg.style.backgroundColor = "green";
    } else {
        comp_score++;
        comp_sc.innerText = comp_score;
        msg.innerText = `Computer's ${compchoice} beats Your ${userchoice}.COMPUTER WIN`;
        msg.style.backgroundColor = "red";
    }
    msg.style.color = 'whitesmoke';
}
showUltimateWinner = (user_score,comp_score) =>{
    if(user_score==5){
        winner.innerText = `WINNER : You`
        winner.style.color = "green";
    } else {
        winner.innerText = `WINNER : Computer ! Hard Luck Try Again...`
        winner.style.color = "red";
    }
}
playGame = (userchoice)=>{
    let compchoice = generateChoice();
    if(userchoice===compchoice) {
        draw(userchoice,compchoice);
        return;
    }
    else if(userchoice==="rock") {
        user_win = (compchoice==="paper")?false:true;
    }
    else if(userchoice==="paper") {
        user_win = (compchoice==="scissors")?false:true;
    }
    else if(userchoice==="scissors") {
        user_win = (compchoice==="rock")?false:true;
    }
    showWinner(user_win,userchoice,compchoice);
    if(user_score==5 || comp_score==5){
        restart.classList.remove("not-visible");
        restart.classList.add("visible");
        showUltimateWinner(user_score,comp_score);
    }
}
const resetgame = ()=>{
        user_score = 0;
        comp_score = 0;
        msg.innerText = "Play Your Move!!";
        winner.innerText = "";
        user_sc.innerText = user_score;
        comp_sc.innerText = comp_score;
};
restart.addEventListener("click",resetgame);