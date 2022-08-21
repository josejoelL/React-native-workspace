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

// para poder invocar todo de la siguiente manera. 

