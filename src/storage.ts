import { Object3D } from "./types";

export function saveObjectsList(items: Object3D[]){
    localStorage.setItem("objects3D", JSON.stringify(items))
}

export function readObjectsList(): Object3D[]{
    const objectsList: Object3D[] | null = JSON.parse(localStorage.getItem("objects3D") || "null");
    return objectsList ?? [];
}

export function clearStorage(): void{
    localStorage.setItem("objects3D", "");
}