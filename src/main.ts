import Snake from "./classes/Snake";
import { Food } from "./classes/Food";


let snake:Snake = new Snake([0, 0], "right");
let food:Food = new Food([Math.ceil(Math.random()*59), Math.ceil(Math.random()*59)]);
snake.setFood(food)

let intval = setInterval(function(){
    snake.move();
}, 500)

document.onkeydown = function(e){
    let codeMap = {
        "37": "left",
        "38": "up",
        "39": "right",
        "40": "down"
    }
    snake.setDirection(codeMap[e.keyCode])
}
window.onerror = function(message) :void{
    snake = null;
    clearInterval(intval)
}