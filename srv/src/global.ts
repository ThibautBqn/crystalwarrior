import { Animation, Cursor, Drawer, Tile } from "./classes";
import { GameData } from "./gameData";
import { Phase } from "./interfaces";

class Global {
    time: Date;
    fps = 0;
    secondsPassed = 0;
    round = 1;
    tiles: Array<Tile> = [];
    drawer = new Drawer();
    gameData = new GameData();
    phase: Phase;

    constructor() {
        console.log('hum', this)
    }

    async init() {
        console.log(`Global - init() : called`)
        await this.gameData.init();
        await this.drawer.init(this.gameData)
        await this.initTiles();
        await this.initAnimation();
        this.drawer.cursor = new Cursor(this.gameData.mapHeight, this.gameData.mapWidth);
    }

    async initTiles() {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => {
                console.log(`initTiles() - img.onload() callback - gameData.tileset.tilecount: ${this.gameData.tileset.tilecount} - this.gameData.tileset.columns: ${this.gameData.tileset.columns}`);
                for (let y = 0 ; y < (this.gameData.tileset.tilecount / this.gameData.tileset.columns) ; y++) {
                    for (let x = 0 ; x < this.gameData.tileset.columns ; x++) {
                        const tileId = x + y * this.gameData.tileset.columns;
                        const frames = this.gameData.data.tileset.tiles.filter(item => item.id === tileId)[0]?.animation || [];
                        this.tiles[tileId] = new Tile(tileId, img, this.gameData.tileset.columns, frames);
                        if (y == (this.gameData.tileset.tilecount / this.gameData.tileset.columns) - 1 && x == this.gameData.tileset.columns - 1)
                            resolve(true);
                    }
                }
            }
            img.src = 'img/worldTiles.png';  
        })
    }

    async initAnimation() {
        this.tiles
        .filter(tile => tile.frames.length)
        .forEach(tile => tile.animation = new Animation(tile.frames, this.tiles));
    }

    async draw() {
        this.drawer.doWhatYouWereCreatedToDo(this.tiles)
    }
}

export {
    Global
}