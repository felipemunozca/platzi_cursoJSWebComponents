/* N_14.1: disconnectedCallback es un ciclo de vida del componente que se utiliza para retirar algo desde el DOM.
Ayuda a desconectar ciertas cosas del componente como borrar variables, borrar eventos para liberar espacio de 
memoria. */

class MyCustomElement extends HTMLElement {
    /* N_14.3: Dentro de este ejercicio se trataran de utilizar todos los ciclos de vida.
    Se comienza con el primer ciclo de vida, el constructor, donde se establece en memoria lo que se va a utilizar 
    para crear el componente.
    Se agrega un mensaje para mostrar en consola. 
    PERO MUY IMPORTANTE: al agregar el mensaje no quiere decir que ya exista en el DOM. */
    constructor() {
        super();
        console.log("Hola desde el constructor - Memoria");
    }

    /* N_14.4: Para que el primer mensaje exista en el DOM se debe llamar al segundo ciclo de vida connectedCallback().
    Se agrega un mensaje desde este método y aquí es donde se crea el elemento en el nodo con la interacción en el DOM. */
    connectedCallback() {
        console.log("Hola desde el DOM");
    }

    /* N_14.5: Se llama al tercer ciclo de vida disconnectedCallback() que se utiliza para retirar el elemento del DOM. */
    disconnectedCallback() {
        console.log("Adios del DOM");
    }
}

/* N_14.6: Se da de alta el componente agregando el nombre de la nueva etiqueta que se creo en el archivo index.html y 
el nombre de la clase. */
customElements.define("my-custom-element", MyCustomElement);

/* N_14.7: Se retira el elemento que esta en el nodo. */
document.querySelector("my-custom-element").remove();