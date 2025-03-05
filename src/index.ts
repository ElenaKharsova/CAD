import './styles/style.css';
import {createField} from './field';
import {createControls} from './controls';
export * from './types';
import { viewList } from './list';
import { threeSetup } from './field';

const appEl: HTMLElement | null = document.querySelector("#app");

if (!appEl) {
    throw new Error('There is no the element #app')
} else {
    createField();
    createControls();
    viewList();
    console.log("threeSetup view", threeSetup);
    console.log("Scene children 2222222222222222222222:", threeSetup.scene.children);
    threeSetup.renderer.render(threeSetup.scene, threeSetup.camera);    
}
