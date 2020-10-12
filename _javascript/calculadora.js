// arquivo javascript para minha calculadora
// criando a função de limpar a tela com o botão C.
function limpar(){
    document.getElementById('campoVisor').value = '';
}
// criando função para recolher valores na tela em sequência, em concatenação.
function agrupar(valor){
    document.getElementById('campoVisor').value += valor;
}
// criando função para realizar os cálculos.
function calculos(){
    let resultado = 0;

    resultado = document.getElementById('campoVisor').value;
    document.getElementById('campoVisor').value = '';

    document.getElementById('campoVisor').value = eval(resultado); // função eval efetua cálculos matemáticos, sem a necessidade de criar manualmente variáveis para isto.

}
