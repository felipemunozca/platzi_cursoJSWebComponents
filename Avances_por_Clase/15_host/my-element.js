/* N_15.1: en esta clase veremos la pseudo-clase :HOST que se utiliza para darle estilos a nuestro componente web 
(no se trata necesariamente de los estilos visuales).
Se trata de los estilos que vienen definidos por default con una etiqueta, como pueden ser display, padding y margin.
:host da estilos al componente . 
La pseudo-clase :host se utiliza dentro del método donde se escriben los estilos CSS del componente getStyles().
*/

class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    /* N_15.3: Se copia y pega desde la pestaña de recursos, el código para generar el constructor y el template.
     */
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
        /* N_15.4: Dentro de este método se generaran los estilos.
        Se declara la pseudo-clase :host que indica que los estilos que se están creando solo serán aplicables al componente 
        mismo.
         * 
        N_15.7: La clase :host nos permite generar ciertos estilos con relación a ciertas reglas.
         * 
        N_15.9: Luego de personalizar los componentes desde el index, se le indica al :host si tiene un elemento con la clase 
        (.blue) que ejecute sus propias reglas CSS. 
         * 
        N_15.10: Ademas se pueden crear estilos por atributo que tenga un elemento, en este caso que busque el atributo que se 
        llame ([yellow]). 
        IMPORTANTE, el nombre del atributo debe ir entre paréntesis cuadrado [].
         * 
        N_15.12: Otra forma de utilizar :host es agregándole un contexto, es decir, en que elemento HIJO o PADRE tenemos el componente.
        En este caso, se buscara mediante el contexto, un elemento que sera un <article> y que tendrá una clase ".card", de 
        esta manera si existe otro article o otro elemento con la misma clase, pero sin el orden de las etiquetas, no se 
        agregaran estos estilos. */
        return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-size: 20px;
                    background: grey;
                }
                :host(.blue) {
                    background: blue; 
                }
                :host([yellow]) {
                    background: yellow;
                }
                :host([yellow]) h1{
                    color: gray;
                }
                :host([yellow]) p {
                    color: red;
                }
                :host-context(article.card) {
                    display: block;
                    max-width: 100%;
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