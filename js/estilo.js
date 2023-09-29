// Capturar dos numeros ingresados por el usuario
const calculadoraForm = document.getElementById("calculadoraForm");
const resultadoSpan = document.getElementById("resultado");

calculadoraForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoSpan.textContent = "Por favor, ingrese números válidos.";
        return;
    }

    const operacion = event.submitter.value;
    let resultado;

    switch (operacion) {
        case "Sumar":
            resultado = numero1 + numero2;
            break;
        case "Restar":
            resultado = numero1 - numero2;
            break;
        case "Multiplicar":
            resultado = numero1 * numero2;
            break;
        case "Dividir":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "No se puede dividir por cero.";
            }
            break;
    }

    resultadoSpan.textContent = `Resultado: ${resultado}`;
});