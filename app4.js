//JAVASCRIPT MINI PROJECT SIMON SAYS GAME

//2 arrays
let gameSeq = [];
let userSeq = [];

let btns = ["pink", "orange", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

//first step : KEYPRESS GAME STARTED
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;     //game start for only one time
        levelUp();
    }
});

//second step : BUTTON FLASH + LEVEL 1
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

 // RANDOM BUTTON CHOOSE
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}
// btnpress for checking ans
function checkAns(idx) {


    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(function () {
                levelUp();
            }, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
     },150)
        reset();
    }
   
}
//BUTTON PRESS FOR LOOP
function btnPress() {
 let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}



//for reseting
function reset(){
    started= false;
    gameSeq= [];
    userSeq=[];
    level = 0;
}
