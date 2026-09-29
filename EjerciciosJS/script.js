const diccionario = [
    "casa", "perro", "gato", "sol", "luna", "mesa", "silla", "libro", "agua", "fuego",
    "tierra", "viento", "rojo", "azul", "verde", "blanco", "negro", "alto", "bajo", "gordo",
    "flaco", "rapido", "lento", "nuevo", "viejo", "feliz", "triste", "fuerte", "debil", "largo",
    "corto", "comer", "beber", "vivir", "morir", "saltar", "correr", "dormir", "soñar", "viajar",
    "codigo", "web", "raton", "teclado", "pantalla", "sistema", "datos", "nube", "red", "seguridad"
];

const btnGenerar = document.getElementById("btnGenerar");
const inputNumero = document.getElementById("numPalabras");
const checkMayusculas = document.getElementById("checkMayusculas");
const checkNoRepetir = document.getElementById("checkRepetir");
const resultadoTexto = document.getElementById("resultadoPassword");

function generarPassword() {
    let cantidad = parseInt(inputNumero.value);
    let quiereMayusculas = checkMayusculas.checked;
    let noRepetir = checkNoRepetir.checked;
    
    // Validar cantidad
    if (cantidad < 1) cantidad = 1;
    if (cantidad > 10) cantidad = 10;

    let palabrasSeleccionadas = [];
    let diccionarioCopia = [...diccionario]; 

    for (let i = 0; i < cantidad; i++) {
        let palabraElegida = "";

        if (noRepetir) {
            if (diccionarioCopia.length === 0) break; 
            
            let indiceAleatorio = Math.floor(Math.random() * diccionarioCopia.length);
            palabraElegida = diccionarioCopia[indiceAleatorio];
            
            diccionarioCopia.splice(indiceAleatorio, 1); 
        } else {
            let indiceAleatorio = Math.floor(Math.random() * diccionario.length);
            palabraElegida = diccionario[indiceAleatorio];
        }

        if (quiereMayusculas) {
            palabraElegida = palabraElegida.charAt(0).toUpperCase() + palabraElegida.slice(1);
        }

        palabrasSeleccionadas.push(palabraElegida);
    }

    let passwordFinal = palabrasSeleccionadas.join("");

    resultadoTexto.textContent = passwordFinal;
}

btnGenerar.addEventListener("click", generarPassword);