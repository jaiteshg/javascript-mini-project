let boxes = document.querySelectorAll(".box");
let button = document.querySelector("#reset-button");
let gameBtn = document.querySelector("#new-game")
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO = true; //playerX, playerO;

let winPatten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
    turnO = true;
    ableboxes();
    msgContainer.classList.add("hide");

}

const dsiableboxes = () =>{
    for (let box of boxes ){
        box.disabled = true;
    }
};

const ableboxes = () =>{
    for (let box of boxes ){
        box.disabled = false;
        box.innerText ="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{

        if (turnO){
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;   
        checkWinner();
    })
})

const showWinner= (winner) =>{
    msg.innerText = "congration , You won ";
    msgContainer.classList.remove("hide");
    dsiableboxes();
}

const checkWinner = () =>{
    for (patten of winPatten){
        let pos1val = boxes[patten[0]].innerText;
        let pos2val =boxes[patten[1]].innerText;
        let pos3val =boxes[patten[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    };

        
};

gameBtn.addEventListener("click", resetGame);
button.addEventListener("click", resetGame);
