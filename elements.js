import { LitElement, html } from '@polymer/lit-element/lit-element.js';
import { repeat } from 'lit-html/lib/repeat.js';

class MyChild extends LitElement {
    static get properties() { return { obj: Object }}

    constructor() {
        super();
    }

    _render({ obj }) {
        return html`
            <span>${obj.val}</span>
        `;
    }
}

class MySlot extends LitElement {
    static get properties() { return {}}

    constructor() {
        super();
    }

    _render({}) {
        return html`
            <slot></slot>
        `;
    }
}

class MyElement extends LitElement {
    static get properties() { return { array: Array, bool: Boolean }}

    constructor() {
        super();
    }

    _render({ bool, array }) {
        array = array||[{val:1}];
        
        return html`
            <my-slot>
                ${repeat(array, i=>i, i=>html`
                    <my-child obj=${i}></my-child>
                `)}
            </my-slot>
        `;
        /*return html`
            <my-slot>
                ${array.map(i=>html`
                    <my-child obj=${i}></my-child>
                `)}
            </my-slot>
        `;*/
    }
}
customElements.define('my-element', MyElement);
customElements.define('my-child', MyChild);
customElements.define('my-slot', MySlot);
console.log('hi');
