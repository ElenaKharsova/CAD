import * as THREE from 'three';
import { Object3D } from "./types";

export function saveObjectsList(items: Object3D[]){
    localStorage.setItem("objects3DList", JSON.stringify(items))
}

export function readObjectsList(): Object3D[]{
    const objectsList: Object3D[] | null = JSON.parse(localStorage.getItem("objects3DList") || "null");
    return objectsList ?? [];
}

export function saveObjectsToStorage(childrens: THREE.object3D[]){
    const serializedChildren = childrens.map(child => ({
        type: child.type, 
        position: child.position.toArray(),
        rotation: child.rotation.toArray(),
        scale: child.scale.toArray(),
        geometry: (child as THREE.Mesh).geometry ? (child as THREE.Mesh).geometry.toJSON() : null,
        material: (child as THREE.Mesh).material ? (child as THREE.Mesh).material.toJSON() : null
    }));
    
    localStorage.setItem("childrens", JSON.stringify(serializedChildren));
}

export function readObjectsFromStorage(): THREE.object3D[] {
    const childrens: THREE.object3D[] | [] = JSON.parse(localStorage.getItem("childrens") || "[]");

    return childrens.map((child: any) => {
        let obj;
        if (child.type === "Mesh") {
            const geometry = child.geometry ? new THREE.BufferGeometry().fromJSON(child.geometry) : new THREE.BoxGeometry();
            const material = child.material ? new THREE.MeshStandardMaterial(child.material) : new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            obj = new THREE.Mesh(geometry, material);
        } else {
            obj = new THREE.Object3D();
        }

        obj.position.fromArray(child.position);
        obj.rotation.fromArray(child.rotation);
        obj.scale.fromArray(child.scale);

        return obj;
    });
}

export function clearStorage(): void{
    localStorage.setItem("objects3DList", "");
    localStorage.setItem("childrens","");
    console.log("Clear storage")
}