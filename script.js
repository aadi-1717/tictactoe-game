let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset");

let msg = document.querySelector("#msg");

let container = document.querySelector(".msg-container");

let turnO = true;

let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turnO){
        box.innerText = "O";
        box.style.color = "red";
        turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }        

        box.disabled = true;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
})

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1VAL = boxes[pattern[0]].innerHTML;
        let pos2VAL = boxes[pattern[1]].innerHTML;
        let pos3VAL = boxes[pattern[2]].innerHTML;

        if(pos1VAL != "" && pos2VAL != "" && pos3VAL != ""){
            if(pos1VAL === pos2VAL && pos2VAL === pos3VAL){
                showWinner(pos1VAL);
                return true;
            }
        }
    }
}

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    container.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const gameDraw = () =>{
    msg.innerText = `Game was a Draw.`;
    container.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the Winner is ${winner}`;
    container.classList.remove("hide"); 
    disableBoxes();
}