// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function CalcXml(porcetagem, identificao) {
    quantidadeCX = parseInt(document.getElementById('quant ' + identificao).innerText);
    quantidadeUnitaria = document.getElementById('unitario ' + identificao).value;
    quantidadeUnitaria = parseFloat(quantidadeUnitaria.replace(",","."))
    valorUnitario = parseFloat(document.getElementById('valorUnitario ' + identificao).innerText);
    valorTotal = parseFloat(document.getElementById('valorTotal ' + identificao).innerText);
    tipoItem = document.getElementById('tipoItem ' + identificao).innerText;
    if (tipoItem === "KG") {

        porcetagem = porcetagem / 100;
        valorUnitario = valorUnitario * quantidadeUnitaria;
        result = valorUnitario + (porcetagem * valorUnitario);

    }
    else if (valorUnitario == valorTotal) {


        porcetagem = porcetagem / 100;
        valorUnitarioDaCaixa = valorTotal / quantidadeCX;
        valorUnitario = valorUnitarioDaCaixa / quantidadeUnitaria;
        result = valorUnitario + (porcetagem * valorUnitario);
    }
    else {
        valorUnitario = parseFloat(valorUnitario);
        porcetagem = porcetagem / 100;
        var n1 = valorUnitario * porcetagem;
        result = valorUnitario + n1;

    }

    document.getElementById('final ' + identificao).innerHTML = result;
}