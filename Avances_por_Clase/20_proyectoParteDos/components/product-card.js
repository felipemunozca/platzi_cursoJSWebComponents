class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    /* N_20.6: Se declara el static get para poder "ACCEDER" para el método observedAttributes() que estará observando los 
    cambios de ciertos atributos.
    IMPORTANTE: el nombre del método no se puede cambiar ya que es una palabra reservada de ES6+.
    Se retornan un arreglo con los atributos que estará observando.  */
    static get observedAttributes() {
        return ["img","title","price","description","collection"];
    }

    /* N_20.7: Ahora se puede declarar el ciclo de vida attributeChangedCallback() el cual recibirá 3 parámetros:
    - el atributo
    - el valor antiguo
    - el valor nuevo */
    attributeChangedCallback(attr, oldVal, newVal) {
        /* N_20.8: Se crea una validación por cada atributo a revisar.
        SI el atributo es igual a cada variable, entonces la variable sera igual al nuevo valor. */

        /* N_20.9: Si se deja el código tal cual lo hace el profesor, en la consola aparecerá el error:
        "Uncaught RangeError: Maximum call stack size exceeded".
        Para solucionar el problema, se puede utilizar la sugerencia de un usuario en la clase 13, crear una doble validación 
        utilizando una comparación con el valor antiguo y asi solo entraría en la validación los atributos que estén cambiando.
        */
        /*
        if (attr === "img") {
            this.img = newVal;
        }
        if (attr === "title") {
            this.title = newVal;
        }
        if (attr === "price") {
            this.price = newVal;
        }
        if (attr === "description") {
            this.description = newVal;
        }
        if (attr === "collection") {
            this.collection = newVal;
        }
        */
        
        if (attr === "img" && oldVal !== newVal) {
            this.img = newVal;
        }
        if (attr === "title" && oldVal !== newVal) {
            this.title = newVal;
        }
        if (attr === "price" && oldVal !== newVal) {
            this.price = newVal;
        }
        if (attr === "description" && oldVal !== newVal) {
            this.description = newVal;
        }
        if (attr === "collection" && oldVal !== newVal) {
            this.collection = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        /* N_20.2: Se agregan clases a las etiquetas de la plantilla, los nombres están definidos en la documentación del 
        proyecto.
         * 
        N_20.10: Ya con las variables creadas, se puede cambiar los textos estáticos agregados para realizar las pruebas y 
        dejar todo listo para recibir la información por fuera del componente. */
        template.innerHTML = `
            <main class="container">
                <section class="imgBox">
                    <img src="${this.img}" alt="Zapatos deportivos para correr color azul"/>
                </section>
                <section class="details">
                    <div class="content">
                        <h2>${this.title} <span>${this.collection}</span></h2>
                        <p>${this.description}</p>
                        <h3>${this.price}</h3>
                        <button>Comprar</button>
                    </div>
                </section>
            </main>
            ${this.getStyles()}
        `;
        return template;
    }

    /* N_20.3: Se crea el método para cargar los estilos al componente. */
    getStyles() {
        /* N_20.4: Se agregan los estilos generales (:host) asi como los estilos de etiquetas y clases siguiendo las 
        sugerencias de la documentación.
         * 
        N_20.5: Ya que el proyecto fue diseñado pensando en mobile first, se agregan estilos CSS utilizando un 
        media query cuando el ancho de la pantalla sea superior a 1080 pixeles, asi la imagen rotara y la distribución de 
        la tarjeta también cambiara. */
        return `
            <style>
                :host {
                    --primary-background: #5a6cb2;
                    width: 80%;
                    max-width: 900px;
                    min-width: 280px;
                    margin: 0 auto;
                }
                .container {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    width: 900px;
                    height: 600px;
                    margin: 20px;
                    background-color: #fff;
                }
                .container .imgBox {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    width: 50%;
                    height: 100%;
                    background-color: var(--primary-background)
                }
                .container .imgBox:before {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    font-size: 8em;
                    font-weight: 800;
                    color: #000;
                    content: 'Nike';
                    opacity: 0.1;
                }
                .container .imgBox img {
                    position: relative;
                    top: 100px;
                    left: -50px;
                    width: 720px;
                    height: 480px;
                    transform: rotate(-30deg);
                }
                .container .details {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 40px;
                }
                .container .details h2 {
                    margin-bottom: 25px;
                    font-size: 2.5em;
                    line-height: 0.8em;
                    color: #444;
                }
                .container .details h2 span {
                    font-size: 0.4em;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #999;
                }
                .container .details p {
                    max-width: 85%;
                    margin-left: 15%;
                    margin-bottom: 35px;
                    color: #333;
                    font-size: 15px;
                }
                .container .details h3 {
                    float: left;
                    font-size: 2.5em;
                    color: #a2a2a2;
                }
                .container .details button {
                    margin-top: 35px;
                    float: right;
                    padding: 15px 20px;
                    font-size: 16px;
                    color: #fff;
                    letter-spacing: 1px;
                    font-weight: 600;
                    text-transform: uppercase;
                    border-radius: 40px;
                    background-color: #5a6cb2;
                    cursor: pointer;
                }

                @media (max-width: 1080px) {
                    .container {
                        height: auto;
                        width: auto;
                    }
                    .container .imgBox {
                        padding: 40px;
                        width: 100%;
                        box-sizing: border-box;
                        height: auto;
                        text-align: center;
                    }
                    .container .imgBox img {
                        left: initial;
                        width: 100%;
                        height: auto;
                        transform: rotate(0deg);
                    }
                    .container .details {
                        width: 100%;
                        height: auto;
                        padding: 20px;
                    }
                    .container .details p {
                        max-width: 100%;
                        margin-left: 0;
                    }
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

customElements.define("product-card", productCard);