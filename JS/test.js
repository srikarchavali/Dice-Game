const button = document.getElementById("button");
const score = document.getElementById("value");
let player1 = 0;
let image = document.getElementById("image");
const retry = document.getElementById("retry");
let currentPlayer = 1;

if(currentPlayer==1){
    button.addEventListener("click", ()=> {
        button.textContent = "Roll"
        let thisRoll = Math.ceil((Math.random()*6));
        image.src = `./images/${thisRoll}.png`;
        player1 += thisRoll;
        score.textContent = player1; 
        if(player1 > 20){
            score.textContent = `You win, your score is ${player1}`;
            button.style.display = 'none';
            retry.style.display = "inherit"
            image.src = `./images/tryAgain.png`;
        }
        else{
            if(thisRoll==1){
                score.textContent = "you lost";
                button.style.display = 'none';
                retry.style.display = "inherit";
                image.src = `./images/tryAgain.png`;  
            }
        }
    });
    retry.addEventListener("click", () => {
        button.style.display = 'inherit';
        retry.style.display = "none";
        player1 = 0; 
    })
}
 