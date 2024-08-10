class Animation {
    frames: Array<any>;
    duration: number;
    tileId: number;
    tiles: any = [];

    constructor(frames, tiles) {
		this.frames = frames;
        this.tileId = this.frames[0].tileid;
		this.duration = this.frames.reduce((a, b) => a + b.duration, 0);
        this.frames.forEach(elem => {
            this.tiles[elem.tileid] = tiles[elem.tileid]
        })
        // this.changeTileId();
	}

    // changeTileId() {
    //     let index = this.frames.findIndex(elem => {elem.tileid === this.tileId});
    //     setTimeout(() => {
    //         index = this.frames.length < index ? index : 0;
    //         this.tileId = this.frames[index].tileid;
    //         this.changeTileId()
    //     }, this.frames[index].duration);
    // }

	async getTile() {
        // return this.tileId;
		let time = Math.floor(performance.now() % this.duration)
		for(let frame = 0 ; frame < this.frames.length ; frame++) {
			if(time < this.frames[frame].duration)
				return this.tiles[this.frames[frame].tileid]
			else
				time -= this.frames[frame].duration
		}
	}
}

export { Animation }