class Character extends Drawable(Movable) {
    constructor(id, position, test) {
		super()
		this.id = id
		this.position = position
		this.tileid = characters[id - 1].tileid
		this.mainTileId = characters[id - 1].tileid
		this.owner = characters[id - 1].owner
		this.type = characters[id - 1].type
		this.accessibleLocation = []
		this.mouvementLeft = 5
		this.mouvement = 5
		this.moved = false
		this.know = false
		this.initPosition = {x: this.position.x, y: this.position.y}
		for(let name in test) {
			if (this[name] === undefined) {
				this[name] = test[name]
			}
			console.log(name, this[name], test[name])
			// this[name] = this[name] === undefined ? test[name] : undefined
		}
    }

    setKnowledge(know) {
    	if(!know && !this.know) {
    		this.tileid = 1300
    		this.mainTileId = 1300
    	} else if (know) {
    		this.tileid = characters[this.id - 1].tileid
			  this.mainTileId = characters[this.id - 1].tileid
			  this.know = true
    	}
    }

    isSelected() {
    	this.setAccessibleLocation()
		this.tileid += 2
    }

    unselected() {
        this.savePosition()
        this.tileid = this.mainTileId
        this.moved = true
    }

    updateSides() {
        this.sides = {
            up: (this.position.y > 0 && glob.charactersPosition[this.position.y - 1][this.position.x] != this) ? glob.charactersPosition[this.position.y - 1][this.position.x] : null,
            down: (this.position.y < data.height - 1 && glob.charactersPosition[this.position.y + 1][this.position.x] != this) ? glob.charactersPosition[this.position.y + 1][this.position.x] : null,
            left: (this.position.x > 0 && glob.charactersPosition[this.position.y][this.position.x - 1] != this) ? glob.charactersPosition[this.position.y][this.position.x - 1] : null,
            right: (this.position.x < data.width - 1 && glob.charactersPosition[this.position.y][this.position.x + 1] != this) ? glob.charactersPosition[this.position.y][this.position.x + 1] : null
        }
    }

    getFreeSides(asker) {
        const freeSides = []
        this.updateSides()
        if (!this.sides.up && this.position.y > 0 && data.mapMoveCost[asker.type][this.position.y - 1][this.position.x] != 0) {freeSides.push({y: this.position.y - 1, x: this.position.x})}
        if (!this.sides.down && this.position.y < data.height - 1 && data.mapMoveCost[asker.type][this.position.y + 1][this.position.x] != 0) {freeSides.push({y: this.position.y + 1, x: this.position.x})}
        if (!this.sides.left && this.position.x > 0 && data.mapMoveCost[asker.type][this.position.y][this.position.x - 1] != 0) {freeSides.push({y: this.position.y, x: this.position.x - 1})}
        if (!this.sides.right &&this.position.x < data.width - 1 && data.mapMoveCost[asker.type][this.position.y][this.position.x + 1] != 0) {freeSides.push({y: this.position.y, x: this.position.x + 1})}
        return(freeSides)
    }

    haveEnnemyOnSide() {
      for(const side in this.sides) {
        if (this.sides[side] && this.sides[side].owner != this.owner) {return true}
      }
      return false
    }

    haveTargetOnSide(target) {
      for(const side in this.sides) {
        if (this.sides[side] && this.sides[side].id == target.id) {return true}
      }
      return false
    }

    haveTargetInAccessibleLocation(target) {
      for(const position of this.accessibleLocation) {
  		console.log(glob.charactersPosition[position.y][position.x])
        if (glob.charactersPosition[position.y][position.x] && glob.charactersPosition[position.y][position.x].id == target.id) {return true}
      }
      return false
    }

    isAccessible(position) {
      for(let i = 0 ; i < this.accessibleLocation.length ; i++) {
        if (this.accessibleLocation[i].x == position.x && this.accessibleLocation[i].y == position.y) return true;
      }
      return false;
    }

    up() {
      let canMove = this.isAccessible({x: this.position.x, y: this.position.y-1})
      if (canMove) {super.up(); this.tileid = this.mainTileId + 8; this.updateSides()}
      return canMove
    }
    down() {
      let canMove = this.isAccessible({x: this.position.x, y: this.position.y+1})
      if (canMove) {super.down(); this.tileid = this.mainTileId + 2; this.updateSides()}
      return canMove
    }
    left() {
      let canMove = this.isAccessible({x: this.position.x-1, y: this.position.y})
      if (canMove) {super.left(); this.tileid = this.mainTileId + 4; this.updateSides()}
      return canMove
    }
    right() {
      let canMove = this.isAccessible({x: this.position.x+1, y: this.position.y})
      if (canMove) {super.right(); this.tileid = this.mainTileId + 6; this.updateSides()}
      return canMove
    }

    canUp() {
      return this.isAccessible({x: this.position.x, y: this.position.y-1})
    }
    canDown() {
      return this.isAccessible({x: this.position.x, y: this.position.y+1})
    }
    canLeft() {
      return this.isAccessible({x: this.position.x-1, y: this.position.y})
    }
    canRight() {
      return this.isAccessible({x: this.position.x+1, y: this.position.y})
    }

    setAccessibleLocation() {
      this.accessibleLocation = []
      this.mouvementLeft = this.mouvement
      this.tryLocation(this.position, this.mouvement)
      this.accessibleLocation = dedupe(this.accessibleLocation)
    }

    setPosition(position) {
    	glob.charactersPosition[this.initPosition.y][this.initPosition.x] = 0
    	glob.charactersPosition[position.y][position.x] = this
    	this.initPosition = {x: position.x, y: position.y}
    	super.setPosition(position)
    }

    tryLocation(position, mouvementLeft) {
      let right = position.x < data.width - 1 ? glob.charactersPosition[position.y][position.x+1] : null
      let left = position.x > 0 ? glob.charactersPosition[position.y][position.x-1] : null
      let down = position.y < data.height - 1 ? glob.charactersPosition[position.y+1][position.x] : null
      let up = position.y > 0 ? glob.charactersPosition[position.y-1][position.x] : null
      this.accessibleLocation.push({x: position.x, y: position.y})
      if(mouvementLeft == 0) return;
      if(position.x < data.width - 1 && data.mapMoveCost[this.type][position.y][position.x+1] && data.mapMoveCost[this.type][position.y][position.x+1] <= mouvementLeft && (!right || right.owner == this.owner)) {
        this.tryLocation({x: position.x + 1, y: position.y}, mouvementLeft - data.mapMoveCost[this.type][position.y][position.x+1])
      }
      if(position.x > 0 && data.mapMoveCost[this.type][position.y][position.x-1] && data.mapMoveCost[this.type][position.y][position.x-1] <= mouvementLeft && (!left || left.owner == this.owner)) {
        this.tryLocation({x: position.x - 1, y: position.y}, mouvementLeft - data.mapMoveCost[this.type][position.y][position.x-1])
      }
      if(position.y < data.height - 1 && data.mapMoveCost[this.type][position.y+1][position.x] && data.mapMoveCost[this.type][position.y+1][position.x] <= mouvementLeft && (!down || down.owner == this.owner)) {
        this.tryLocation({x: position.x, y: position.y + 1}, mouvementLeft - data.mapMoveCost[this.type][position.y+1][position.x])
      }
      if(position.y > 0 && data.mapMoveCost[this.type][position.y-1][position.x] && data.mapMoveCost[this.type][position.y-1][position.x] <= mouvementLeft && (!up || up.owner == this.owner)) {
        this.tryLocation({x: position.x, y: position.y - 1}, mouvementLeft - data.mapMoveCost[this.type][position.y-1][position.x])
      }
      return
    }

    draw(ctx, force) {
      if(!glob.cursor.selected || glob.cursor.selected.id != this.id || force)
        glob.tiles[this.tileid].draw(ctx, this.position)
      if(this.moved) {
        if (glob.logger) {
          glob.logger = false
        }
        ctx.globalAlpha = 1
        ctx.font = 'bold 16px Verdana, Arial, serif'
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect((this.position.x - glob.background.position.x)*glob.size + 48, (this.position.y - glob.background.position.y)*glob.size + 48, 16, 16)
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText('E', (this.position.x - glob.background.position.x)*glob.size + 50, (this.position.y - glob.background.position.y)*glob.size + 62)
      }
    }
  }