//declara o token de erro como true e pede o numero para entrada em um dos ifs,
let errorToken = true;
let numberPrompt = Number(prompt("Caso deseja transformar a temperatura de Fahrenheit para Celsius digite 1, caso deseje transformar de Celsius para Fahrenheit digite 2"));

// primeiro if para caso o usuario tenha colocado um, define a temperatura atraves de outro prompt pedindo o valor em celsius ao usuario depois disso usa a temperatura para atraves da formula definir o valor em fahrenheit para escrever o valor na tela e definir o token  de error como false
if(numberPrompt == 1){
    let temperature = Number(prompt("Escreva a temperatura que deseja transformar em Celsius"));
    let fahTemperature = (temperature - 32) * 5/9;
    document.write(fahTemperature);
    let errorToken = false;
}
// else if para a mesma função do primeiro if so que invertida para transformar celsius atraves de um valor em Fahrenheit
else if(numberPrompt == 2){
    let temperature = Number(prompt("Escreva a temperatura que deseja transformar em Fahrenheit"));
    let celTemperature = temperature * 9/5 + 32;
    document.write(celTemperature);
    let errorToken = false;
}
// if para se o errorToken continuar true mesmo depois do codigo ter finalizado mostra a mensagem de error
if(errorToken === true){
    window.alert(`Número invalido, por favor insira "1" ou "2"`);
}