import { addForm } from "./addForm";
import './styles/style.css';

const appEl: HTMLElement | null = document.querySelector("#app");
if (!appEl) {
    throw new Error('There is no the element #app')
}
addForm(appEl);
