let btns = document.querySelectorAll("#box")
console.log(btns)
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let message = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container")
let turn0 = true;
let count = 0;
let newBtn = document.querySelector(".new-btn");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {


        if(turn0){

            btn.innerText = "0";
            turn0 = false
        }
        else{
            btn.innerText = "X";
            turn0 = true
        }
        count++;
        btn.disabled = true;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }

    })
})

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== ""){
        if(pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return true;
        }
        }
    }
}

const showWinner = (winner) => {
    msgContainer.classList.remove('hide')
    message.innerHTML = `Winner is ${winner}`;
    disableBoxes();
}

const disableBoxes = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
};
const enableBoxes = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
};
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add('hide');
    newBtn.style.display = "none";
}
const gameDraw = (winner) => {
    msgContainer.classList.remove('hide');
    message.innerHTML = `Game Drawn`;
    newBtn.style.display = "flex";
}
let resetBtn = document.querySelectorAll("#reset-btn")
resetBtn[1].addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
