import * as THREE from 'three';
import * as Types from './types';
import { saveObjectsList, readObjectsList } from './storage';

export function addObjectToList(object3D: THREE.object3D, typeObject: number): void{
    const objectsList: Types.Object3D[] = readObjectsList();
    const object: Types.Object3D = {
        type: typeObject,
        position: `(${object3D.position.x.toFixed(2)}, 
        ${object3D.position.y.toFixed(2)}, 
        ${object3D.position.z.toFixed(2)})`,
        color: object3D.color
    }
    objectsList.push(object);
    saveObjectsList(objectsList);
}

export function viewList(): void{
    console.log("ViewList function");
    const ul: HTMLUListElement | null = document.querySelector(".list");

    if(!ul){
        throw new Error("There isn't ul element");
    } else {
        ul.innerHTML = '';
        const objectList: Types.Object3D[] = readObjectsList();
        for(let i = 0; i < objectList.length; i++){
            const type: string = Types.TypeObject[objectList[i].type];
            const li: HTMLLIElement = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = `${type} ${i+1}<br>
            position: ${objectList[i].position}`;
            const colorSquare: HTMLDivElement = document.createElement('div');
            li.appendChild(colorSquare);
            colorSquare.classList.add('color-box');
            colorSquare.style.backgroundColor = objectList[i].color;
        }
    }
}