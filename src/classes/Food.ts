import {Square} from './Square'

// 食物
export class Food extends Square {
    private static color = "green"
    constructor(pos:Array<number>){
        super(pos, Food.color);
    }
}