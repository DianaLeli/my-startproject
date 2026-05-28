import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Bubble extends Actor {

    constructor(x, y) {
        super({width: Resources.Bubble.width, height: Resources.Bubble.height});

        this.graphics.use(Resources.Bubble.toSprite());

        this.pos = new Vector(x, y);
        this.vel = new Vector(500, 0);
    }

    onInitialize(engine) {
        this.events.on("exitviewport", () => this.kill());
    }
}
