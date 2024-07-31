class Glob {
    time: Date;
    fps = 0;
    secondsPassed = 0;
    round = 1;

    constructor() {
    }

    init() {
        console.log(`Glob - init() : called`)
    }
}

export {
    Glob
}