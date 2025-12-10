// ALERT BOTÓN "VER CÓMO" 
function verComo() {
    alert("Aquí puedes conocer cómo funciona la energía solar y cómo puedes ahorrar.");
}

//ALERT AL ENVIAR FORMULARIO 
function enviarFormulario() {
    alert("Formulario enviado correctamente. Pronto nos pondremos en contacto contigo.");
    return false; // Evita recargar la página
}

//EFECTO DE SOMBRA EN NAVBAR AL HACER SCROLL 
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 10) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// ANIMACION: TEXTO DEL HERO 
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(30px)";

    setTimeout(() => {
        heroText.style.transition = "0.9s ease";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0px)";
    }, 200);
});