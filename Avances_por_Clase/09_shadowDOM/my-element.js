/* N_9.1: Shadow dom nos ayuda a generar un encapsulado de este "DOM independiente" y separándole del "DOM global".
¿Que significa esto? 
Que los estilos CSS de este componente no se reescribirán con los estilos que estén fuera de este archivo, como 
por ejemplo: las clases CSS del archivo index.html  */

class myElement extends HTMLElement {
    constructor() {
        super();
        /* N_9.2: Dentro del constructor() se debe agregar una nueva instancia de la API shadow DOM.
        Para hacerlo, se declara el this y se llama al método attachShadow().
        Dentro del paréntesis, se agregan llaves {} y dentro de estas, se agrega un modo que sera "open". 
        (Por BUENAS PRACTICAS; siempre el mode de shadow DOM debe ser open). */
        this.attachShadow({ mode: "open" });
    }
    /* N_9.3: Dentro del inspector de elementos si se posiciona sobre la etiqueta <my-element>, si se despliega la 
    flecha hacia abajo, aparecerá una sección que dirá #shadow-root donde aparecerá todo el código de este componente, 
    incluido el código CSS. */

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2 class="title">Hola mundo!</h2>
                <div>
                    <p>Soy más texto ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    /* N_9.6: Se crea una regla CSS con una clase que es igual a la que esta en index.html pero estas no se reescriben ya 
    que cada una actúa por separado. */
    getStyles() {
        return `
            <style>
                .title {
                    color: red;
                }
            </style>
        `;
    }

    /* N_9.4: Al this se le debe agregar la propiedad shadowRoot para indicar que se creara una raíz, para indicarle al 
    compilador que entre el shadow DOM y que genere un appendChild del contenido que se esta creando en el template. */
    /* N_9.5: DATO EXTRA: uno de los cambios que se debe a considerar es que al comenzar a utilizar el shadowRoot, para 
    seleccionar un elemento en especifico dentro del DOM antes lo hacia utilizando document.getElementBy() desde ahora 
    se deberá hacer shadowRoot.getElementBy() para poder obtener el elemento que este dentro del shadow DOM. */
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}
customElements.define("my-element", myElement);