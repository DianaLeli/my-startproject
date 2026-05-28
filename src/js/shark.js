import { Actor, Vector, Keys } from "excalibur";
import { Resources } from "./resources";
import { Fish } from "./fish";
import { Bubble } from "./bubble";

export class Shark extends Actor {

    constructor() {
        super({ width: Resources.Shark.width, height: Resources.Shark.height });

        this.graphics.use(Resources.Shark.toSprite());

        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);

    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -250;
        }

        if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 250;
        }

        if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -250;
        }

        if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 250;
        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.shoot();
        }

        this.vel = new Vector(xspeed, yspeed)
    }

    shoot() {
        const bubble = new Bubble(this.pos.x, this.pos.y);
        this.scene.add(bubble);
    }
}