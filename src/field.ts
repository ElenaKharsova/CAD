import * as THREE from 'three';
import type * as Types from './types'

export const threeSetup: Types.ThreeSetup = {
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
    light: new THREE.DirectionalLight(0xffffff, 1),
    renderer: new THREE.WebGLRenderer()
}

export function createField():void{
    const field: HTMLDivElement = document.querySelector(".field") as HTMLDivElement;
 
    threeSetup.scene.background = new THREE.Color(0xffffff); 
    threeSetup.camera.position.z = 5;
    threeSetup.light.position.set(1, 1, 1).normalize();
    threeSetup.scene.add(threeSetup.light);
    threeSetup.renderer.setSize( window.innerWidth*3/4, window.innerHeight);

    field.appendChild(threeSetup.renderer.domElement);
}