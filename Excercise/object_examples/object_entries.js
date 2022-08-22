// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const attributesToString = (obj = {}) => {
    const ENTRIES = Object.entries(obj);
    const ATTRS = [];
    for (let i = 0; i < ENTRIES.length; i += 1) {
        const AUX = ENTRIES[i]
        const ATTR = AUX[0];
        const VALUE = AUX[1];
        ATTRS.push(` ${ATTR}="${VALUE}"`);
    }
    return ATTRS.join("");
};