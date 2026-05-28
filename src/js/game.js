import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScene } from './scenes/startscene.js'
import { levelOne } from './scenes/levelOne.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene("start", new StartScene());
        this.addScene("levelone", new levelOne());

        this.goToScene("start");
    }
}

new Game()
