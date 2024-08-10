import { IDrawable, Position } from '../interfaces';


class Tile implements IDrawable {
    private height = 16;
    private width = 16;
    private size = 64;

    public id: number;
    public img: any;
    public filePosition: Position;
    public canvasPosition: Position;
    public animation: any = undefined;
    public frames: any;

    constructor(id, img, nbColumns, frames = undefined) {
        this.id = id
        this.img = img
        this.filePosition = {
            x: (this.id % nbColumns),
            y: Math.floor(this.id / nbColumns)
        }
        this.frames = frames;
    }

    async draw(ctx, position) {
    	let filePosition = {x:this.filePosition.x, y:this.filePosition.y}
        // console.log(this.animation);
    	if (this.animation) {
            const tile = await this.animation.getTile();
            // if(this.id === 225 || this.id === 226) {
            //     console.log(tile);
            // }
        	filePosition = {
        		x: tile.filePosition.x,
        		y: tile.filePosition.y,
        	}
      	}
      	ctx.drawImage(
            this.img,
            filePosition.x * this.width,
            filePosition.y * this.height,
            this.width,
            this.height,
            position.x * this.size,
            position.y * this.size,
            this.size,
            this.size
        )
    }
}

export { Tile }