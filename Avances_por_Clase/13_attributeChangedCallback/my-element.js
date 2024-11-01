class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    /* N_13.1: Al quitar las variables que estaban dentro del constructor, se debe crear un observed que estará "observando" a 
    los atributos.
    Se declara un "static get" con un nombre que puede ser cualquiera.
     * 
    N_13.2: Se deben declarar los atributos a observar de forma constante, si no se declara no lo considerara.
    Los nombres deben ser los mismos que los atributos del index. */
    static get observedAttributes() {
        return ["titulo", "parrafo", "img"];
    }
    
    /* N_13.3: attributeChangedCallback() es un ciclo de vida que se utiliza para monitorear los cambios de forma dinámica.
    Recibirá 3 parámetros:
    - el atributo.
    - el valor antiguo.
    - el nuevo valor.
    Se crean unas validaciones, si el atributo es igual al nombre del atributo, entonces la variable sera igual nuevo valor.
    Se crea una validación por cada atributo. */
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "titulo") {
            this.titulo = newVal;
        }
        if (attr === "parrafo") {
            this.parrafo = newVal;
        }
        if (attr === "img") {
            this.img = newVal;
        }
        /* N_13.4: APORTE COMPAÑEROS:
        Para evitar el error de consola:
        "Uncaught RangeError: Maximum call stack size exceeded. at HTMLElement.attributeChangedCallback"
        Este error proviene de "observedAttributes" ya que esta escuchando cualquier cambio de los 3 atributos. Entonces genera
        un loop y manda el error en consola.
        Para solucionarlo, se valida si el atributo realmente cambio y entonces se agrega el nuevo valor para no tener un loop. */
        if (oldVal !== newVal) {
            this[attr] = newVal
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h1>${this.titulo}</h1>
                <div>
                    <p>${this.parrafo}</p>
                </div>
                <img src="${this.img}" alt="">
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