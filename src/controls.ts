import * as THREE from 'three';
import type * as Types from "./types"
import { createCubeGroup, createPyramidGroup } from './objects';
import { threeSetup } from "./field"

export function createControls(){
    const btnAdd: HTMLButtonElement | null = document.querySelector('.btn_add');
    const btnClear: HTMLButtonElement | null = document.querySelector('.btn_clear');
    if(!btnAdd){
        throw new Error("There isn't button for creating new group!")
    } else {
        btnAdd.addEventListener("click", createGroup);
    }
    if(!btnClear){
        throw new Error("There isn't button for clearing scene!")
    } else {
        btnClear.addEventListener("click", cleareScene);
    }

    function createGroup(): void{
        console.log("createGroup function");
        const length: number = document.getElementById('length')?.value;
        const width: number = document.getElementById('width')?.value;
        const height: number = document.getElementById('height')?.value;
        const count: number = document.getElementById('count')?.value;
        const dimensions: Types.Dimensions = {
            length: length,
            width: width,
            height: height
        }
        console.log("length", dimensions,count);

    
        createCubeGroup(threeSetup, dimensions, count);
        createPyramidGroup(threeSetup, dimensions, count);
        threeSetup.renderer.render(threeSetup.scene, threeSetup.camera);
    }

    function cleareScene():void{
        console.log("Scene has cleared")
        let sceneChildrenCount: number = threeSetup.scene.children.length;
        for(let i: number = sceneChildrenCount - 1; i > 0; i--){
            const child: THREE.object3D = threeSetup.scene.children[i];
            threeSetup.scene.remove(child);
        }
        threeSetup.renderer.render(threeSetup.scene, threeSetup.camera);
        //console.log("threeSetup.scene afer clearing", threeSetup.scene.children);
    }
}

