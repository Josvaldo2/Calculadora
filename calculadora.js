/* Javascript da Calculadora da inflação
   programado pelo augusto entre os dias 18 e 21 de
   Julho de 2023 */

precos = {"2002": 1.57,
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
          "2023": 5.40};

          
function calcular() {
    let validade = document.getElementById("valor").validity
    if (validade.badInput + validade.valueMissing + validade.stepMismatch == true) {
        return 0;
    }

    let listaResultados = document.querySelectorAll("#resultados span");    
    let valor = document.getElementById("valor").value;
    let ano1 = document.getElementById("ano1").value;
    let ano2 = document.getElementById("ano2").value;

    let calculos = [valor, ano1,
                    valor*(precos[ano2]/precos[ano1]),
                    ano2, valor/precos[ano1],
                    ano1, valor/precos[ano2], ano2
                ];

    for (let i = 0; i < listaResultados.length; i++) {
        let resultadoFormatado = parseFloat(calculos[i]).toFixed(2).replace(".", ",");
        if (resultadoFormatado.endsWith(",00")) {
            listaResultados[i].textContent = calculos[i]
        }
        else {
            listaResultados[i].textContent = resultadoFormatado
        }
        document.getElementById("resultados").style.display = "inherit"
    }
}