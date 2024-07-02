class Battle extends Drawable(Movable) {
    constructor() {
      super()
    }
    async draw() {
        return new Promise((resolve,reject) => {
            var canvas = document.getElementById("battle-layer");
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
            }
            ctx.imageSmoothingEnabled = false;
            ctx.beginPath();
            ctx.rect(0, 0, 576, 576);
            ctx.fillStyle = "red";
            ctx.fill();
            resolve();
        })
    }
}