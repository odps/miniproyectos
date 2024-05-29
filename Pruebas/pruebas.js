let header = document.getElementById("h1");
let nombre = document.getElementById("name");
let boton = document.getElementById("b1");

boton.addEventListener("click", () => {
    header.innerText = `Hola ${nombre.value}`;
    nombre.value = "";
});
