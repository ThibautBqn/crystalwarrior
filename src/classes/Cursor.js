class Cursor extends Drawable(Movable) {
    constructor() {
      super()
      this.initPosition = {x: this.position.x, y: this.position.y}
      this.mode = null
      this.decall = {x: false, y: false}
      this.accessibleLocation = []
    }

    right() {
      if (!this.mode) {return super.right();}
      if (this.selected.sides.right && this.selected.sides.right.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.position.x && this.position.y + glob.background.position.y == this.selected.position.y) {
        return super.right();
      }
      if (this.selected.sides.left && this.selected.sides.left.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.sides.left.position.x && this.position.y + glob.background.position.y == this.selected.sides.left.position.y) {
        return super.right();
      }
    }

    left() {
      if (!this.mode) {return super.left();}
      if (this.selected.sides.left && this.selected.sides.left.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.position.x && this.position.y + glob.background.position.y == this.selected.position.y) {
        return super.left();
      }
      if (this.selected.sides.right && this.selected.sides.right.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.sides.right.position.x && this.position.y + glob.background.position.y == this.selected.sides.right.position.y) {
        return super.left();
      }
    }

    up() {
      if (!this.mode) {return super.up();}
      if (this.selected.sides.up && this.selected.sides.up.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.position.x && this.position.y + glob.background.position.y == this.selected.position.y) {
        return super.up();
      }
      if (this.selected.sides.down && this.selected.sides.down.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.sides.down.position.x && this.position.y + glob.background.position.y == this.selected.sides.down.position.y) {
        return super.up();
      }
    }

    down() {
      if (!this.mode) {return super.down();}
      if (this.selected.sides.down && this.selected.sides.down.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.position.x && this.position.y + glob.background.position.y == this.selected.position.y) {
        return super.down();
      }
      if (this.selected.sides.up && this.selected.sides.up.owner == 'pc'
        && this.position.x + glob.background.position.x == this.selected.sides.up.position.x && this.position.y + glob.background.position.y == this.selected.sides.up.position.y) {
        return super.down();
      }
    }
    
    setAccessibleLocation() {
      let tmp = []
      for(let y=0;y<this.limit.y + 1;y++) {
        tmp[y]=[]
        for(let x=0;x<this.limit.x + 1;x++) {
          tmp[y][x] = false
        }
      }
      if (glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x -1]
          && glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x -1].owner == 'pc') {
        tmp[this.position.y][this.position.x - 1] = true
      }
      if (glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x  +1]
          && glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x  +1].owner == 'pc') {
        tmp[this.position.y][this.position.x + 1] = true
      }
      if (glob.charactersPosition[this.position.y + glob.background.position.y - 1][this.position.x + glob.background.position.x]
          && glob.charactersPosition[this.position.y + glob.background.position.y - 1][this.position.x + glob.background.position.x].owner == 'pc') {
        tmp[this.position.y - 1][this.position.x] = true
      }
      if (glob.charactersPosition[this.position.y + glob.background.position.y + 1][this.position.x + glob.background.position.x]
          && glob.charactersPosition[this.position.y + glob.background.position.y + 1][this.position.x + glob.background.position.x].owner == 'pc') {
        tmp[this.position.y + 1][this.position.x] = true
      }
      tmp[this.position.y][this.position.x] = true
      this.accessibleLocation = tmp
    }

    getCharacter(owner) {
    	if (glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x]
          && !glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x].moved
          && glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x].owner == owner)
    		return glob.charactersPosition[this.position.y + glob.background.position.y][this.position.x + glob.background.position.x]
    	return null
    }

    processSelect() {
    	let character = this.getCharacter('player')
    	if(!this.selected && character) {
    		this.savePosition()
    		this.selected = character
    		character.isSelected()
    		return
    	}
    	if (this.mode == 'attack') {
    		character = this.getCharacter('pc')
	    	console.log(character)
    		if (character) {
                glob.battle = new Battle(this.selected, character);
                character.setKnowledge(true)
    			console.log('GO FIGHT !')
                glob.phase = "fight";
                glob.charactersPosition[glob.cursor.selected.position.y][glob.cursor.selected.position.x] = glob.cursor.selected
                this.selected.unselected()
                this.selected = undefined
                this.mode = null
    		}
    	}
    	if(this.selected && (!character || character.id === this.selected.id)) {
    		if(glob.cursor.selected.haveEnnemyOnSide() && !this.mode) {
	            this.selected.tileid = this.selected.mainTileId
	            this.mode = 'attack'
	            // this.initPosition = {x: this.position.x, y: this.position.y}
	            this.setAccessibleLocation()
	            console.log('attack mode')
                return
        	}
    		console.log('unselect')
    		glob.charactersPosition[glob.cursor.selected.initPosition.y][glob.cursor.selected.initPosition.x] = 0
        glob.charactersPosition[glob.cursor.selected.position.y][glob.cursor.selected.position.x] = glob.cursor.selected
        this.selected.unselected()
        this.selected = undefined
        this.mode = null
        return
    	}
    }

    draw() {
      var canvas = document.getElementById('ui-layer');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
      }
      if (this.selected && !this.mode) {
        ctx.clearRect(0, 0, 576, 576)
        ctx.globalAlpha = 1
        this.selected.draw(ctx, true)
        ctx.globalAlpha = 0.5
        ctx.strokeStyle = 'rgb(0,0,0)';
        ctx.imageSmoothingEnabled = false;
        let tmp = []
        for(let y=0;y<data.height;y++) {
          tmp[y]=[]
          for(let x=0;x<data.width;x++) {
            tmp[y][x] = false
          }
        }
        this.selected.accessibleLocation.forEach(function(item) {
          tmp[item.y][item.x] = true
        })
        for(let y=0;y<tmp.length;y++) {
          for(let x=0;x<tmp[y].length;x++) {
            if(!tmp[y][x]) {
              ctx.fillRect((x-glob.background.position.x)*glob.size, (y-glob.background.position.y)*glob.size, glob.size, glob.size);
            }
          }
        }
      } else if (this.selected && this.mode == 'attack') {
        ctx.clearRect(0, 0, 576, 576)
        ctx.globalAlpha = 1
        this.selected.draw(ctx, true)
        ctx.globalAlpha = 0.7
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.position.x*glob.size + 32, this.position.y*glob.size + 32);
        ctx.lineTo(this.position.x*glob.size + 64, this.position.y*glob.size - 32);
        ctx.strokeStyle = 'rgb(255,255,255)';
        ctx.stroke();
        ctx.globalAlpha = 0.5
        ctx.strokeStyle = 'rgb(0,0,0)';
        ctx.imageSmoothingEnabled = false;
        for(let y=0;y<this.accessibleLocation.length;y++) {
          for(let x=0;x<this.accessibleLocation[y].length;x++) {
            if(!this.accessibleLocation[y][x]) {
              ctx.fillRect((x)*glob.size, (y)*glob.size, glob.size, glob.size);
            }
          }
        }
      } else {
        ctx.clearRect(0, 0, 576, 576)
        ctx.imageSmoothingEnabled = true;
        ctx.globalAlpha = 0.7
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.position.x*glob.size + 38 * glob.ratio, this.position.y*glob.size + 2 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 62 * glob.ratio, this.position.y*glob.size + 2 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 62 * glob.ratio, this.position.y*glob.size + 25 * glob.ratio);
        ctx.moveTo(this.position.x*glob.size + 62 * glob.ratio, this.position.y*glob.size + 38 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 62 * glob.ratio, this.position.y*glob.size + 62 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 38 * glob.ratio, this.position.y*glob.size + 62 * glob.ratio);
        ctx.moveTo(this.position.x*glob.size + 25 * glob.ratio, this.position.y*glob.size + 62 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 2 * glob.ratio, this.position.y*glob.size + 62 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 2 * glob.ratio, this.position.y*glob.size + 38 * glob.ratio);
        ctx.moveTo(this.position.x*glob.size + 2 * glob.ratio, this.position.y*glob.size + 25 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 2 * glob.ratio, this.position.y*glob.size + 2 * glob.ratio);
        ctx.lineTo(this.position.x*glob.size + 25 * glob.ratio, this.position.y*glob.size + 2 * glob.ratio);
        ctx.strokeStyle = 'rgb(255,0,255)';
        ctx.stroke();
      }
      // ctx.strokeRect((this.position.x*glob.size)+2, (this.position.y*glob.size)+2, 61, 61);
    }
  }