import * as THREE from 'three';
import type * as Types from './types'
import { readSetup } from './storage';

export const threeSetup: Types.ThreeSetup = initialization();

function initialization(): Types.ThreeSetup{
    const setupInitial: Types.ThreeSetup | null = readSetup();
    const threeSetup: Types.ThreeSetup = 
        setupInitial ? {
            scene: setupInitial.scene,
            camera: setupInitial.camera,
            light: setupInitial.light,
            renderer: setupInitial.renderer
        } : {
            scene: new THREE.Scene(),
            camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
            light: new THREE.DirectionalLight(0xffffff, 1),
            renderer: new THREE.WebGLRenderer()
        }
    return threeSetup;
}

export function createField():void{
    const field: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;
 
    if(setupInitial){
        threeSetup.scene.background = setupInitial.scene.background; 
        threeSetup.camera.position.z = setupInitial.camera.position.z;
        threeSetup.light.position = setupInitial.light.position;
        threeSetup.scene.light = setupInitial.scene.light;
        threeSetup.renderer.size = setupInitial.renderer.size;
    } else {
        threeSetup.scene.background = new THREE.Color(0xffffff); 
        threeSetup.camera.position.z = 5;
        threeSetup.light.position.set(1, 1, 1).normalize();
        threeSetup.scene.add(threeSetup.light);
        threeSetup.renderer.setSize( window.innerWidth*3/4, window.innerHeight);
    }

    field.appendChild(threeSetup.renderer.domElement);
}