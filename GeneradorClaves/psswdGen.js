const genBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyBtn");
const clave = document.getElementById("psswd");
const mostrarBtn = document.getElementById("mostrar");
const mostrarImg = document.getElementById("mostrarImg");
const contenido = valoresPosibles();

genBtn.addEventListener("click", () => {
    let psswd = "";

    for (let i = 0; i < 16; i++) {
        psswd += contenido[Math.floor(Math.random() * contenido.length)];
    }

    clave.value = psswd;
});

copyBtn.addEventListener("click", () => {
    clave.focus();
    clave.select();
    // document.execCommand("copy"); Esta 'deprecated', versiones mas modernas acceden al clipboard desde navigator
    navigator.clipboard.writeText(clave.value);
});

mostrarBtn.addEventListener("click", () => {
    if (clave.type === "password") {
        clave.type = "text";
        mostrarImg.src = "./eyeBlind.png";
    }
    else {
        clave.type = "password";
        mostrarImg.src = "./eye.png";
    }
});

function valoresPosibles() {
    const especiales = "!@#$%&?*-+_=".split("");
    const letrasMinusculas = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const letrasMayusculas = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const numeros = Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i));

    /*
    Array.from coge como parametros un objecto `arraylike` (tiene propiedad length)
    asi que creando un objeto con el length deseado podemos ajustar el length del resultado de Array.from
    el segundo parametro es un funcion de mapeo que se ejecuta por cada indice del array a generar.
    Sus parametros formales son (currentValue, index, array), ya que no utilizamos currentValue se 
    introduce un _ para indicar que no esta utilizado.
    */

    return [...letrasMinusculas, ...letrasMayusculas, ...numeros, ...especiales];
}