
/* N_7.2: Se crea una clase que se extiende de la API HTMLElement. */
class myElement extends HTMLElement {
    /* N_7.3: Lo primero es agregar un constructor PORQUE todas las clases que generen un componente web, necesitan de un 
    constructor. */
    constructor() {
        /* N_7.4: Como estamos heredando de una clase, se debe agregar super() para poder tener acceso a los elementos de la 
        clase HTMLElement. */
        super();

        /* N_7.7: Se utiliza JavaScript Vanilla para generar los nodos y crear un elemento <p>. */
        this.p = document.createElement("p");
    }

    /* N_7.8: Para visualizar la etiqueta <p> se declara el método connectedCallback() (palabra reservada, debe ser escrita 
    correctamente). */
    connectedCallback() {
        /* N_7.9: Se utiliza el this para indicar que se esta en la clase, seguido del valor "p" y la propiedad textContent 
        para agregarle el valor escrito a la etiqueta. */
        this.p.textContent = "Hola mundo!";
        /* N_7.10: Para agregar la etiqueta al DOM se utiliza el método appendChild() y le pasamos la etiqueta de esta clase 
        con this.p . */
        this.appendChild(this.p);

        /* N_7.14: Para agregar el template al DOM se utiliza el método appendChild() seguido del nombre de la constante. */
        this.appendChild(template);
    }
}


/* N_7.11: Existe otra forma de agregar html y css dentro de un elemento. Esta es mucho mas simple de entender y no se vuelve 
tan tediosa como la primera forma en donde se tiene que ir creando un nodo por cada etiqueta a utilizar. */

/* N_7.12: Se crea un elemento sera un <div> que se utilizara como un template o plantilla. */
const template = document.createElement("div");
/* N_7.13: Se llama al template y utilizando la propiedad innerHTML se crea el código como si se tratara de un archivo html, 
las etiquetas se abren y cierran y ademas se les puede agregar clases.
Otra característica es que se puede agregar código css para personalizar la plantilla directamente desde aquí. Se debe utilizar 
las etiquetas <style>. */
template.innerHTML = `
    <style>
        .texto {
            color: red;
        }
        p {
            color: blue;
        }
    </style>

    <p class="texto">Hola mundo 2!!</p>
    <p>texto ejemplo para la clase!</p>
`;



/* N_7.5: Para poder definir el código como una etiqueta, se utiliza la variable reservada customElements seguida del método 
define() que recibe dos parámetros:
el primero; el nombre de la etiqueta (Como regla, este nombre debe tener como mínimo dos palabras separadas por un guion)
el segundo; el nombre de la clase que cree donde esta el componente.
*/
customElements.define("my-element", myElement);

