import './styles/style.css';
import './field';

const appEl: HTMLElement | null = document.querySelector("#app");
if (!appEl) {
    throw new Error('There is no the element #app')
}