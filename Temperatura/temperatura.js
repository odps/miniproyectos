//Constantes de los elementos HTML
const usrTemp = document.getElementById("temp");
const btn = document.getElementById("boton");
const result = document.getElementById("result");
//Vectores de inputs y outputs
const input = document.getElementsByName("temp1");
const output = document.getElementsByName("temp2");

btn.onclick = function () {

    result.value = "";
    let temp = Number(usrTemp.value);

    let inputBtn;
    let outputBtn;

    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            inputBtn = input[i].id;
        }

        if (output[i].checked) {
            outputBtn = output[i].id;
        }
    }

    console.log(inputBtn);
    console.log(outputBtn);

    if (inputBtn == "celsius") {
        switch (outputBtn) {
            case "celsius2":
                result.value = temp;
                break;
            case "fahrenheit2":
                result.value = (temp * 9 / 5) + 32;
                break;
            case "kelvin2":
                result.value = temp + 273.15;
                break;
            default:
                break;
        }
    }

    if (inputBtn == "fahrenheit") {
        switch (outputBtn) {
            case "celsius2":
                result.value = (temp - 32) * 5 / 9;
                break;
            case "fahrenheit2":
                result.value = temp;
                break;
            case "kelvin2":
                result.value = ( (temp - 32) * 5 / 9 ) + 273.15;
            default:
                break;
        }
    }

    if (inputBtn == "kelvin") {
        switch (outputBtn) {
            case "celsius2":
                result.value = temp - 273.15;
                break;
            case "fahrenheit2":
                result.value = (temp - 273.15) * 9 / 5 + 32;
                break;
            case "kelvin2":
                result.value = temp;
                break;
            default:
                break;
        }
    }
}