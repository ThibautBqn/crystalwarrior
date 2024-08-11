import { GameData } from "../gameData";
import { IDrawable, Position } from "../interfaces";
import { Cursor } from "./Cursor";
import { Tile } from "./Tile";

class Drawer {
    mapHeight: number;
    mapWidth: number;
    viewHeight = 9;
    viewWidth = 9;
    background: any;
    playerUI: any;
    layers: any;
    canvas: HTMLCollection;
    viewOrigin: Position = { x: 0, y: 0 };
    drawableCollection: Array<IDrawable>;
    cursor: Cursor;
    tiles: Array<Tile>;
    origin: Position = { x: 0, y: 0 };

    constructor() {
        console.log("Drawer.ts - constructor");
    }

    async init(gameData: GameData, tiles: Array<Tile>) {
        this.mapHeight = gameData.data.height;
        this.mapWidth = gameData.data.width;
        this.layers = gameData.data.layers;
        this.canvas = document.getElementsByTagName("canvas");
        this.tiles = tiles;
        console.log(this.canvas);
    }

    async doWhatYouWereCreatedToDo() {
        await this.defineOrigin();
        await this.drawLayers();
        await this.drawCursor();
        
        // this.drawableCollection.forEach(element => {
        //     const canvas = this.canvas[0] as HTMLCanvasElement;

        //     element.draw(canvas.getContext('2d'));
        // })
    }

    async defineOrigin() {
        const position: Position = {...this.cursor.position};
        const xMiddle = Math.floor(this.viewWidth / 2);
        const yMiddle = Math.floor(this.viewHeight / 2);
        this.origin.x = this.cursor.position.x - xMiddle;
        this.origin.y = this.cursor.position.y - yMiddle;
        if (this.origin.x < 0) { this.origin.x = 0 }
        if (this.origin.y < 0) { this.origin.y = 0 }
        if (this.origin.x > this.mapWidth - this.viewWidth) { this.origin.x = this.mapWidth - this.viewWidth }
        if (this.origin.y > this.mapHeight - this.viewHeight) { this.origin.y = this.mapHeight - this.viewHeight }
    }

    async drawLayers() {
        this.layers.forEach((item, index) => {
            const tmpLayer = item.matrice.map(
                y => y.filter(
                    (value, x) => x >= this.origin.x && x < this.origin.x + this.viewWidth
                )
            )
            .filter((value, y) => y >= this.origin.y && y < this.origin.y + this.viewHeight);
            var canvas = this.canvas[item.name] as HTMLCanvasElement;
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
            }
            ctx.imageSmoothingEnabled = false;
            ctx.clearRect(0, 0, 576, 576);
            for(let y = 0 ; y < tmpLayer.length ; y++) {
                for(let x = 0 ; x < tmpLayer[y].length ; x++) {
                    if (!tmpLayer[y][x])
                        continue;
                    this.tiles[tmpLayer[y][x] - 1].draw(ctx, {x,y});
                }
            }
        })
    }

    async drawCursor() {
        const position: Position = {...this.cursor.position};
        const xMiddle = Math.floor(this.viewWidth / 2);
        const yMiddle = Math.floor(this.viewHeight / 2);
        if (this.cursor.position.x > xMiddle) {
            position.x = xMiddle;
        }
        if (this.cursor.position.x >= this.mapWidth - xMiddle) {
            position.x = 2 * xMiddle + this.cursor.position.x - this.mapWidth + 1;
        }
        if (this.cursor.position.y > yMiddle) {
            position.y = yMiddle;
        }
        if (this.cursor.position.y >= this.mapHeight - yMiddle) {
            position.y = 2 * yMiddle + this.cursor.position.y - this.mapHeight + 1;
        }
        // if (this.cursor.position.y > yMiddle
        //     && this.cursor.position.y <= this.viewHeight - yMiddle) {
        //     position.y = yMiddle;
        // } else if (this.cursor.position.y >= this.viewHeight - yMiddle) {
        //     position.y = 2 * yMiddle + this.cursor.position.y - this.mapHeight;
        // }
        const canvas = this.canvas['ui-layer'] as HTMLCanvasElement;
        let context = undefined;
        if (canvas.getContext) {
            context = canvas.getContext('2d');
        }
        if (!context) { return };
        context.imageSmoothingEnabled = false;
        context.clearRect(0, 0, 576, 576);
        this.cursor.draw(context, position);
    }
}

export { Drawer };