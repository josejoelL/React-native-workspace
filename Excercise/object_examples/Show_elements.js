const renderItems = () => {
    // otra manera de poder obtener un elemento por el name TAG
    // solo que este metodo consigue un arreglo de elementos
    const $CONTAINER = document.getElementsByTagName("tbody")[0];
    $CONTAINER.innerHTML = "";
    const ROWS = LIST.map((item) => {
        const {
            calorias, description,
            carboidratos, proteinas,
        } = item;
        return tableRow([description, calorias, carboidratos, proteinas]);
    });
    $CONTAINER.innerHTML = ROWS.join("");
};