/* N_19.1: Se crea la estructura del proyecto:
- archivo index.html
- archivo app.js
- archivo styles.css
- una carpeta components
- dentro de la carpeta el archivo product-card.js
- una carpeta imgs (buscar la imagen en la sección de Aportes)
 */

/* N_19.2: Desde este archivo se llamara al componente.
Si tuviéramos mas componentes, se haría dentro de este mismo archivo, solo seria necesario importarlos uno por uno y asi desde el archivo index.html solo se llama un archivo.
IMPORTANTE: si el auto-completar de VSC completa la ruta solo, se debe agregar la terminación del archivo .js si falta el programa no cargara las rutas. */
import "./components/product-card.js";