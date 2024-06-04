const imagenes = new Map([[1, "dados/uno.png"], [2, "dados/dos.png"], [3, "dados/tres.png"], [4, "dados/cuatro.png"], [5, "dados/cinco.png"], [6, "dados/seis.png"]]);
const boton = document.getElementById("tirar");
const content = document.getElementById("contenido");

boton.addEventListener("click", () => {

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    tirada();
});

function tirada() {
    let random;
    let dado;
    
    for (let i = 0; i < 6; i++) {
        random = Math.floor(Math.random()*6 + 1);
        dado = document.createElement("img");
        dado.src = imagenes.get(random);
        content.appendChild(dado);
    }
}