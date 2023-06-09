const resultado = document.querySelector('.resultado');


function calcularIdade() {
    const inputType = document.getElementById("inputType").value;
    const resultado = document.querySelector(".resultado");

    let dataSelecionada;

    if (inputType === "selector") {
        dataSelecionada = new Date(document.getElementById("selectorInput").value);
    } else if (inputType === "text") {
        const dateInputValue = document.getElementById("textInput").value;
        const [day, month, year] = dateInputValue.split("/");
        dataSelecionada = new Date(`${year}-${month}-${day}`);
    }

    const dataAtual = new Date();
    const diferencaMilissegundos = dataAtual - dataSelecionada;
    const idadeEmAnos = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365.25));

    if (idadeEmAnos >= 0) {
        resultado.innerHTML = `Você tem ${idadeEmAnos} anos.`;
        resultado.style.display = 'flex';
        clearButton.style.display = 'block';
    } else {
        resultado.innerHTML = 'Entrada inválida';
        resultado.style.display = 'flex';
    }
}

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calcularIdade();
    }
});

const calculatorBtn = document.querySelector(".calcular");
calculatorBtn.addEventListener('click', calcularIdade);


function clearIdade() {
    var inputSelector = document.getElementById("selectorInput");
    var inputText = document.getElementById("textInput");

    resultado.style.display = 'none';
    clearButton.style.display = 'none';
    inputSelector.value = "";
    inputText.value = "";
}

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', clearIdade);



function toggleInput() {
    var inputType = document.getElementById("inputType").value;
    var seletorData = document.querySelector('.seletor')
    var texto = document.querySelector('.texto')

    if (inputType === "text") {
        texto.style.display = "block";
        seletorData.style.display = "none";
    } else if (inputType === "selector") {
        texto.style.display = "none";
        seletorData.style.display = "block";
    }
}