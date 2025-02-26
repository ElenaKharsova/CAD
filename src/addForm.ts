export function addForm(el: Element) {
    const button: HTMLButtonElement = document.createElement("button");
    button.innerText = "Create figure";
    el.appendChild(button);
}  