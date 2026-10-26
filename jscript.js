
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const caja = document.querySelector(".caja-texto");

mensaje.addEventListener("input", function () {
    let cantidad = mensaje.value.length;

    contador.textContent = cantidad + " / 250";

    if (cantidad === 250) {
        caja.classList.add("limite");
    } else {
        caja.classList.remove("limite");
    }
});
