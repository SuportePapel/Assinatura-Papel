let name = document.querySelector("input[name = 'name']").value
let celular = document.querySelector("input[name = 'celular']").value
let cargo = document.querySelector("input[name = 'cargo']").value
let ramal = document.querySelector("input[name = 'ramal']").value

const form = document.querySelector(".form")
const pNome = document.querySelector("p[name = 'nomeAlterar']")
const pCargo  = document.querySelector("p [name ='cargoAlterar']")
const pCelular = document.querySelector("p [ name = 'celAlterar']")
const pRamal = document.querySelector("p[name = 'ramalAlterar']")


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    addicionarNome()
})
function addicionarNome(){
    console.log()
}
