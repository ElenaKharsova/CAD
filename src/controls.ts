import * as THREE from 'three';
import * as Types from "./types"
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
        const length: string = (document.getElementById('length') as HTMLInputElement)?.value;
        const width: string = (document.getElementById('width') as HTMLInputElement)?.value;
        const height: string = (document.getElementById('height') as HTMLInputElement)?.value;
        const count: string = (document.getElementById('count') as HTMLInputElement)?.value;
        const typeObject: string = (document.getElementById('type') as HTMLInputElement)?.value;

        const dimensions: Types.Dimensions = {
            length: +length,
            width: +width,
            height: +height
        }
        console.log("length", dimensions,count);

        switch (typeObject){
            case `${Types.TypeObject.Cube}`:
                createCubeGroup(threeSetup, dimensions, +count);
                break;
            case `${Types.TypeObject.Pyramid}`:
                createPyramidGroup(threeSetup, dimensions, +count);
                break;
        }
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
    }
}

