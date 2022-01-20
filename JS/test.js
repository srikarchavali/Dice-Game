const button = document.getElementById("button");
const score = document.getElementById("value");
const button2 = document.getElementById("button2");
const score2 = document.getElementById("value2");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
image1.src = "../diceGame/images/1.png"
const retry = document.getElementById("retry");
const retry2 = document.getElementById("retry2");
const currPlayer = document.getElementById("currPlayer")
let player1 = 0;
let player2 = 0;
currentPlayer = 1;
// let currentPlayer = Math.ceil((Math.random()*2));

// if(currentPlayer==1){
    button.addEventListener("click", ()=> {
        button.textContent = "Roll"
        let thisRoll1 = Math.ceil((Math.random()*6));
        image1.src = `./images/${thisRoll1}.png`;
        player1 += thisRoll1;
        score.textContent = player1; 
        button.style.display = "none";
        button2.style.display = "inherit";
        currPlayer.textContent = "Player 2's turn"
        if(player1 > 20){
            score.textContent = `You win, your score is ${player1}`;
            button.style.display = 'none';
            retry.style.display = "inherit";
            score2.textContent = "Player 1 wins";
            button2.style.display = 'none';
            retry2.style.display = 'none';
            player1 = 0;
            player2 = 0;
        }
        else{
            if(thisRoll1==1){
                score.textContent = "you lost!!";
                score2.textContent = "You Win"
                button.style.display = 'none';
                button2.style.display = 'none';
                retry.style.display = "inherit";
                retry2.style.display = 'none';
                player1 = 0;
                player2 = 0;
            }
        }
    });


    retry.addEventListener("click", () => {
        button.style.display = 'inherit';
        retry.style.display = "none";
        player1 = 0; 
    })
// } 
// if(currentPlayer==2){
    button2.addEventListener("click", ()=> {
        button2.textContent = "Roll"
        let thisRoll2 = Math.ceil((Math.random()*6));
        image2.src = `./images/${thisRoll2}.png`;
        player2 += thisRoll2;
        score2.textContent = player2; 
        button2.style.display = "none";
        button.style.display = "inherit";
        currPlayer.textContent = "Player 1's turn"
        if(player2 > 20){
            score2.textContent = `You win, your score is ${player2}`;
            button2.style.display = 'none';
            retry2.style.display = "inherit";
            score.textContent = "Player 2 wins";
            button.style.display = 'none';
            retry.style.display = 'none';
            player1 = 0;
            player2 = 0;
        }
        else{
            if(thisRoll2==1){
                score2.textContent = "you lost!!";
                score.textContent = "You Win"
                button2.style.display = 'none';
                button.style.display = 'none';
                retry2.style.display = "inherit";
                retry.style.display = 'none';
                player1 = 0;
                player2 = 0;
            }
        }
    });

    retry2.addEventListener("click", () => {
        button2.style.display = 'inherit';
        retry2.style.display = "none";
        player2 = 0; 
    })
// }
 