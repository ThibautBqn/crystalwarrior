import { Position } from "./Position";

interface IDrawable {
    canvasPosition: Position;
    draw(ctx, position): Promise<void>;
}

export { IDrawable }