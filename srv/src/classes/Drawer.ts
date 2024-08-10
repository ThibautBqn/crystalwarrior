import { IDrawable } from "../interfaces";
import { Cursor } from "./Cursor";

class Drawer {
    background: any;
    playerUI: any;
    layers: any;
    canvas: HTMLCollection;
    view: any;
    drawableCollection: Array<IDrawable>;
    cursor: Cursor;

    constructor() {
        console.log("Drawer.ts - constructor");
    }

    async init(gameData) {
        this.layers = gameData.data.layers;
        this.canvas = document.getElementsByTagName("canvas");
        console.log(this.canvas);
    }

    async doWhatYouWereCreatedToDo(tiles) {
        this.layers.forEach((item, index) => {
            var canvas = this.canvas[item.name] as HTMLCanvasElement;
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
            }
            ctx.imageSmoothingEnabled = false;
            ctx.clearRect(0, 0, 576, 576);
            for(let y = 0 ; y < item.height ; y++) {
                for(let x = 0 ; x < item.width ; x++) {
                    if (index == this.layers.length - 1 && y == item.height - 1 && x == item.width - 1 && !item.matrice[y][x])
                        return;
                    if (!item.matrice[y][x])
                        continue;
                    tiles[item.matrice[y][x] - 1].draw(ctx, {x,y});
                    if (index == this.layers.length - 1 && y == item.height - 1 && x == item.width - 1)
                        return;
                }
            }
        })
        let c = this.canvas['ui-layer'] as HTMLCanvasElement;
        let context = undefined;
        if (c.getContext) {
            context = c.getContext('2d');
        }
        if (!context) { return };
        context.imageSmoothingEnabled = false;
        context.clearRect(0, 0, 576, 576);
        this.cursor.draw(context, {x:0, y:0});
        // this.drawableCollection.forEach(element => {
        //     const canvas = this.canvas[0] as HTMLCanvasElement;

        //     element.draw(canvas.getContext('2d'));
        // })
    }
}

export { Drawer };