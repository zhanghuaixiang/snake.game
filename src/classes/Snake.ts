import {Square} from './Square'
import {Food} from './Food'
import Pool from './Pool'
// 蛇
export default class Snake extends Pool{
    private direction: string = "right"
    private head:Square
    private tail:Square
    private body:Array<Square>
    private food:Food
    constructor(initPos:Array<number>, direction:string){
        super();
        this.direction = direction;
        this.tail = new Square([0, 0], "red");
        let cent = new Square([1, 0], "red");
        this.tail.prev = cent;
        this.head = new Square([2, 0], "white");
        cent.prev = this.head;
        cent.next = this.tail;
        this.head.next = cent;
        // 蛇身初始长度为3
        this.body = [this.tail, cent, this.head];
    }
    // 设置当前蛇的食物的位置，用于判断食物有没有被吃掉
    public setFood(food:Food) {
        this.food = food;
    }
    // 修改蛇的走向
    public setDirection(direction:string) {
        /**
         * 蛇身转向不能逆向转，即
         * 左项不能往右转
         * 右项不能往左转
         * 上向不能向下转
         * 下向不能向上转
         */
        const dict = {
            "left": "right",
            "right": "left",
            "up": "down",
            "down": "up"
        }
        if(this.direction == dict[direction]) {
            return;
        }
        // 如果转向与当前方向相同，则加速
        if(this.direction == direction) {
            this.move();
        }
        this.direction = direction;
    }
    /**
     * 重置链表的关系，
     * 尾部变头部，头部变老二，原尾部的prev变为新尾部
     */
    private modifyRelationship () {
        // 先将蛇头颜色置为和蛇身一样
        this.head.setColor("red");
        // 保存新蛇尾为老蛇尾的下个位置
        let newTail = this.tail.prev;
        // 将老蛇尾的下一个位置指向空，因为此时他已经变为新蛇头
        this.tail.prev = null;
        // 将新蛇尾的前一个位置置空
        newTail.next = null;
        // 将老蛇尾（即新蛇头）的前一个位置指向老蛇头
        this.tail.next = this.head;
        // 将老蛇头的下一个位置指向新蛇头（即老蛇头）
        this.head.prev = this.tail;
        this.head = this.tail;
        this.tail = newTail;
        // 将新蛇头置为白色
        this.head.setColor("white");
    }
    // 移动
    public move() {
        let headPos = this.head.getPosition();
        let newPos:Array<number>
        const newPosDict = {
            "left": [headPos[0]-1, headPos[1]],
            "right": [headPos[0]+1, headPos[1]],
            "up": [headPos[0], headPos[1]-1],
            "down": [headPos[0], headPos[1]+1]
        }
        newPos = newPosDict[this.direction];
        // 判断是否已出界或吃到了自己 
        if(this.ifOutside(newPos) || this.ifCoveredSelfBody(newPos)){
            this.die();
            return;
        }
        // 判断食物位置与蛇头下一个位置是否相同
        const foodPos = this.food.getPosition();
        if(foodPos[0] == newPos[0] && foodPos[1] == newPos[1]) {
            this.eat();
            return;
        }
        this.tail.setPosition(newPos);
        // 修改链表的关系
        this.modifyRelationship();
    }
    // 吃
    public eat () {
        // 将蛇头变为蛇身，改成蛇身的颜色
        this.head.setColor("red");
        // 将食物变为蛇头，改成蛇头的颜色
        this.food.setColor("white");
        // 老蛇头的前方指向食物
        this.head.prev = this.food;
        // 食物：即新蛇头的后方指向老蛇头
        this.food.next = this.head;
        // 将新蛇头指向食物
        this.head = this.food;
        // 将吃掉的食物算进身体内
        this.body.push(this.food);
        
        for (let index = 0; index>=0; index++) {
            let newPos = [Math.ceil(Math.random()*59), Math.ceil(Math.random()*59)];
            // 新食物的坐标没在蛇身上的时候，再产生新食物，否则重新生成食物坐标
            if(!this.ifCoveredSelfBody(newPos)){
                // 产生个新食物 
                this.food = new Food(newPos);
                break;
            }
        }
    }
    // 死
    public die () {
        alert("game over")
        window.onerror("game over");
    }
    // 新位置是否在蛇身上
    public ifCoveredSelfBody(pos:Array<number>):Boolean {
        let flag = false;
        for (let i = 0; i < this.body.length; i++) {
            const sqPos = this.body[i].getPosition();
            if(sqPos[0] == pos[0] && sqPos[1] == pos[1]){
                flag = true;
                break;
            }
        }
        return flag;
    }
}