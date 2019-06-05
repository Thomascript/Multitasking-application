// criando script para meu simulador de parcelas
function calcular(){ //calculo o valor com base na divisão feita na variável resultado e retorno na tela.
    var campoValor = document.getElementById('campoValor').value;
    campoValor = parseFloat(campoValor);
    var campoParcelas = document.getElementById('campoParcelas').value;
    campoParcelas = parseFloat(campoParcelas);
    if(campoParcelas > 5){ //se as parcelas forem maiores que 5, acrescenta-se 10% de juros no valor do produto.
        jurosValor = campoValor * 0.10;
        resultado = (campoValor + jurosValor) / campoParcelas;
        document.getElementById('formulario_resultado_parcelas').innerHTML = campoParcelas;
        document.getElementById('formulario_resultado').innerHTML = resultado;
    } else { //senão, apenas faz a divisão convencional.
        resultado = campoValor / campoParcelas;
    document.getElementById('formulario_resultado_parcelas').innerHTML = campoParcelas;
    document.getElementById('formulario_resultado').innerHTML = resultado;
    }

}
