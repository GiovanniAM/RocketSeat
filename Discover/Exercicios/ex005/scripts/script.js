let temperature = Number(prompt("Qual sua temperatura?"))
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
    document.write("<p><br> Estou com Febre Alta </p>")
} else if(mediumTemperature){
    document.write("<p><br> Estou com Febre Moderada </p>")
} else {
    document.write("<p><br> Estou Saudável </p>")
}


//PUXA A TEMPERATURA E SETA OS CORTES
// let temperature = Math.round(prompt("Qual sua temperatura?"))
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

//SE A TEMPERATURA FOR IGUAL OU MAIOR QUE 37.5
// if(highTemperature){
    //     document.write("<p><br> Estou com Febre Alta </p>")

//SE A TEMPERATURA FOR MENOR QUE 37.5 *E* IGUAL OU MAIOR QUE 37
// } else if(mediumTemperature){
    //     document.write("<p><br> Estou com Febre Moderada </p>")
    
//SE NÃO ENTRAR EM NENHUMA CONDICIONAL ENTRA AQUI
// } else {
    //     document.write("<p><br> Estou Saudavel </p>")
// }


