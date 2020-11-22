export default class Pool {
    private poolElem:HTMLElement = document.querySelector("#view-content");
    private overlayElem:HTMLElement = document.querySelector("#overlay");

    public appendSquares(child:HTMLElement) {
        this.poolElem.appendChild(child);
    }
    ifOutside (pos:Array<number>):Boolean {
        let flag = false;
        const x = pos[0];
        const y = pos[1];
        if(x<0 || x>=60 || y<0 || y>=60) {
            flag = true;
        }
        return flag;
    }
}