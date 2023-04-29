/* Transformar notas escolares
crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C
* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F
*/

//receber o valor da nota em numeros
let notaEscolar = Number(prompt("Adicione a nota aqui"))

//criar uma função que transforme a nota em caracteres atraves de condicionais
function notaFinal(nota){
    if(nota < 60) return "F"
    if(nota < 70) return "D"
    if(nota < 80) return "C"
    if(nota < 90) return "B"
    return "A"
  }

//imprimir o resultado
  document.write(notaFinal(notaEscolar))