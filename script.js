const calculatorBtn = document.querySelector('.calcular');
const inputDate = document.getElementById('date');
const resultado = document.querySelector('.resultado');



function calcularIdade() {
    const dataSelecionada = new Date(inputDate.value);
    const dataAtual = new Date();


    const diferencaMilissegundos = dataAtual - dataSelecionada
    const idadeEmAnos = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365.25));

    if (idadeEmAnos >= 0) {
        resultado.innerHTML = `Você tem ${idadeEmAnos} anos.`
        resultado.style.display = 'flex';
        clearButton.style.display = 'block';
    } else {
        resultado.innerHTML = `Entrada invalida`
    }
}

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calcularIdade();
    }
});

calculatorBtn.addEventListener('click', calcularIdade);


function clearIdade() {
    inputDate.value = '';
    resultado.style.display = 'none';
    clearButton.style.display = 'none';
}

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', clearIdade);