/* N_19.3: Se crea la clase que contendrá al componente y se extiende el uso de HTMLElement.
Dentro, SIEMPRE LO PRIMERO sera agregar el constructor(){} y dentro de las llaves, el método super() seguido de la activación 
del uso de Shadow DOM utilizando el método attachShadow() seguido del modo "open". */
class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    /* N_19.6: Se crea el método para poder generar el template o plantilla (el método puede tener cualquier nombre).
     */
    getTemplate() {
        /* N_19.7: Se crea una constante la cual sera igual al documento y el método createElement().  */
        const template = document.createElement("template");
        /* N_19.9: Se crea la estructura del literal template como sugiere el layout del curso.  */
        template.innerHTML = `
            <main class="container">
                <section class="imgBox">
                    <img src="" alt="Zapatos deportivos para correr color azul"/>
                </section>
                <section class="details">
                    <div class="content">
                        <h2>Titulo producto</h2>
                        <p>descripción</p>
                        <h3></h3>
                        <button>Comprar</button>
                    </div>
                </section>
            </main>
        `;
        /* N_19.8: Importante agregar el return para obtener el código del template cuando se ejecute el método getTemplate(). */
        return template;
    }

    /* N_19.10: Se crea el método para renderizar el componente.
    Se utiliza la propiedad shadowRoot seguido del método appendChild() y dentro de los paréntesis, se llama al método para 
    crear el template seguido de la propiedad content y el método cloneNode() para clonar el contenido.
    IMPORTANTE: no olvidar agregar el "true" para dar la instrucción que se clone todo el contenido. Si le pusiera el valor 
    "false", solo clonaría la primera etiqueta la cual seria la etiqueta <main>. */
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    
    /* N_19.11: Se crea el método para iniciar la renderizacion y mostrar el componente en el DOM.
    IMPORTANTE: como se esta iniciando el método render() debe llevar los paréntesis, sino no se ejecutara, este punto es muy 
    importante para todos los métodos de este archivo. */
    connectedCallback() {
        this.render();
    }
}

/* N_19.4: Se utiliza el método define() para poder entrelazar la etiqueta con la clase.
Se agregan dos parámetros:
- el nombre de la etiqueta.
- el nombre de la clase que contendrá el componente.  */
customElements.define("product-card", productCard);