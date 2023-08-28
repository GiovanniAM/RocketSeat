//Nullish Coalescing Operator
// const idade = undefined
// document.body.innerText = 'Sua idade é: ' + (idade || 'Não informado')

const { bodyParser } = ("json-server")


//Objetos e Desestruturação
// const user = {
//   name: 'Diego',
//   age: 18,
//   address: {
//     street: 'st Verbatim',
//     number: 176
//   },
// };

// function showAge({ age }){
//   return age
// }
// document.body.innerText = showAge(user)


//Rest Operator
// const { name, age} = user
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const [first, second, ...rest] = array
// document.body.innerText = JSON.stringify({first,second,rest})


//Short Sintax
// const name = 'Diego'
// const age = 27
// const user = {
//   name,
//   age
// }
// document.body.innerHTML = JSON.stringify(user)


// Optional Chaining
// const user = {
//   name: 'Diego',
//   age: 18,
//   address: {
//     street: 'st Verbatim',
//     number: 176,
//     zip:{
//       code: 23573090,
//       city: 'RJ'
//     },
//   showFullAddress(){
//     return 'Okay'
//   }
//   },
// };
// const key = 'code'
// console.log (user.address.zip[key]) 


//Metodos de array

// for(const i of array){
//   console.log(i)
// }
// array.forEach(item => {
//   console.log(item)
// })
// let novoArray = array.map(item => {
//   return(item / 2)
// })
// console.log(JSON.stringify(novoArray)) 
// const novoArray = array.map(item=>{
//   if(item % 2 === 0){
//     return item * 10
//   }
//   return item
// })

// console.table(novoArray)


//map, filter, every, some, find, findIndex, reduce
// const array = [1,2,3,4,5,9,8,7,6,10]
// const novoArray = array.filter(item => item % 2 == 0)
// .map(String)
// console.log(novoArray)
// document.body.innerText = JSON.stringify(`${novoArray}`)


// promisses

//   .then(response => {
//     response.json().then(body => {
//       console.log(body)
//     })
//     response.json().catch(err => {
//       console.log(err)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })

// fetch('https://api.github.com/users/diego3g')
// .then(response => {
//   return response.json()
// })
// .then(body => {
//   console.log(body)
// })
// .finally(()=>{
//   console.log('end')
// })

async function buscarDadosNoGithub(nickname){
  try{
    const response = await fetch(`https://api.github.com/users/${nickname}`)
  const body = await response.json()
  console.log(body)
  }
  catch (err) {
    console.log(err)
  }
  finally{
    console.log('end')
  }
}
buscarDadosNoGithub("giocodess")