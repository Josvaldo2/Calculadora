/* Javascript da Calculadora da inflação
   programado pelo Augusto entre os dias 18 e 23 de
   Julho de 2023 */

precos = {
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
}; // Lista com os preços da Gasol

function calcular() {
    let validade = document.getElementById("valor").validity;
    if (validade.badInput + validade.valueMissing + validade.stepMismatch == true) {
        return 0;
    }

    let listaResultados = document.querySelectorAll("#resultados span");
    let valor = document.getElementById("valor").value;
    let ano1 = document.getElementById("ano1").value;
    let ano2 = document.getElementById("ano2").value;

    let calculos = {
        "Rano1": ano1,
        "Rano2": ano2,
        "Rvalor1": valor,
        "Rvalor2": valor * (precos[ano2] / precos[ano1]),
        "Rporcentagem": Math.abs(100 - (precos[ano2] / precos[ano1]) * 100),
        "Rlitros1": valor / precos[ano1],
        "Rlitros2": valor / precos[ano2],
        "Rpreco1": precos[ano1],
        "Rpreco2": precos[ano2],
    }

    for (let i = 0; i < listaResultados.length; i++) {
        let resultado = calculos[listaResultados[i].className];
        if (parseInt(resultado) == resultado) {
            listaResultados[i].textContent = resultado;
        }
        else {
            listaResultados[i].textContent = (Math.round(resultado*100)/100.).toFixed(2).replace(".", ",");
        }
    }
}

function calcularB() {
    calcular();
    document.getElementById("resultados").style.display = "inherit";
}