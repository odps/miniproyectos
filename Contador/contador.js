let counter;
counter = 0;
let intervalId;

let display = document.getElementById("display");
let reset = document.getElementById("reset");
let sub = document.getElementById("sub");
let add = document.getElementById("add");
let auto = document.getElementById("auto");

add.addEventListener("click", addCounter);
sub.addEventListener("click", subCounter);
reset.addEventListener("click", resetCounter);
auto.addEventListener("click", autoIncrease);

function addCounter() {
    counter++;
    display.textContent = counter;
}

function subCounter() {
    counter--;
    display.textContent = counter;
}

function resetCounter() {
    counter = 0;
    display.textContent = counter;
}

function autoIncrease() {
    if (auto.checked) {
        intervalId = setInterval(addCounter, 1000);
    } else {
        clearInterval(intervalId);
    }
}
