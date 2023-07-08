/* Javascript da Calculadora da inflação
   programado pelo Augusto (Josvaldo2) entre os dias 18 e 23 de
   Julho de 2023
   
   extensivamente documentado para ajudar quem não possui conhecimento de programação ou iniciantes à entender o código. */

precos = { // Lista com os preços da gasolina
    "2002": 1.57,
    "2003": 2.21,
    "2004": 1.98,
    "2005": 2.29,
    "2006": 2.58,
    "2007": 2.51,
    "2008": 2.49,
    "2009": 2.51,
    "2010": 2.57,
    "2011": 2.67,
    "2012": 2.74,
    "2013": 2.88,
    "2014": 2.98,
    "2015": 3.32,
    "2016": 3.73,
    "2017": 3.68,
    "2018": 4.19,
    "2019": 4.30,
    "2020": 4.46,
    "2021": 5.49,
    "2022": 3.86,
    "2023": 5.40
};

/* Função responsável por fazer os cálculos relacionados ao preço da gasolina, é executada sempre que o botão de calcular é pressionado
ou algum dos valores de entrada é alterado. */
function calcular() {
    /* A primeira coisa a ser feita é verificar se a quantia de dinheiro inserida é válida (se o valor não está vazio, contém letras ou
    possui mais de 3 dígitos decimais) */
    let validade = document.getElementById("valor").validity;
    if (validade.badInput + validade.valueMissing + validade.stepMismatch == true) {
        return 0;
    }

    // As entradas do calculo são obtidas, além de uma lista com os elementos <span> que são usados para inserir os resultados e entradas.
    let valor = document.getElementById("valor").value;
    let ano1 = document.getElementById("ano1").value;
    let ano2 = document.getElementById("ano2").value;
    let listaResultados = document.querySelectorAll(".calculos [data-valor]");

    /* Lista com os valores que são inseridos nos elementos <span> com classes correspondentes, alguns desses valores
    são os cálculos realizados pela calculadora */
    let calculos = {
        "Rano1": ano1, // Ano principal
        "Rano2": ano2, // Ano secundário
        "Rvalor1": valor, // Quantia de dinheiro
        "Rvalor2": valor * (precos[ano2] / precos[ano1]), // Quantia de dinheiro ajustada para o segundo ano
        "Rporcentagem": Math.abs(100 - (precos[ano2] / precos[ano1]) * 100), // Porcentagem da diferença no preço da gasolina entre os dois anos
        "Rlitros1": valor / precos[ano1], // Quantos litros podem ser comprados no ano principal com a quantia de dinheiro
        "Rlitros2": valor / precos[ano2], // Quantos litros podem ser comprados no ano secundário com a quantia de dinheiro
        "Rpreco1": precos[ano1], // Preço da gasolina no ano principal
        "Rpreco2": precos[ano2], // Preço da gasolina no ano secundário
    }

    // Loop usado para inserir as entradas do usuário e resultados dos cálculos no texto de resultados
    for (let i = 0; i < listaResultados.length; i++) {
        let resultado = calculos[listaResultados[i].getAttribute("data-valor")];

        if (parseInt(resultado) != resultado) { // Verificamos se o valor que vai ser inserido no texto é um número inteiro 
            resultado = (Math.round(resultado*100)/100.).toFixed(2).replace(".", ","); // Se ele não for um número inteiro, nós arredondamos ele
        }                                                                              // para ficar com 2 dígitos decimais antes de ser inserido
        listaResultados[i].textContent = resultado;                                    // no texto
    }
}

function calcularB() { // Função executada pelo botão de calcular, ela executa a função calcular() definida anteriormente e
    calcular();        // deixa o diálogo com os resultados visível
    document.getElementById("resultados").style.display = "inherit";
}