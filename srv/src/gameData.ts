interface GameDataType {
    height: number,
    width: number,
    characters: [[number]]
}

class GameData {
    private round: number;
    
    public data: GameDataType;

    constructor(round: number) {
        this.round = round;
    }

    async init() {
        const response = await fetch(`http://localhost:3000/getmaps/${this.round}`);
        const buffer = await response.body.getReader().read();
        this.data = await JSON.parse(new TextDecoder().decode(buffer.value));
    }

    async setRound(round) {
        this.round = round;
        await this.reload();
    }

    private async reload() {
        await this.init();
    }

    get mapHeight(): number {
        return this.data.height
    }

    get mapWidth(): number {
        return this.data.width
    }

    get characters(): [[number]] {
        return this.data.characters
    }
}

export { GameData };