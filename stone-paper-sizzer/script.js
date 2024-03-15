let userscore = 0;
let compscore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock" , "paper" ,"scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innertext ="Game was draw , paly again";
};

const showWinner = (userWin) => {
    if(userWin){
        console.log("you Win !!");
        msg.innertext = "you win";
    } else{
        console.log("you lose");
        msg.innertext = "you lose";
    };
};

const playGame = (userChoice) => {
    console.log("user choice =  " , userChoice);
    //genarate computer choice
    const compChoice = genComChoice();
    console.log("Comp choice =  " , compChoice);
}
 
choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked ", choiceId);
    });
});