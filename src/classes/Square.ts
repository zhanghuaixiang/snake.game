import Pool from './Pool'
// 格子
export class Square extends Pool{
    private width:number = 10
    private height:number = 10
    private x:number
    private y:number
    private color:string
    private dom:HTMLElement
    private pos:Array<number>
    public prev:Square
    public next:Square
    public constructor (pos:Array<number>, color:string) {
        super()
        this.pos = pos;
        this.x = this.pos[0]*this.width;
        this.y = this.pos[1]*this.height;
        this.color = color || "red";
        this.createElem();
    }
    // 创建dom
    public createElem () {
        this.dom = document.createElement("i");
        this.dom.setAttribute("style", `background-color:${this.color};border-radius:100%;position:absolute;`);
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.left = this.x + "px";
        this.dom.style.top = this.y + "px";
        this.appendSquares(this.dom);
    }
    // 获取生成的dom
    public getElem():HTMLElement{
        return this.dom;
    }

    // 获取位置，用来避免生成食物时，生成在蛇身上
    public getPosition():Array<number> {
        return this.pos;
    }

    // 设置格子的位置
    public setPosition(pos:Array<number>) {
        this.pos = pos;
        this.x = this.pos[0]*this.width;
        this.y = this.pos[1]*this.height;
        this.dom.style.left = this.x + "px";
        this.dom.style.top = this.y + "px";
    }

    // 重置格子的颜色
    public setColor(color:string) {
        this.dom.style.backgroundColor = color;
    }
}