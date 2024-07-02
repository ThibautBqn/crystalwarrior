class Background extends Drawable(Movable) {
    constructor() {
      super()
    }
    async draw() {
      return new Promise((resolve,reject) => {
        data.layers.forEach((item, index) => {
          var canvas = document.getElementById(item.name);
          if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
          }
          ctx.imageSmoothingEnabled = false;
          ctx.clearRect(0, 0, 576, 576);
          for(let y = 0 ; y < data.height ; y++) {
            for(let x = 0 ; x < data.width ; x++) {
              if (index == data.layers.length - 1 && y == data.height - 1 && x == data.width - 1 && !item.matrice[y][x])
                resolve()
              if (!item.matrice[y][x])
                continue
              glob.tiles[item.matrice[y][x] - 1].draw(ctx, {x,y})
              if (index == data.layers.length - 1 && y == data.height - 1 && x == data.width - 1)
                resolve()
            }
          }
        })
      })
    }
  }