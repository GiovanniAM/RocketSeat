function calculate(number1, operator, number2){
    let result = 0;
    switch(operator){
        case "+":   
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        default:
            console.log("operador invalido");
            invalidOperator = true;
            break;
    }
    return result;
}

let promptValue1 = Number(prompt("Digite o primeiro valor: "));
let promptOperator = prompt("Escolha o operador(+, -, *, /): ");
let promptValue2 = Number(prompt("Digite o segundo valor: "));
var finalValue= calculate(promptValue1, promptOperator, promptValue2);

let writeInHtml = (e) => {
    document.write(e + finalValue);
}

writeInHtml("O RESULTADO É ")
if(invalidOperator){
    document.write(" POIS ESTE OPERADOR É INVÁLIDO")
}