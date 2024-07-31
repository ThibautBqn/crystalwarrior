console.log("refactorization to module import");

console.log("trying import of testor module");

import { Testor } from "./testor";
import { Glob } from "./global";
import { GameData } from "./gameData";

enum Phase {
    fight = "fight",
    tactical = "tactical"
}
interface Global {
    time: Date,
    fps: number,
    secondsPassed: number,
    phase: Phase,
    cursor: Cursor
    charactersPosition: Character[],
    background: Background
}
interface Position {
    x: number,
    y: number
}
interface Cursor {
    position: Position,
    selected: Character
}
interface Character {
    position: Position
}
interface Background {
    position: Position
}

const global = new Glob();
global.init();

const glob: Global = {
    time: new Date,
    fps: 0,
    secondsPassed: 0,
    phase: Phase.tactical,
    cursor: {
        position: {
            x: 0,
            y:0
        },
        selected: undefined
    },
    charactersPosition: [],
    background: {
        position: {
            x: 0,
            y:0
        }
    }
};
let gameData: GameData;

function main(now) {
    glob.time = now;
    glob.fps++;
    if (glob.fps == 60) {
        glob.secondsPassed++
        if (glob.secondsPassed % 5 === 0) {
            console.log("Ho yeah !");
        }
        glob.fps = 0;
    }
    if (glob.phase == 'fight') {
        return window.requestAnimationFrame(main);
    }
    if (glob.phase == 'tactical') {
        return window.requestAnimationFrame(main);
    }
    window.requestAnimationFrame(main);
}

async function init() {
    gameData = new GameData(global.round);
    await gameData.init();
    console.log('gameData : ', gameData);
    console.log('gameData.mapHeight: ', gameData.mapHeight);
    await gameData.setRound(5);
    console.log('gameData : ', gameData);
    console.log('gameData.mapHeight: ', gameData.mapHeight);
    console.log('Game initialysing...')
    // await initTiles()
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

console.log(Testor);