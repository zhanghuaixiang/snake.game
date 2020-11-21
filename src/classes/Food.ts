import {Square} from './Square'

// 食物
export class Food extends Square {
    private static color = "green"
    constructor(){
        super([Math.ceil(Math.random()*59), Math.ceil(Math.random()*59)], Food.color);
    }
}