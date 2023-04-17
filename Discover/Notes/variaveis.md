# Variavéis

* Variáveis são espaços na memória do computador que armazenam valores.
* Variáveis são nomes simbólicos para valores.
* 3 palavras reservadas para criar uma variável:

* var   <--- Não usar mais
* let   <--- Usar
* const <--- Usar

o JavaScript é uma linguagem de programação pouco tipada, ou seja, nao precisa de longos caminhos para se criar uma variável, basta apenas colocar o nome da variável e o valor que ela vai receber, e pronto, a variável foi criada.

ex:
```javascript
let Café = "para te energizar"
console.log(Café)  //imprime a string "para te energizar"
Café = true
console.log(Café) //imprime o valor booleano "true"
```

isso mostra que a linguagem Javascript é pouco tipada e dinaâmica, pois a variável Café pode receber um valor do tipo string e depois receber um valor do tipo booleano.
