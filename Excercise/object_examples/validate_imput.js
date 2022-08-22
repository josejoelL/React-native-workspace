const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

// Se utiliza $ para identificar que una variable o constante hace referencia 
// a elementos del DOM
const $DESCRIPTION = document.getElementById("description");
const $CALORIAS = document.getElementById("calorias");
const $CARBOIDRATOS = document.getElementById("carboidratos");
const $PROTEINAS = document.getElementById("proteinas");
const ERROR_CLASS = "is-invalid";

// Asignacion de evntos siempre que se desea asignar un evento aun elemento del DOM
// es necesario utilizar addEventListener
$DESCRIPTION.addEventListener("keypress", () => $DESCRIPTION.classList.remove(ERROR_CLASS));
$CALORIAS.addEventListener("keypress", () => $CALORIAS.classList.remove(ERROR_CLASS));
$CARBOIDRATOS.addEventListener("keypress", () => $CARBOIDRATOS.classList.remove(ERROR_CLASS));
$PROTEINAS.addEventListener("keypress", () => $PROTEINAS.classList.remove(ERROR_CLASS));

// funcion para validar los inputs
const validateInputs = () => {
    // Por cuestion de buenas practicas el resultado de una condición
    // Ternaria tiene que ser asignada a una variable o constante
    const DESCRIPTION_CLASS = (($DESCRIPTION.value) ? "" : ERROR_CLASS);
    $DESCRIPTION.classList.add(DESCRIPTION_CLASS);

    const CALORIAS_CLASS = (($CALORIAS.value) ? "" : ERROR_CLASS);
    $CALORIAS.classList.add(CALORIAS_CLASS);

    const CARBOIDRATOS_CLASS = (($CARBOIDRATOS.value) ? "" : ERROR_CLASS);
    $CARBOIDRATOS.classList.add(CARBOIDRATOS_CLASS);

    const PROTEINAS_CLASS = (($PROTEINAS.value) ? "" : ERROR_CLASS);
    $PROTEINAS.classList.add(PROTEINAS_CLASS);

    if ($DESCRIPTION.value && $CALORIAS.value && $CARBOIDRATOS.value && $PROTEINAS.value) {
        console.log("Oki Doki");
    }
};