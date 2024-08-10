import { IDrawable, Position } from "../interfaces";

class Cursor implements IDrawable {
    canvasPosition: any;
    position: Position;
    mapHeight: number;
    mapWidth: number;
    size = 64;
    ratio = 1;

    constructor(height, width) {
        this.mapHeight = height;
        this.mapWidth = width;
        this.position = {x: 0, y: 0};
        document.onkeydown = (e) => {
            
            console.log(e.code)
            // console.log(glob.cursor.decall)
            if (e.code === 'ArrowLeft' && this.position.x > 0) {this.position.x--}
            if (e.code === 'ArrowRight' && this.position.x < this.mapWidth) {this.position.x++}
            if (e.code === 'ArrowUp' && this.position.y > 0) {this.position.y--}
            if (e.code === 'ArrowDown' && this.position.y < this.mapHeight) {this.position.y++}
            console.log(this.position);
        }
    }
    async draw(ctx, position) {
        ctx.clearRect(0, 0, 576, 576)
        ctx.imageSmoothingEnabled = true;
        ctx.globalAlpha = 0.7
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.position.x*this.size + 38 * this.ratio, this.position.y*this.size + 2 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 62 * this.ratio, this.position.y*this.size + 2 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 62 * this.ratio, this.position.y*this.size + 25 * this.ratio);
        ctx.moveTo(this.position.x*this.size + 62 * this.ratio, this.position.y*this.size + 38 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 62 * this.ratio, this.position.y*this.size + 62 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 38 * this.ratio, this.position.y*this.size + 62 * this.ratio);
        ctx.moveTo(this.position.x*this.size + 25 * this.ratio, this.position.y*this.size + 62 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 2 * this.ratio, this.position.y*this.size + 62 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 2 * this.ratio, this.position.y*this.size + 38 * this.ratio);
        ctx.moveTo(this.position.x*this.size + 2 * this.ratio, this.position.y*this.size + 25 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 2 * this.ratio, this.position.y*this.size + 2 * this.ratio);
        ctx.lineTo(this.position.x*this.size + 25 * this.ratio, this.position.y*this.size + 2 * this.ratio);
        ctx.strokeStyle = 'rgb(255,255,255)';
        ctx.stroke();
    }
}

export { Cursor }