import * as THREE from 'three';

export type Dimensions = {
    length: number,
    width: number,
    height: number
}

export type ThreeSetup = {
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    light: THREE.DirectionalLight,
    renderer: THREE.WebGLRenderer
}

export enum TypeObject {
    Cube = 1,
    Pyramid = 2
}