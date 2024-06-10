const userNum = document.getElementById("num");
const boton = document.getElementById("boton");
const feedback = document.getElementById("feedback");
const maxIntentos = 5;
let intentos = 0 ;

const adivina = {
    valor : Math.floor(Math.random()*10 +1)
};

boton.addEventListener("click", ()=>{
    
    intentos++;
    let num = Number(userNum.value);
    if(num === adivina.valor && intentos < maxIntentos){
        feedback.innerText = "¡Ganaste!"
        reintentar();
    }else{
        feedback.innerText = `Vuelve a intentarlo, te quedan ${maxIntentos - intentos} intentos`;
        userNum.value = "";
    }

    if (intentos == maxIntentos) {
        reintentar();
    }
    
});

function reintentar() {
    boton.value = "Intentar otra vez";
    boton.onclick = ()=>{
        location.reload();
    };
}