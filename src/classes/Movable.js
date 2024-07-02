class Movable {
  constructor() {
    this.position = {x: 0, y: 0}
    this.limit = {x: 8, y: 8}
    this.initPosition = {x: this.position.x, y: this.position.y}
  }
  up() {if (this.position.y > 0) {this.position.y--}}
  down() {if (this.position.y < this.limit.y) {this.position.y++}}
  left() {if (this.position.x > 0) {this.position.x--}}
  right() {if (this.position.x < this.limit.x) {this.position.x++}}
  setPosition(position) {
    this.position.x = position.x
    this.position.y = position.y
  }
  setLimit(limit) {
    this.limit.x = limit.x
    this.limit.y = limit.y
  }
  savePosition() {
    this.initPosition = {x: this.position.x, y: this.position.y}
  }
}