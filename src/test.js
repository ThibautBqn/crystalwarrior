async function pathFindig(pc, target, mapMove, charMap) {
    let cols = mapMove.length; //columns in the grid
    let rows = mapMove[0].length; //rows in the grid

    let grid = new Array(cols); //array of all the grid points

    let openSet = []; //array containing unevaluated grid points
    let closedSet = []; //array containing completely evaluated grid points

    let start; //starting grid point
    let end; // ending grid point (goal)
    let path = [];

    //heuristic we will be using - Manhattan distance
    //for other heuristics visit - https://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
    function heuristic(position0, position1) {
        let d1 = Math.abs(position1.x - position0.x);
        let d2 = Math.abs(position1.y - position0.y);

        return d1 + d2;
    }

    //constructor function to create all the grid points as objects containind the data for the points
    function GridPoint(y, x) {
        this.x = x; //x location of the grid point
        this.y = y; //y location of the grid point
        this.f = 0; //total cost function
        this.g = 0; //cost function from start to the current grid point
        this.h = 0; //heuristic estimated cost function from current grid point to the goal
        this.neighbors = []; // neighbors of the current grid point
        this.parent = undefined; // immediate source of the current grid point

        // update neighbors array for a given grid point
        this.updateNeighbors = function (grid, throwPlayer) {
            let i = this.y;
            let j = this.x;
            try {
                if (!(i >= cols - 1 || mapMove[i + 1][j] == 0 || (!throwPlayer && charMap[i + 1][j] == 0))) {
                    this.neighbors.push(grid[i + 1][j]);
                }
                if (!(i >= cols - 1 || mapMove[i - 1][j] == 0 || (!throwPlayer && charMap[i - 1][j] == 0))) {
                    this.neighbors.push(grid[i - 1][j]);
                }
                if (!(i >= cols - 1 || mapMove[i][j + 1] == 0 || (!throwPlayer && charMap[i][j + 1] == 0))) {
                    this.neighbors.push(grid[i][j + 1]);
                }
                if (!(i >= cols - 1 || mapMove[i][j - 1] == 0 || (!throwPlayer && charMap[i][j - 1] == 0))) {
                    this.neighbors.push(grid[i][j - 1]);
                }
            }
            catch (e) {
                console.log(e, pc.name, pc.id, target.name, mapMove, i, j);
            }
        };
    }

    //initializing the grid
    function init(throwPlayer) {
        //making a 2D array
        for (let i = 0; i < cols; i++) {
            grid[i] = new Array(rows);
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = new GridPoint(i, j);
            }
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j].updateNeighbors(grid, throwPlayer);
            }
        }
        start = grid[pc.position.y][pc.position.x];
        let targetFreeSides = target.getFreeSides(pc)
        if (!targetFreeSides.length) {return}
        let finalTarget = null
        let distance = null
        for(let position of targetFreeSides) {
            let d = Math.sqrt(Math.pow(position.x - pc.position.x, 2) + Math.pow(position.y - pc.position.y, 2))
            if ((!finalTarget && ! distance) || d < distance) {
                finalTarget = {x:position.x, y:position.y}
                distance = d
            } 
        }
        
        end = grid[finalTarget.y][finalTarget.x];
        openSet.push(start);
    }

    //A star search implementation

    async function search(throwPlayer = true) {
        init(throwPlayer);
        while (openSet.length > 0) {
            //assumption lowest index is the first one to begin with
            let lowestIndex = 0;
            for (let i = 0; i < openSet.length; i++) {
                if (openSet[i].f < openSet[lowestIndex].f) {
                    lowestIndex = i;
                }
            }
            let current = openSet[lowestIndex];

            if (current === end) {
                let temp = current;
                path.push(temp);
                while (temp.parent) {
                    path.push(temp.parent);
                    temp = temp.parent;
                }
                // return the traced path
                return path.reverse();
            }

            //remove current from openSet
            openSet.splice(lowestIndex, 1);
            //add current to closedSet
            closedSet.push(current);

            let neighbors = current.neighbors;

            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];

                if (!closedSet.includes(neighbor)) {
                    let possibleG = current.g + mapMove[neighbor.y][neighbor.x];

                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    } else if (possibleG >= neighbor.g) {
                        continue;
                    }

                    neighbor.g = possibleG;
                    neighbor.h = heuristic(neighbor, end);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = current;
                }
            }
        }

        //no solution by default
        return [];
    }

    function getFirstAtMoveLeft(results, moveLeft) {
        let bestMove = null
        for (let i = 1 ; i < results.length ; i++) {
            if (!bestMove) { bestMove = results[i]}
            if (glob.charactersPosition[[results[i].y]][[results[i].x]] != 0 || glob.charactersPosition[[results[i].y]][[results[i].x]].owner == "player") {
                break;
            }
            if (results[i].g > moveLeft) {
                break;
            }
            bestMove = results[i]
        }
        return bestMove
        for (let i = results.length -1 ; i >= 0 ; i--) {
            if (results[i].g > moveLeft) {
                continue;
            }
            if (glob.charactersPosition[[results[i].y]][[results[i].x]] != 0) {
                continue;
            }
            return results[i];
        }
    }
    search().then(res => {
        moveMax = getFirstAtMoveLeft(res, pc.mouvement);
        if (moveMax && res[res.length - 1].g > pc.mouvement) {
            console.log(pc.name, pc.id, res)
            pc.setPosition({x: moveMax.x, y:moveMax.y})
            pc.mouvementLeft = 0
        }
        Promise.resolve(res[1]);
    })
}