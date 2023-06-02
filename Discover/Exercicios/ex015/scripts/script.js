const closeModal = document.querySelector('div')
const openModal = document.querySelector('button')

function fOpenmodal(){
    openModal.style.visibility = "hidden"
    closeModal.style.visibility = "visible"
    console.log("Janela aberta")
}
function fCloseModal(){
    openModal.style.visibility = "visible"
    closeModal.style.visibility = "hidden"
    console.log("Janela fechada")
}

openModal.addEventListener('click', fOpenmodal)
closeModal.addEventListener('dblclick', fCloseModal)
