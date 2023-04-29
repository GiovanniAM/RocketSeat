/*
sistemas de gastos familiar
criar um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    * criar uma função para calcular o total de receitas e despesas e mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
*/

//objeto com as propriedades receitas e despesas, ambas contendo um array de valores
let family =  {
    receitas: [100, 500],
    despesas: [800, 500],
}

//soma dos valores nas propriedades dentro do array via .reduce https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
const sumReceitas = family.receitas.reduce((a, b) => a + b, 0);
const sumDespesas = family.despesas.reduce((a, b) => a + b, 0);

//diminuicao dos valores finais
const difference = sumReceitas - sumDespesas;

//se for menor que 0 (numero negativo) entrar no primeiro if, se for 0 ou maior entrar no else
if(difference < 0){
    document.write(`O saldo da Familia é ${difference}, logo está negativo`)
} else{
    document.write(`O saldo da Familia é ${difference}, logo está positivo`)
}
