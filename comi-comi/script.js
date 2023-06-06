const playBoard = document.querySelector(".play-board");

let foodX, foodY ;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(math.random() * 30) + 1;
    foodY = Math.floor(math.random() * 30) + 1;
}
const changeDirection = (e) => {
    if (e.key === "ArrowUp") {
        velocityY = 0;
        velocityX = -1;
    } else if (e.key === "ArrowUp") {
        velocityY = 0;
        velocityX = 1;
    } else if (e.key === "ArrowLeft") {
        velocityY = -1;
        velocityX = 0;
    } else if (e.key === "ArrowRight") {
        velocityY = 1;
        velocityX = 0;
    }
}


const initGame= () => {
    let htmlMarkup = '<div class="food" style="grid-area: ${foodY} / ${foodX}"></div> ';
    if(snakeX)
    
    snakeX += velocityX ;
    snakeX += velocityX ;

    htmlMarkup += '<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div> ';
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setInterval(initGame, 125);
document,addEventListener("keydown", changeDirection)