//buscando e contando dados em arrays
// Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

//// Contar o número de categorias e o número de livros em cada categoria
//console.log(booksByCategory.length)
//console.log(booksByCategory[x].books.length)  (x é o indice do array podendo ser 0 ou 1)

//// Contar o número de autores
// function countAuthorsMetod() {
//     let countAuthors = 0;
//     for (let i = 0; i < booksByCategory.length; i++) {
//       for (let j = 0; j < booksByCategory[i].books.length; j++) {
//         countAuthors++;
//       }
//     }
//     console.log(countAuthors);
//   }
//   countAuthorsMetod()

//// Mostrar livros do autor Augusto Cury
// let result = booksByCategory[1].books.filter((book) => book.author === "Augusto Cury");
// console.log(result);


//// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
// function booksOfAuthor(nameOfAuthor){
//     let runOne = booksByCategory[0].books.filter((book) => book.author === nameOfAuthor);
//     let runTwo = booksByCategory[1].books.filter((book) => book.author === nameOfAuthor);
//     let result = runOne.concat(runTwo)
// }
// booksOfAuthor("x")
//só colocar o nome do autor no parametro da função

const booksByCategory = [
  {
    category: "riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "inteligencia emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];
