const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data);

// Se utiliza $ para identificar que una variable o constante hace referencia
// a elementos del DOM
const $DESCRIPTION = document.getElementById("description");
const $CALORIAS = document.getElementById("calorias");
const $CARBOIDRATOS = document.getElementById("carboidratos");
const $PROTEINAS = document.getElementById("proteinas");
const ERROR_CLASS = "is-invalid";
const SUCCESS_CLASS = "is-valid";

// Arreglo de elementos
let LIST = [];

// consiguiendo los atributes para las etiquetas HTML
const attributesToString = (obj = {}) => {
    const ENTRIES = Object.entries(obj);
    const ATTRS = [];
    for (let i = 0; i < ENTRIES.length; i += 1) {
        const AUX = ENTRIES[i];
        const ATTR = AUX[0];
        const VALUE = AUX[1];
        ATTRS.push(`${ATTR}="${VALUE}"`);
    }
    return ATTRS.join("");
};

// Creando etiquetas html con atributos
const createTagAttr = obj => (content = "") => {
    const { tag, attr } = obj;
    return `
      <${tag}${attr ? ` ${attributesToString(attr)}` : ""}>
        ${content}
      </${tag}>`;
};

// Generando tag de maner dinamica
const createTag = (tag) => {
    const TAG = (typeof tag === "string")
        ? createTagAttr({ tag })
        : createTagAttr(tag);
    return TAG;
};

const trashIcon = createTag({ tag: "i", attr: { class: "fas fa-trash-alt" } })("");
const tableCell = createTag("td");
const tableCells = items => items.map(tableCell).join("");

const tableRowTag = createTag("tr");
const tableRow = items => compose(tableRowTag, tableCells)(items);


// Asignacion de evntos siempre que se desea asignar un evento aun elemento del DOM
// es necesario utilizar addEventListener
$DESCRIPTION.addEventListener("keypress", () => $DESCRIPTION.classList.remove(ERROR_CLASS));
$CALORIAS.addEventListener("keypress", () => $CALORIAS.classList.remove(ERROR_CLASS));
$CARBOIDRATOS.addEventListener("keypress", () => $CARBOIDRATOS.classList.remove(ERROR_CLASS));
$PROTEINAS.addEventListener("keypress", () => $PROTEINAS.classList.remove(ERROR_CLASS));

// Limpiando inputs
const cleanInputs = () => {
    $DESCRIPTION.classList.remove(SUCCESS_CLASS);
    $DESCRIPTION.value = "";
    $CALORIAS.classList.remove(SUCCESS_CLASS);
    $CALORIAS.value = "";
    $CARBOIDRATOS.classList.remove(SUCCESS_CLASS);
    $CARBOIDRATOS.value = "";
    $PROTEINAS.classList.remove(SUCCESS_CLASS);
    $PROTEINAS.value = "";
};

// Actualizando totales
const updateTotals = () => {
    let carboidratos = 0;
    let proteinas = 0;
    let calorias = 0;
    // Por buenas praxticas se utiliza un forEach y cumple la mism funcion que se busca
    // practicamente una funcion de alto orden, no utiizo el map por que  map siempre regresa
    // algo y de momento no importa capturar lo que regresa la iteracion que realizamos.
    LIST.forEach((item) => {
        carboidratos += item.carboidratos;
        proteinas += item.proteinas;
        calorias += item.calorias;
    });
    document.querySelector("#totalCalorias").textContent = calorias;
    document.querySelector("#totalCarboidratos").textContent = carboidratos;
    document.querySelector("#totalProteinas").textContent = proteinas;
};

// Permite realizar el rendereo de los items
const renderItems = () => {
    // otra manera de poder obtener un elemento por el name TAG
    // solo que este metodo consigue un arreglo de elementos
    const $CONTAINER = document.getElementsByTagName("tbody")[0];
    $CONTAINER.innerHTML = "";
    const ROWS = LIST.map((item, index) => {
        const {
            calorias, description,
            carboidratos, proteinas,
        } = item;
        const removeButton = createTag({
            tag: "button",
            attr: {
                class: "btn btn-outline-danger",
                onclick: `removeItem(${index})`,
            },
        })(trashIcon);

        return tableRow([description, calorias, carboidratos, proteinas, removeButton]);
    });
    $CONTAINER.innerHTML = ROWS.join("");
};


// Agregar elementos en la lista
const addElement = () => {
    const newItem = {
        description: $DESCRIPTION.value,
        calorias: parseInt($CALORIAS.value, 10),
        carboidratos: parseInt($CARBOIDRATOS.value, 10),
        proteinas: parseInt($PROTEINAS.value, 10),
    };
    LIST.push(newItem);
    cleanInputs();
    updateTotals();
    renderItems();
};

// funcion para validar los inputs
const validateInputs = () => {
    // Por cuestion de buenas practicas el resultado de una condición
    // Ternaria tiene que ser asignada a una variable o constante
    const DESCRIPTION_CLASS = (($DESCRIPTION.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $DESCRIPTION.classList.add(DESCRIPTION_CLASS);

    const CALORIAS_CLASS = (($CALORIAS.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $CALORIAS.classList.add(CALORIAS_CLASS);

    const CARBOIDRATOS_CLASS = (($CARBOIDRATOS.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $CARBOIDRATOS.classList.add(CARBOIDRATOS_CLASS);

    const PROTEINAS_CLASS = (($PROTEINAS.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $PROTEINAS.classList.add(PROTEINAS_CLASS);

    if ($DESCRIPTION.value && $CALORIAS.value && $CARBOIDRATOS.value && $PROTEINAS.value) {
        addElement();
    }
};

// Permite remover un item seleccionado
const removeItem = (position) => {
    LIST = LIST.filter((item, index) => position !== index);
    updateTotals();
    renderItems();
};