let num1 = "";
let num2 = "";
let operador = "";

function mostrarEnDisplay(valor) {
    let elementoDisplay = document.getElementById("id_display");

    if (["+", "-", "*", "/", "%"].includes(valor)) {
        if (num1 === "") {
            num1 = parseFloat(elementoDisplay.innerText); // Convierte el contenido del display a número
            operador = valor;
            elementoDisplay.innerText += ` ${valor} `; // Muestra el operador en el display
        }
    } else if (valor === "=") {
        if (num1 !== "" && operador !== "") {
            let partes = elementoDisplay.innerText.split(` ${operador} `); // Divide el contenido del display
            num2 = parseFloat(partes[1]); // Obtiene el segundo número
            let resultado = realizarOperacion(num1, num2, operador);
            elementoDisplay.innerText = `${num1} ${operador} ${num2} = ${resultado}`; // Muestra la operación completa y el resultado
            num1 = ""; // Reinicia los valores
            num2 = "";
            operador = "";
        }
    } else if (valor === "C") {
        elementoDisplay.innerText = "";
        num1 = "";
        num2 = "";
        operador = "";
    } else if (valor === "←") {
        elementoDisplay.innerText = elementoDisplay.innerText.slice(0, -1);
    } else {
        elementoDisplay.innerText += valor;
    }
}

function realizarOperacion(n1, n2, op) {
    switch (op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n2 !== 0 ? n1 / n2 : "Error"; // Manejo de división por cero
        case "%":
            return n1 % n2;
        default:
            return 0;
    }
}