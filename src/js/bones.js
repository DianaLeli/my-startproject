import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Bones extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Bones.width, height: Resources.Bones.height});

        this.graphics.use(Resources.Bones.toSprite());

        this.vel = new Vector(0, 100);
        this.scale = new Vector(0.5, 0.5);
        this.events.on("exitviewport", () => this.kill());
    }
}