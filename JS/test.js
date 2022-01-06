const button = document.getElementById("button");
const score = document.getElementById("value");
let player1 = 0;
const image = document.getElementById("image")
let currentPlayer = 1;
button.textContent = "Roll"; 

if(currentPlayer==1){
    button.addEventListener("click", ()=> {
        let thisRoll = Math.ceil((Math.random()*6));
        image.src = "./images/${thisRoll}.png"
        player1 += thisRoll;
        score.textContent = player1; 
        if(player1 > 20){
            score.textContent = `You win, your score is ${player1}`;
            button.textContent = "Play again?"; 
            button.textContent = "Roll"; 
        }
        else{
            if(thisRoll==1){
                score.textContent = "you lost";
                player1 = 0;
                button.textContent = "Play again?"; 
                button.textContent = "Roll"; 
            }

        }
    })
}
 