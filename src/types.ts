import * as THREE from 'three';

type Dimensions = {
    length: number,
    width: number,
    height: number
}

type ThreeSetup = {
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    light: THREE.DirectionalLight,
    renderer: THREE.WebGLRenderer
}

export * from './types'