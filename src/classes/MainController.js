Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

class MainController {
	constructor(cursor, background) {
		this.cursor = cursor
		this.background = background
	}

	move(direction) {
		if (!this.cursor.mode) {
          if ((((direction == 'right' && this.background.position.x != this.background.limit.x) || (direction == 'left' && this.background.position.x != 0)) && this.cursor.position.x == 4)
          	||(((direction == 'up' && this.background.position.y != 0) || (direction == 'down' && this.background.position.y != this.background.limit.y)) && this.cursor.position.y == 4)
          	) {
            if (this.cursor.selected && this.cursor.selected['can' + direction.capitalize()]()) {this.background[direction]()}
            else if (!this.cursor.selected) {this.background[direction]()}
          } else {
            if (this.cursor.selected && this.cursor.selected['can' + direction.capitalize()]()) {this.cursor[direction]()}
            else if (!this.cursor.selected) {this.cursor[direction]()}
          }
          if (this.cursor.selected)
            this.cursor.selected[direction]()
        } else {
          this.cursor[direction]()
        }
	}

	select() {
		this.cursor.processSelect()
		this.background.savePosition()
	}
}