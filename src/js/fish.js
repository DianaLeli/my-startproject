import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Shark } from "./shark";
import { Bubble } from "./bubble";
import { Bones } from "./bones";

export class Fish extends Actor {

    sprite;

    constructor() {
        super({ 
            width: Resources.Fish.width, 
            height: Resources.Fish.height 
        });

        this.sprite = Resources.Fish.toSprite();
        this.graphics.use(this.sprite);

        this.pos = new Vector();
        this.vel = new Vector(Math.random() * -150 -50, 0);

        this.on("exitviewport", (e) => this.resetPosition(e));
    }

    resetPosition(e) {
        const rightSide = this.scene.engine.drawWidth;
        this.pos = new Vector(Math.random() * 400 + rightSide, Math.random() * 600);
        this.vel = new Vector(Math.random() * -150 -50, 0);
    }

    onCollisionStart(engine, other) {
        if (other.owner instanceof Bubble) {
            this.scene.add(new Bones(this.pos.x, this.pos.y));
            this.resetPosition();
            this.kill();
        }
    }
}   