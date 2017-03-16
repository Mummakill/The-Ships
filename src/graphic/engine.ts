import * as three from 'three';
import { has } from 'lodash';
import { Camera } from './camera';
import { Scene } from './scene';
import { Item } from './item';

class GraphicEngine {
    private cameras: { [id: string]: Camera };
    private scenes: { [id: string]: Scene };
    private items: { [id: string]: Item };
    private masterCamera: Camera;
    private masterScene: Scene;
    private renderer: three.WebGLRenderer;
    private canvas: HTMLCanvasElement;

    constructor() {
        this.cameras = Object.create(null);
        this.scenes = Object.create(null);
    }

    private frame() {
        this.renderer.render(this.masterScene.instance, this.masterCamera.instance);
        requestAnimationFrame(this.frame);
    }
    
    initialize(canvas: HTMLCanvasElement, startRendering: boolean = true): GraphicEngine {
        this.renderer = new three.WebGLRenderer({ canvas });
        if (startRendering) {
            this.render();
        }
        return this;
    }

    camera(id: string): Camera {
        if (!has(this.cameras, id)) {
            this.cameras[id] = new Camera();
        }
        return this.cameras[id];
    }

    scene(id: string): Scene {
        if (!has(this.cameras, id)) {
            this.cameras[id] = new Camera();
        }
        return this.scenes[id];
    }

    item(id: string): Item {
        if (!has(this.cameras, id)) {
            this.items[id] = new Item(this.scene);
        }
        return this.items[id];        
    }

    render(): GraphicEngine {
        if (!this.renderer) {
            throw new Error('Impossible to render uninitialized engine');
        }

        

        return this;
    }
}

export { GraphicEngine };