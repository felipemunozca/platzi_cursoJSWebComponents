class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplate() {
        const template = document.createElement("template");
        /* N_11.1: Para hacer uso de mas de una etiqueta <slot> se recomienda agregarles un atributo "nombre" que sera único 
        para cada etiqueta. */
        template.innerHTML = `
            <section>
                <h1> 
                    <slot name="titulo"></slot> 
                </h1>
                <p>
                    <slot name="parrafo"></slot>
                </p>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
            <style>
                h1 {
                    color: red;
                }
            </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", myElement);