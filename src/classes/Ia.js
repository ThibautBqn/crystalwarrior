class Ia {
	constructor() {
		this.characters = []
		this.humanCharacters = []
	}

	initCharacters(characters, humanCharacters) {
		this.characters = characters
		this.humanCharacters = humanCharacters
	}

	targetInRange(character, target) {
		for(const position of character.accessibleLocation) {
			if(((target.position.x - 1 == position.x && target.position.y == position.y) || (target.position.x + 1 == position.x && target.position.y == position.y))
				|| ((target.position.y - 1 == position.y && target.position.x == position.x) || (target.position.y + 1 == position.y && target.position.x == position.x)))
				return true
		}
		return false
	}

	async getBestTarget(character) {
		let bestTarget = null
		for(let target of this.humanCharacters) {
            const targetFreeSides = target.getFreeSides(character)
            if (!this.targetInRange(character, target) || !targetFreeSides.length) {continue}
            // console.log(target.name, "is accessible")
			// if(target.pv && target.pvMax && target.pv < target.pvMax - 0.75*target.pvMax) {return target}
			// if(target.id == 1 && this.targetInRange(character, target)) {return target}
			// if(character.strongAgainstType && target.type == character.strongAgainstType && this.targetInRange(character, target)) {return target}
			if (bestTarget == null) {bestTarget = target}
            else if (!this.targetInRange(character, bestTarget)) {bestTarget = target}
			else if (character.bestTarget.indexOf(target.id) < character.bestTarget.indexOf(bestTarget.id)) {bestTarget = target}
		}
		return bestTarget ? bestTarget : this.humanCharacters[0]
	}

	async play() {
		return new Promise(async (resolve, reject) => {
			for(let character of this.characters) {
				character.setAccessibleLocation()
				character.updateSides()
				let target = await this.getBestTarget(character)
				target.updateSides()
                console.log(`${character.name}${character.id} se dirige vers ${target.name}`)
				if(character.haveTargetOnSide(target)) {continue}
                await pathFindig(character, target, data.mapMoveCost[character.type], data.characters)
                if (character.mouvementLeft) {
                    let finalPosition = null
                    let distance = null
                    if(character.haveTargetOnSide(target)) {continue}
                    for(let position of character.accessibleLocation) {
                        if(glob.charactersPosition[position.y][position.x] != 0) {continue}
                        let d = Math.sqrt(Math.pow(position.x - target.position.x, 2) + Math.pow(position.y - target.position.y, 2))
                        if ((!finalPosition && ! distance) || d < distance) {
                            finalPosition = {x:position.x, y:position.y}
                            distance = d
                        } 
                    }
                    character.setPosition(finalPosition)
                }
                // break;
                // pathFindig(character, target, data.mapMoveCost[character.type]).then(grid => {
                //     console.log(grid);
                //     if (grid?.lenght < 1) {
                //         character.setPosition({x: grid[1].x, y:grid[1].y})
                //     }
                //     resolve()
                // })
				// for(let position of character.accessibleLocation) {
				// 	if(glob.charactersPosition[position.y][position.x] != 0) {continue}
				// 	let d = Math.sqrt(Math.pow(position.x - target.position.x, 2) + Math.pow(position.y - target.position.y, 2))
				// 	if ((!finalPosition && ! distance) || d < distance) {
				// 		finalPosition = {x:position.x, y:position.y}
				// 		distance = d
				// 	} 
				// }
			}
            resolve()
		})
	}

    async pathFinding(pc, target, moveMap) {

    }
}