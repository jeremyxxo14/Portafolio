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

const actualizarLoader = (tema) => {
    const loder = document.querySelector("#loader");
    if (tema === "dark") {
        loder.setAttribute("data-bs-theme", "dark");
    } else {
        loder.setAttribute("data-bs-theme", "light");
    }
}

const actualizarCardf = (tema) => {
    const flipcard_front = document.querySelector(".flip-card-front");
    if (tema === "dark") {
        flipcard_front.setAttribute("data-bs-theme", "dark");
    } else {
        flipcard_front.setAttribute("data-bs-theme", "light");
    }
}

const actualizarCardb = (tema) => {
    const flipcard_back = document.querySelector(".flip-card-back");
    if (tema === "dark") {
        flipcard_back.setAttribute("data-bs-theme", "dark");
    } else {
        flipcard_back.setAttribute("data-bs-theme", "light");
    }
}

const actualizarini_sesion = (tema) => {
    const inisesion = document.querySelector(".login-box");
    if (tema === "dark") {
        inisesion.setAttribute("data-bs-theme", "dark");
    } else {
        inisesion.setAttribute("data-bs-theme", "light");
    }
}


const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill white-icon");
    document.querySelector("#tema-btn").setAttribute("class", "bi bi-sun-fill white-icon");
    localStorage.setItem("tema", "dark");
    actualizarNavbar("dark");
    actualizarCollapse("dark");
    actualizarLoader("dark");
    actualizarCardf("dark");
    actualizarCardb("dark");
    actualizarini_sesion("dark");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    document.querySelector("#tema-btn").setAttribute("class", "bi bi-moon-fill");
    localStorage.setItem("tema", "light");
    actualizarNavbar("light");
    actualizarCollapse("light");
    actualizarLoader("light");
    actualizarCardf("light");
    actualizarCardb("light"); 
    actualizarini_sesion("light"); 
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

window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
}); 



window.addEventListener("scroll", function() {
    const btnToTop = document.querySelector("#btn-to-top");
    if (window.pageYOffset > 100) {
    btnToTop.classList.add("active");
    } else {
    btnToTop.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-to-top").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

function cargarNuevaPagina() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Actualiza el contenido del contenedor de inicio de sesión
        document.getElementById("login-container").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "/Portafolio/html/register.html", true);
    xhttp.send();
}

function cargarRegister() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Actualiza el contenido del contenedor de inicio de sesión
            document.getElementById("login-container").innerHTML = this.responseText;
            
            // Agrega una pausa de 500ms antes de ocultar el loader
            setTimeout(function() {
                document.getElementById("loader").style.display = "none";
            }, 100);
        }
    };
    
    xhttp.open("GET", "/Portafolio/html/register.html", true);
    xhttp.send();
}

function cargarOlvidocontra() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Actualiza el contenido del contenedor de inicio de sesión
            document.getElementById("login-container").innerHTML = this.responseText;
            
            // Agrega una pausa de 500ms antes de ocultar el loader
            setTimeout(function() {
                document.getElementById("loader").style.display = "none";
            }, 100);
        }
    };
    
    xhttp.open("GET", "/Portafolio/html/resta_contra.html", true);
    xhttp.send();
}

