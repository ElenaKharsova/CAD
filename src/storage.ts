import { Object3D, ThreeSetup } from "./types";

export function saveObjectsList(items: Object3D[]){
    localStorage.setItem("objects3DList", JSON.stringify(items))
}

export function readObjectsList(): Object3D[]{
    const objectsList: Object3D[] | null = JSON.parse(localStorage.getItem("objects3DList") || "null");
    return objectsList ?? [];
}

export function saveSetup(item: ThreeSetup){
    localStorage.setItem("setup", JSON.stringify(item));
}

export function readSetup(): ThreeSetup | null{
    const threeSetup: ThreeSetup | null = JSON.parse(localStorage.getItem("setup") || "null");
    return threeSetup ?? null;
}

export function clearStorage(): void{
    localStorage.setItem("objects3DList", "");
    localStorage.setItem("objects3D", "");
}