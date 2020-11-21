export default class Pool {
    private poolElem:HTMLElement = document.querySelector("#view-content");
    public appendSquares(child:HTMLElement) {
        this.poolElem.appendChild(child);
    }
    ifOutside (pos:Array<number>):Boolean {
        let flag = false;
        const x = pos[0];
        const y = pos[1];
        if(x<0 || x>=600 || y<0 || y>=600) {
            flag = true;
        }
        return flag;
    }
}