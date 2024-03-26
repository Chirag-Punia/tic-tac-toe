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
let turn0 = true;

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
        btn.disabled = true;
        checkWinner();

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
    let msgContainer = document.querySelector(".hide");
    let message = document.querySelector(".msg");
    msgContainer.style.display = "flex";
    message.innerHTML = `Winner is ${winner}`;
}
