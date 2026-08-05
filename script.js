/* ==========================================================
                    VARIABLES
========================================================== */

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const alias = document.getElementById("alias");
const copiarAlias = document.getElementById("copiarAlias");
const mensajeCopiado = document.getElementById("mensajeCopiado");

const btnTop = document.getElementById("btnTop");

const secciones = document.querySelectorAll(".aparecer");


/* ==========================================================
                VOLVER ARRIBA AL RECARGAR
========================================================== */

window.onload = () => {

    window.scrollTo(0,0);

};


/* ==========================================================
                CUENTA REGRESIVA
========================================================== */

const fechaEvento = new Date("November 19, 2026 20:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        dias.textContent = "000";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";

        return;

    }

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const m = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const s = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    dias.textContent = String(d).padStart(3,"0");

    horas.textContent = String(h).padStart(2,"0");

    minutos.textContent = String(m).padStart(2,"0");

    segundos.textContent = String(s).padStart(2,"0");

}

actualizarContador();

setInterval(actualizarContador,1000);


/* ==========================================================
                APARICIÓN AL HACER SCROLL
========================================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.20
});

secciones.forEach(seccion=>{

    observer.observe(seccion);

});
/* ==========================================================
                COPIAR ALIAS
========================================================== */

copiarAlias.addEventListener("click", () => {

    navigator.clipboard.writeText(alias.textContent.trim());

    mensajeCopiado.style.opacity = "1";

    setTimeout(() => {

        mensajeCopiado.style.opacity = "0";

    }, 2500);

});


/* ==========================================================
                BOTÓN VOLVER ARRIBA
========================================================== */

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        btnTop.style.opacity = "1";
        btnTop.style.visibility = "visible";
        btnTop.style.transform = "translateY(0)";

    }else{

        btnTop.style.opacity = "0";
        btnTop.style.visibility = "hidden";
        btnTop.style.transform = "translateY(20px)";

    }

});


btnTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});