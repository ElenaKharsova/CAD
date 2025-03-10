import * as THREE from 'three';
import * as Types from "./types"
import { createCube, createPyramid } from './objects';
import { threeSetup } from "./field"
import { viewList, addObjectToList } from './list';
import { clearStorage, saveObjectsToStorage } from './storage';

export function createControls(){
    console.log("createControls function");
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

        for (let i = 0; i < +count; i++){
            let object: THREE.Mesh = createObject(typeObject);
            threeSetup.scene.add(object);
            addObjectToList(object, +typeObject);  
        }        
        console.log("after create cube")
        console.log("Scene children 0000000000:", threeSetup.scene.children);

        threeSetup.renderer.render(threeSetup.scene, threeSetup.camera);
        saveObjectsToStorage(threeSetup?.scene.children);
        console.log("Scene children 11111111111111111:", threeSetup.scene.children);
        viewList();

        function createObject(typeObject: string): THREE.Mesh{
            let object: THREE.Mesh;
            switch (typeObject){
                case `${Types.TypeObject.Cube}`:
                    object = createCube(dimensions);
                    break;
                case `${Types.TypeObject.Pyramid}`:
                    object = createPyramid(dimensions);
                    break;
            }
            return object;
        }
    }

    function cleareScene():void{
        console.log("Scene has cleared")
        let sceneChildrenCount: number = threeSetup.scene.children.length;
        for(let i: number = sceneChildrenCount - 1; i > 0; i--){
            const child: THREE.object3D = threeSetup.scene.children[i];
            threeSetup.scene.remove(child);
        }
        threeSetup.renderer.render(threeSetup.scene, threeSetup.camera);
        (document.querySelector('.list') as HTMLUListElement).innerHTML = "";
        clearStorage();
    }
}

