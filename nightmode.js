const actualizarNavbar = (tema) => {
    const navbarMobile = document.querySelector(".navbar_mobile");
    if (tema === "dark") {
        navbarMobile.setAttribute("data-bs-theme", "dark");
    } else {
        navbarMobile.setAttribute("data-bs-theme", "light");
    }
}

const actualizarCollapse = (tema) => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (tema === "dark") {
        navbarCollapse.setAttribute("data-bs-theme", "dark");
    } else {
        navbarCollapse.setAttribute("data-bs-theme", "light");
    }
}

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill white-icon");
    document.querySelector("#tema-btn").setAttribute("class", "bi bi-sun-fill white-icon");
    localStorage.setItem("tema", "dark");
    actualizarNavbar("dark");
    actualizarCollapse("dark");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    document.querySelector("#tema-btn").setAttribute("class", "bi bi-moon-fill");
    localStorage.setItem("tema", "light");
    actualizarNavbar("light");
    actualizarCollapse("light");
}

const CambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ? temaOscuro() : temaClaro();
}

window.onload = () => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "dark") {
        temaOscuro();
    } else if (temaGuardado === "light") {
        temaClaro();
    }

}


// función que oculta el icono de carga después de 5 segundos
function ocultarCarga() {
    setTimeout(function() {
      document.getElementById("loader-wrapper").style.display = "none";
    }, 2000); // 5000 milisegundos = 5 segundos
  }
  
  // evento que se ejecuta cuando la página ha cargado completamente
  window.addEventListener("load", function() {
    ocultarCarga();
  });
  

