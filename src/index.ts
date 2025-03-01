import './styles/style.css';
import {createField} from './field';
import {createControls} from './controls';
export * from './types';

const appEl: HTMLElement | null = document.querySelector("#app");

if (!appEl) {
    throw new Error('There is no the element #app')
} else {
    createControls();
    createField();

}
