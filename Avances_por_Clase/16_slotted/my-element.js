/* N_16.1: En esta clase veremos el uso del pseudo-elemento ::slotted que sirve para poder agregar estilos específicos a 
todo el contenido dinámico que venga desde fuera del componente y se vaya a colocar en las etiquetas slot. */

class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h1> 
                    <slot name="title"></slot> 
                </h1>
                <p>
                    <slot name="parrafo"></slot>
                </p>
                <slot></slot>
            </section>

            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        /* N_16.3: Se darán estilos a los elementos que vienen por fuera y que se inyectaran en los slot.
        El pseudo-elemento ::slotted SOLO SE UTILIZA cuando esta activado el SHADOW DOM.
        Se agregaran estilos específicos a cada etiqueta <span>.
        Se escribe ::slotted() y dentro de los paréntesis se debe escribir el tipo de etiqueta que viene por fuera.
        Se pueden agregar a TODAS las etiquetas que vienen por fuera utilizando el símbolo asterisco *.
        Para agregarle estilos utilizando una clase, dentro de los paréntesis se agrega el nombre de la clase con un punto 
        antes (.text). */
        return `
            <style>
                ::slotted(span) {
                    font-size: 30px;
                    color: red;
                }
                ::slotted(.text) {
                    color: blue;
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