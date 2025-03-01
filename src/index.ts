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
    threeSetup.renderer.render(threeSetup.scene, threeSetup.camera);    
}
