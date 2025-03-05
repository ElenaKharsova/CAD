import * as THREE from 'three';
import type * as Types from './types'
import { readObjectsFromStorage } from './storage';

export const threeSetup: Types.ThreeSetup = initialization();

function initialization(): Types.ThreeSetup{
    const initialObjects: THREE.object3D[] | null = readObjectsFromStorage();

    console.log("initialization function setupInitial", initialObjects);
    let threeSetup: Types.ThreeSetup = {
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
        light: new THREE.DirectionalLight(0xffffff, 1),
        renderer: new THREE.WebGLRenderer()
    }
    threeSetup.scene.background = new THREE.Color(0xffffff); 
    threeSetup.camera.position.z = 5;
    threeSetup.light.position.set(1, 1, 1).normalize();
    threeSetup.scene.add(threeSetup.light);
    threeSetup.renderer.setSize( window.innerWidth*3/4, window.innerHeight);
    
    if(initialObjects) {
        threeSetup.scene.children = initialObjects;
    } 
        
    console.log("threeSetup after reading data from storage", threeSetup)
    return threeSetup;
}

export function createField(): void{
    console.log("createField function");
    const field: HTMLDivElement | null = document.querySelector(".field");

    if(!field){
        throw new Error("There is no field element!");
    }

    if(threeSetup){
        //console.log("renderer:", threeSetup.renderer);
        console.log("renderer.domElement:", threeSetup.renderer.domElement);
        field.appendChild(threeSetup.renderer.domElement);
    } else {
        throw new Error("threeSetup isn't initialized!");
    }
}