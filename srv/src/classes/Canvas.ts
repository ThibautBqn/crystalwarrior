import { IDrawable } from '../interfaces'

class Canvas {
    name: string;
    canvas: HTMLCanvasElement;
    childrenDrawble: [IDrawable];
    height: number;
    width: number;

    private context: any = undefined;
    
    constructor(element: HTMLCanvasElement) {
        this.canvas = element
        console.log(element);
    }

    getContext() {
        if (!this.context) {
            this.context = this.canvas.getContext('2d');
        }
        return this.context;
    }

    draw() {
        // this.childrenDrawble.forEach(child => child.draw(this.context))
    }
}

export { Canvas }