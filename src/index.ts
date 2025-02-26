import './styles/style.css';
import {createField} from './field';
export * from './types';

const appEl: HTMLElement | null = document.querySelector("#app");

if (!appEl) {
    throw new Error('There is no the element #app')
} else {
    createField();
    //document.querySelector(".btn_add")?.addEventListener('hower',)
}