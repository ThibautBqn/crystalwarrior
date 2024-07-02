class Tile extends Drawable() {
    constructor(id, img) {
      super()
      this.id = id
      this.img = img
      this.filePosition = {x: (this.id % data.tilesets[0].columns), y: Math.floor(this.id / data.tilesets[0].columns)}
      this.animation = null
    }

    draw(ctx, position) {
    	let filePosition = {x:this.filePosition.x, y:this.filePosition.y}
    	if (glob.tiles[this.id].animation && glob.tiles[this.id].animation.getTile()) {
        	filePosition = {
        		x: glob.tiles[this.id].animation.getTile().filePosition.x,
        		y: glob.tiles[this.id].animation.getTile().filePosition.y,
        	}
      	}
      	ctx.drawImage(this.img, filePosition.x*data.tilewidth, filePosition.y*data.tileheight, data.tilewidth, data.tileheight, (position.x - glob.background.position.x)*glob.size, (position.y - glob.background.position.y)*glob.size, glob.size, glob.size)
    }
}