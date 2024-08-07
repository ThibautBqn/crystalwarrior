function keyBinding() {
    document.onkeydown = function (e) {
      e = e || window.event;
      console.log(e.code, e.keyCode)
      if("fight" === glob.phase) {
        console.log(glob.battle)
      }
      // console.log(glob.cursor.decall)
      if (e.code === 'ArrowLeft') 	{glob.mainController.move('left')}
      if (e.code === 'ArrowRight') 	{glob.mainController.move('right')}
      if (e.code === 'ArrowUp') 	{glob.mainController.move('up')}
      if (e.code === 'ArrowDown') 	{glob.mainController.move('down')}
      if (e.code === 'Space') {
        if(glob.phase === "fight") {
            document.getElementById("battle-layer").style.display = "none"
            console.log(document.getElementById("battle-layer").style.display)
            glob.phase = "tactical"
            glob.battle = undefined
            return
        }
      	glob.mainController.select()
      	return
        if(glob.cursor.selected === undefined
          && glob.charactersPosition[glob.cursor.position.y + glob.background.position.y][glob.cursor.position.x + glob.background.position.x]
          && !glob.charactersPosition[glob.cursor.position.y + glob.background.position.y][glob.cursor.position.x + glob.background.position.x].moved
          && glob.charactersPosition[glob.cursor.position.y + glob.background.position.y][glob.cursor.position.x + glob.background.position.x].owner == 'player') {
          glob.cursor.selected = glob.charactersPosition[glob.cursor.position.y + glob.background.position.y][glob.cursor.position.x + glob.background.position.x]
          glob.cursor.selected.setAccessibleLocation()
          glob.cursor.selected.tileid += 2
          glob.cursor.initPosition = {x: glob.cursor.position.x, y: glob.cursor.position.y}
          glob.background.initPosition = {x: glob.background.position.x, y: glob.background.position.y}
        }
        else if(glob.cursor.selected
          && (!glob.charactersPosition[glob.cursor.position.y + glob.background.position.y][glob.cursor.position.x + glob.background.position.x]
            || glob.charactersPosition[glob.cursor.position.y + glob.background.position.y][glob.cursor.position.x + glob.background.position.x] == glob.cursor.selected)) {
          if(glob.cursor.selected.haveEnnemyOnSide() && !glob.cursor.mode) {
            glob.cursor.selected.tileid = glob.cursor.selected.mainTileId
            glob.cursor.mode = 'attack'
            glob.cursor.initPosition = {x: glob.cursor.position.x, y: glob.cursor.position.y}
            glob.cursor.setAccessibleLocation()
            console.log('attack mode')
            return                
          }
          glob.charactersPosition[glob.cursor.selected.initPosition.y][glob.cursor.selected.initPosition.x] = 0
          glob.charactersPosition[glob.cursor.selected.position.y][glob.cursor.selected.position.x] = glob.cursor.selected
          glob.cursor.selected.initPosition = {x: glob.cursor.selected.position.x, y: glob.cursor.selected.position.y}
          glob.cursor.selected.tileid = glob.cursor.selected.mainTileId
          glob.cursor.selected.moved = true
          glob.cursor.selected = undefined
          glob.cursor.mode = null
        } else if (glob.cursor.mode == 'attack') {
          console.log('attack launch', glob.charactersPosition[glob.cursor.position.y + glob.background.position.y][glob.cursor.position.x + glob.background.position.x])
          glob.phase = 'fight'
        }
      }
      if(e.code === "Escape") {
        if(glob.cursor.selected && glob.cursor.mode == 'attack') {
          glob.cursor.mode = null
          glob.cursor.position = {x: glob.cursor.selected.position.x - glob.background.position.x, y: glob.cursor.selected.position.y - glob.background.position.y}
          return
        }
        if(glob.cursor.selected) {
          glob.cursor.selected.position = {x: glob.cursor.selected.initPosition.x, y: glob.cursor.selected.initPosition.y}
          glob.cursor.selected.tileid = glob.cursor.selected.mainTileId
          glob.cursor.selected = undefined
          glob.cursor.mode = null
          glob.cursor.position = {x: glob.cursor.initPosition.x, y: glob.cursor.initPosition.y}
          glob.background.position = {x: glob.background.initPosition.x, y: glob.background.initPosition.y}
        } else if (confirm('fin du tour ?')) {glob.playerEndTour();}
      }
    }
  }