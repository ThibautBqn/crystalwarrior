console.log("refactorization to module import");

console.log("trying import of testor module");

// import { Testor } from "./testor";
import { Global } from "./global";
// import { GameData } from "./gameData";
// import { Position } from "./interfaces";
// import { Tile } from "./classes";

// enum Phase {
//     fight = "fight",
//     tactical = "tactical"
// }
// interface Global {
//     time: Date,
//     fps: number,
//     secondsPassed: number,
//     phase: Phase,
//     cursor: Cursor
//     charactersPosition: Character[],
//     background: Background
// }
// interface Cursor {
//     position: Position,
//     selected: Character
// }
// interface Character {
//     position: Position
// }
// interface Background {
//     position: Position
// }

const global = new Global();

// const glob: Global = {
//     time: new Date,
//     fps: 0,
//     secondsPassed: 0,
//     phase: Phase.tactical,
//     cursor: {
//         position: {
//             x: 0,
//             y: 0
//         },
//         selected: undefined
//     },
//     charactersPosition: [],
//     background: {
//         position: {
//             x: 0,
//             y: 0
//         }
//     }
// };
// let gameData: GameData;

async function main(now: any) {
    global.time = now;
    global.fps++;
    if (global.fps == 60) {
        global.secondsPassed++
        if (global.secondsPassed % 5 === 0) {
            console.log("Ho yeah !");
        }
        global.fps = 0;
    }
    await global.draw();
    // if (global.phase == 'fight') {
    //     return window.requestAnimationFrame(main);
    // }
    // if (global.phase == 'tactical') {
    //     return window.requestAnimationFrame(main);
    // }
    return window.requestAnimationFrame(main);
}

// async function initTiles(gameData) {
//     return new Promise((resolve, reject) => {
//         let img = new Image();
//         img.onload = function() {
//             console.log(`initTiles() - img.onload() callback - gameData.tileset.tilecount: ${gameData.tileset.tilecount} - gameData.tileset.columns: ${gameData.tileset.columns}`);
//             for (let y = 0 ; y < (gameData.tileset.tilecount / gameData.tileset.columns) ; y++) {
//                 for (let x = 0 ; x < gameData.tileset.columns ; x++) {
//                     global.tiles[x + y*gameData.tileset.columns] = new Tile(x + y*gameData.tileset.columns, img, gameData.tileset.columns)
//                     if (y == (gameData.tileset.tilecount / gameData.tileset.columns) - 1 && x == gameData.tileset.columns - 1)
//                         resolve(true);
//                 }
//             }
//         }
//         img.src = 'img/worldTiles.png';  
//     })
// }

async function init() {
    await global.init();
    // gameData = new GameData(global.round);
    // await gameData.init();
    // console.log('gameData : ', gameData);
    // console.log('gameData.mapHeight: ', gameData.mapHeight);
    // console.log('Game initialysing...')
    // await initTiles(gameData);
    // console.log(global.tiles);
    // await setAnimatedTiles()
    // glob.background.limit = {x: data.width - 9, y: data.height - 9}
    // glob.setMainController()
    console.log('loading data')
    console.log('loading sprites')
    // await initCharacters()
    // await initCharactersSides()
    // glob.ia.initCharacters(glob.pcChar, glob.playerChar.sort((a,b) => {
    //   return a.id == b.id ? 0 : a.id < b.id ? -1 : 1
    // }))
    // console.log(glob.characters)
    console.log('loading keybinding')
    // keyBinding()
    console.log('Game loaded')
    // glob.phase = 'tactical'
    console.log('Game lunched')
    window.requestAnimationFrame(main)
  }

init();

// console.log(Testor);