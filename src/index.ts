import './styles/style.css';
import {createField} from './field';
import {createControls} from './controls';
export * from './types';
import { viewList } from './list';
import { threeSetup } from './field';
//import { saveSetup } from './storage';

const appEl: HTMLElement | null = document.querySelector("#app");

if (!appEl) {
    throw new Error('There is no the element #app')
} else {
    createField();
    createControls();
    viewList();
    //saveSetup(threeSetup);
    threeSetup.renderer.render(threeSetup.scene, threeSetup.camera);    
}
