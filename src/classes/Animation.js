class Animation {
	constructor(frames) {
		this.frames = frames
		this.duration = this.frames.reduce((a, b) => a + b.duration, 0)
	}

	getTile() {
		let time = Math.floor(glob.time % this.duration)
		for(let frame = 0 ; frame < this.frames.length ; frame++) {
			if(time < this.frames[frame].duration)
				return glob.tiles[this.frames[frame].tileid]
			else
				time -= this.frames[frame].duration
		}
	}
}