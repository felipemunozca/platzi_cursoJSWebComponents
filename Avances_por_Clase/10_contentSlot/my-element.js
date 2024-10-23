/* N_10.1: Manejo de datos: como dice el nombre, se utiliza para manejar los datos dinámicos desde afuera de los 
componentes.
Un ejemplo serian las etiquetas de textos <p> <h1> <h2> <span>. */

class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplate() {
        const template = document.createElement("template");
        /* N_10.2: Dentro de la plantilla HTML, se quita el texto que estábamos agregando de forma directa.
        Se agrega la etiqueta <slot> que es una etiqueta de HTML 5 que nos ayuda a generar un texto o cierto contenido 
        que se pasara fuera de la etiqueta. */
        template.innerHTML = `
            <section>
                <h2>
                    <slot></slot>
                </h2>
                <div>
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
            <style>
                h2 {
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