import { html, render as litRender } from 'https://unpkg.com/lit-html/lit-html.js';

class MyElement extends HTMLElement {
  constructor() {
    super();
    this.array = [1, 1];
  }
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  push(value) {
    this.array.push(value);
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <my-slot>
        ${this.array.map(() => `<my-child></my-child>`).join('')}
      </my-slot>`;
  }
}
class MyBuggedElement extends MyElement {
  render() {
    litRender(
      html`
    <my-slot>
      ${this.array.map(() => html`<my-child></my-child>`)}
    </my-slot>`,
      this.shadowRoot
    );
  }
}
class MySlot extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<div><slot></slot></div>`;
  }
}

class MyChild extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<span>Hi </span>`;
  }
}

customElements.define('my-element', MyElement);
customElements.define('my-bugged-element', MyBuggedElement);
customElements.define('my-slot', MySlot);
customElements.define('my-child', MyChild);
