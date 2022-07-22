const form = document.querySelector(".form")
let div = document.querySelector(".assinatura")
let inputName = document.querySelector("input[name = 'name']")
let inputCargo = document.querySelector("input[name = 'cargo']")
let inputCelular = document.querySelector("input[name = 'celular']")
let inputRamal = document.querySelector("input[name = 'ramal']")


let nomeAlterar = document.querySelector("p[name = 'nomeAlterar']")
let cargoAlterar = document.querySelector("p[name = 'cargoAlterar']")
let celularAlterar = document.querySelector("span[name = 'celularAlterar']")
let ramalAlterar = document.querySelector("span[name = 'ramalAlterar']")

    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        adicionarNome()
        adicionarCargo()
        adicionarCelular()
        adicionarRamal()
    })

function adicionarNome(){
    nomeAlterar.innerHTML= inputName.value
    inputName.value = ''
}
function adicionarCargo (){
    cargoAlterar.innerHTML = inputCargo.value
    inputCargo.value = ''
}
function adicionarCelular(){
    celularAlterar.innerHTML = `${"Tel.: 55 11"} ${""} ${inputCelular.value}`
    inputCelular.value = ''
}
function adicionarRamal (){
    ramalAlterar.innerHTML = `${"Ramal:"} ${""} ${inputRamal.value}`
    inputRamal.value = ''
}