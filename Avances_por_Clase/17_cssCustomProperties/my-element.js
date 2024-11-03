/* N_17.1: Como se ha comentado en anteriores clases generar un componente re-utilizable implica que no necesario ir 
hasta el código de este y cambiarlo, entonces lo que se puede hacer es re-asignar nuestros estilos por fuera.
Con SHADOW DOM esta idea que se plantea de poder cambiar nuestros estilos por fuera NO ES POSIBLE, pero esto en cierto 
punto es mentira ya que se puede hacer a traves de las Custom Properties que son unas variables en donde generamos 
una variable y de valor tenemos un estilo. */

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
                <div>
                    <p>
                        <slot name="parrafo"></slot>
                    </p>
                </div>
                <slot></slot>
            </section>

            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        /* N_17.3: Los estilos que se agregan a la pseudo-clase :host son equivalentes a los estilos de :root por lo que se 
        aplican a todos los elementos.
        Se crean variables de CSS para asignar colores y tamaños.
         * 
        N_17.4: Se comienzan a utilizar las variables de CSS para agregarle colores de fondo tanto a la etiqueta <section> 
        como al <div> que esta dentro de la anterior (esto es lo que se llama especificidad, declarar las etiquetas por su 
        orden siendo mas detallado).
        Se agregan las variables de tamaño para las etiquetas <h1> y <p>. */
        return `
            <style>
                :host{
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 30px;
                    --heading-secondary: 25px;
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                }
                section {
                    background: var(--primary-color)
                }
                section div {
                    background: var(--secondary-color)
                }
                h1 {
                    font-size: var(--heading-primary)
                }
                p {
                    font-size: var(--heading-secondary)
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