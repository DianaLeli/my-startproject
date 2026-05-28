import { Scene } from "excalibur";
import { Fish } from "../fish";
import { ScaryFish } from "../scaryfish";
import { Shark } from "../shark";

export class levelOne extends Scene {

    onInitialize(engine) {

        for (let i = 0; i < 10; i++) {
            const fish = new Fish();
            this.add(fish);
        }

        for (let i = 0; i < 5; i++) {
            const fish = new ScaryFish();
            this.add(fish);
        }

        const shark = new Shark();
        this.add(shark);

        
    }

}