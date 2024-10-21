class myElement extends HTMLElement {
    constructor() {
        super();
    }

    /* N_7.2: Para tener un código mas ordenado, lo mejor es desde ya comenzar a trabajar con métodos que indiquen que hace 
    cada cosa.
    Se crea una función para obtener el contenido de la plantilla, puede tener cualquier nombre.  */
    getTemplate() {
        /* N_7.3: Se crea una constante para generar la etiqueta <template>. (En la clase pasada su utilizo un <div> para
        realizar esta misma configuración, pero esta es la forma correcta de hacerlo). */
        const template = document.createElement("template");
        /* N_7.4: Se crea una estructura html similar a la que se agrego en el archivo index. */
        /* N_7.9: Para llamar los estilos CSS, ya que estoy dentro de un literal string (cadena literal) se puede llamar al 
        método utilizando ${}. */
        template.innerHTML = `
            <section>
                <h2 class="title">Hola mundo desde JS!</h2>
                <div>
                    <p>Soy más texto ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        /* N7.5: Para que el template pueda ser visualizado en el DOM, siempre se debe retornar su constante. */
        return template;
    }
    
    /* N_7.8: Se crea un nuevo método para definir los estilos CSS. 
    Aquí no se utiliza la propiedad innerHTML, sino que se declara directamente el return y dentro se agrega la etiqueta 
    <style> con las reglas. */
    /* N_7.10: Aunque se crea una regla para cambiar el color de la etiqueta <h2> a rojo, esto no pasa ya que por 
    especificidad, la clase title con el color azul es mas importante. */
    getStyles() {
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
    }
    
    /* N_7.6: Se crea un nuevo método para renderizar el template dentro del DOM.  */
    render() {
        /* N_7.7: Se utiliza el this para indicar que dentro de este archivo, se utilizara el método appendChild() para agregar 
        el método que cree getTemplate() seguido de la propiedad content, y finalmente el método cloneNode() para que el 
        contenido se pueda clonar y agregarse en el DOM. Se debe agregar la respuesta booleana true. */
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    
    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element",myElement);