
let resetBtn = document.querySelector(".dabba");
let button = document.querySelectorAll(".box");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

button.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableBoxes = ()=>{
    for(let box of button){
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(let box of button){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
     for (let pattern of winPatterns) {
        let pos1val = button[pattern[0]].innerText;
        let pos2val = button[pattern[1]].innerText;
        let pos3val = button[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner is", pos1val);
                showWinner(pos1val);
            }
        }
     }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


