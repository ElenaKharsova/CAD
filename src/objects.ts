import * as THREE from 'three';
import type * as Types from './types';


const randomColor = (): THREE.color => new THREE.Color(Math.random(), Math.random(), Math.random());

export function createCube(dimensions: Types.Dimensions): THREE.object3D{
    console.log("Create cube function");

    const meshColor: THREE.color = randomColor();
    const geometryBuffer: THREE.BufferGeometry = new THREE.BufferGeometry();

    const vertices: Float32Array = new Float32Array([
        // Передняя грань
        0, 0, dimensions.width,  // 0
        dimensions.length, 0, dimensions.width,  // 1
        dimensions.length, dimensions.height, dimensions.width,  // 2
        0, dimensions.height, dimensions.width,  // 3
    
        // Задняя грань
        0, 0, 0,  // 4
        dimensions.length, 0, 0,  // 5
        dimensions.length, dimensions.height, 0,  // 6
        0, dimensions.height, 0,  // 7
    
        // Верхняя грань
        0, dimensions.height, dimensions.width,  // 8
        dimensions.length, dimensions.height, dimensions.width,  // 9
        dimensions.length, dimensions.height, 0,  // 10
        0, dimensions.height, 0,  // 11
    
        // Нижняя грань
        0, 0, dimensions.width,  // 12
        dimensions.length, 0, dimensions.width,  // 13
        dimensions.length, 0, 0,  // 14
        0, 0, 0,  // 15
    
        // Правая грань
        dimensions.length, 0, dimensions.width,  // 16
        dimensions.length, dimensions.height, dimensions.width,  // 17
        dimensions.length, dimensions.height, 0,  // 18
        dimensions.length, 0, 0,  // 19
    
        // Левая грань
        0, 0, dimensions.width,  // 20
        0, dimensions.height,dimensions.width,  // 21
        0, dimensions.height, 0,  // 22
        0, 0, 0   // 23
    ]);
    
    // Индексы для треугольников, которые образуют каждую грань
    const indices: Uint16Array = new Uint16Array([
        // Передняя грань
        0, 1, 2,  0, 2, 3,
        // Задняя грань
        4, 5, 6,  4, 6, 7,
        // Верхняя грань
        8, 9, 10,  8, 10, 11,
        // Нижняя грань
        12, 13, 14,  12, 14, 15,
        // Правая грань
        16, 17, 18,  16, 18, 19,
        // Левая грань
        20, 21, 22,  20, 22, 23
    ]);

    geometryBuffer.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometryBuffer.setIndex(new THREE.BufferAttribute(indices, 1));

    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: meshColor, wireframe: true });
    const cube: THREE.Mesh = new THREE.Mesh(geometryBuffer, material);
    const randomX: number = (Math.random() - 0.5) * 3;
    const randomY: number = (Math.random() - 0.5) * 3;
    const randomZ: number = (Math.random() - 0.5) * 3;
    cube.position.set(randomX, randomY, randomZ);
    
    return cube;   
}

export function createPyramid( dimensions: Types.Dimensions): THREE.object3D{
    console.log("Create pyramid function");

    const meshColor: THREE.color = randomColor();
    const geometryBuffer: THREE.BufferGeometry = new THREE.BufferGeometry();

    const vertices: Float32Array = new Float32Array([
        0, 0,  dimensions.width,  // 0 - левый нижний передний угол
        dimensions.length, 0,  dimensions.width,  // 1 - правый нижний передний угол
        dimensions.length, 0, 0,  // 2 - правый нижний задний угол
        0, 0, 0,  // 3 - левый нижний задний угол
        dimensions.length/2, dimensions.height , dimensions.width/2   // 4 - верхушка пирамиды
    ]);  

    const indices: Uint16Array = new Uint16Array([
        0, 1, 4,  // Передняя грань
        1, 2, 4,  // Правая грань
        2, 3, 4,  // Задняя грань
        3, 0, 4,  // Левая грань
        0, 1, 2,  // Нижняя грань (первая половина)
        2, 3, 0   // Нижняя грань (вторая половина)
]);

    geometryBuffer.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometryBuffer.setIndex(new THREE.BufferAttribute(indices, 1));

    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: meshColor, wireframe: true });
    const pyramid: THREE.Mesh = new THREE.Mesh(geometryBuffer, material);
    const randomX: number = (Math.random() - 0.5) * 5;
    const randomY: number = (Math.random() - 0.5) * 5;
    const randomZ: number = (Math.random() - 0.5) * 5;
    pyramid.position.set(randomX, randomY, randomZ);
    return pyramid;   
}