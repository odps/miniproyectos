const usrTemp = document.getElementById("temp");
const btn = document.getElementById("boton");
const result = document.getElementById("result");
const input = document.getElementsByName("temp1");
const output = document.getElementsByName("temp2");

const conversions = {
    celsius: {
        celsius2: temp => temp,
        fahrenheit2: temp => (temp * 9 / 5) + 32,
        kelvin2: temp => temp + 273.15
    },
    fahrenheit: {
        celsius2: temp => (temp - 32) * 5 / 9,
        fahrenheit2: temp => temp,
        kelvin2: temp => ((temp - 32) * 5 / 9) + 273.15
    },
    kelvin: {
        celsius2: temp => temp - 273.15,
        fahrenheit2: temp => (temp - 273.15) * 9 / 5 + 32,
        kelvin2: temp => temp
    }
};

btn.onclick = function () {
    result.value = "";
    let temp = Number(usrTemp.value);

    if (isNaN(temp)) {
        result.value = "Entrada invalida";
        return;
    }

    let inputBtn, outputBtn;

    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) inputBtn = input[i].id;
        if (output[i].checked) outputBtn = output[i].id;
    }

    if (inputBtn && outputBtn) {
        result.value = conversions[inputBtn][outputBtn](temp);
    }
};
