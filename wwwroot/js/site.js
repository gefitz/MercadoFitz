
/** funcao responsavel para calcular o preco de cada produto */
function CalcXml(porcetagem, identificao) {
    quantidadeCX = parseInt(document.getElementById('quant ' + identificao).innerText);
    quantidadeUnitaria = document.getElementById('unitario ' + identificao).value;
    quantidadeUnitaria = parseFloat(quantidadeUnitaria.replace(",", "."))
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

/**  */
function SalvarProdutos(count) {
    var jsonProdutos = {};
    for (var i = 0; i < count; i++) {
        codigo = document.getElementById('codigo ' + i).innerText
        nome = document.getElementById('nome ' + i).innerText
        porcetagem = document.getElementById('inputGroupSelect ' + i).value
        quantidadeCX = parseInt(document.getElementById('quant ' + i).innerText);
        quantidadeUnitaria = document.getElementById('unitario ' + i).value;
        quantidadeUnitaria = parseFloat(quantidadeUnitaria.replace(",", "."))
        valorUnitario = parseFloat(document.getElementById('valorUnitario ' + i).innerText);
        valorTotal = parseFloat(document.getElementById('valorTotal ' + i).innerText);
        tipoItem = document.getElementById('tipoItem ' + i).innerText;
    }
}

function tableSelecionada() {
    /*fazer um json e enviar um por cada dentro do for para controller,controller devera retornar succes*/ 
    var tabela = document.getElementById("tabela");
    var linha = tabela.getElementsByTagName("tr");
    for (i = 1; i < linha.length; i++) {
        var coluna = linha[i].getElementsByTagName("td");
        var codigo = document.getElementById('codigo ' + (i - 1)).value
        var nome = coluna[1].innerText
        var tipo = coluna[2].innerText
        var quantidadeCaixas = coluna[3].innerText
        var quantidadeUnitario = document.getElementById('unitario ' + (i - 1)).value
        var valorUnitario = coluna[5].innerText
        var valorTotalCx = coluna[6].innerText
        var porcetagem = document.getElementById('inputGroupSelect ' + (i - 1))
        var texto = porcetagem.options[porcetagem.selectedIndex].text
        var valorFinal = coluna[8].innerText
        var json = "{"
        
    }
}