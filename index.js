const temaOscuro = () => {
    document.querySelection("body").setAttribute("data-bs-theme", "dark");
    document.querySelection("#dl-icon").setAttribute("class", "bi bi-sun-fill");


}

const temaClaro = () => {

    document.querySelection("body").setAttribute("data-bs-theme", "light");
    document.querySelection("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const CambiarTema = () => {

    document.querySelection("body").gettAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}