/* N_12.1: Hay otras 2 forma de hacer el manejo de datos dinámicos por fuera del componente.
Una de estas es a traves de atributos.
Como el componente ya se convirtió en una etiqueta HTML, se pueden utilizar ciertos ATRIBUTOS que tenga la etiqueta para 
obtener su valor. */
class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        /* N_12.4: Dentro del constructor, se crean variables para obtener el ATRIBUTO de la etiqueta utilizando el método 
        getAttribute(). */
        this.titulo = this.getAttribute("titulo");
        this.parrafo = this.getAttribute("parrafo");
        this.imagen = this.getAttribute("img");
    }

    /* N_12.3: Se quitan las etiquetas de <slot> y se agrega una etiqueta <img> */
    /* N_12.5: Una vez que las variables estén creadas, utilizando ${} se pueden declarar dentro de la estructura HTML. */
    /* N_12.8: Importante, para poder ver el resultado de agregar un nuevo atributo, también se debe agregar en la plantilla 
    HTML, por lo que debo agregar la variable parrafo. */
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h1>${this.titulo}</h1>
                <div>
                    <p>${this.parrafo}</p>
                </div>
                <img src="${this.imagen}" alt="">
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