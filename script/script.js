const form = document.querySelector(".form")

let display = document.querySelector(".assinatura")
let displayH2 = document.querySelector(".h2")

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
        mostrarAssinatura()
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
    let  array = [`${inputCelular.value[0]}`+`${inputCelular.value[1]}`+ `${inputCelular.value[2]}`+`${inputCelular.value[3]}`+ `-`+`${inputCelular.value[4]}`+`${inputCelular.value[5]}`+`${inputCelular.value[6]}`+`${inputCelular.value[7]}`]
    console.log(array)
    celularAlterar.innerText = `${"Tel.: 55 11"} ${""} ${array}`
    console.log(array)
    inputCelular.value = '' 
}
function adicionarRamal (){
    ramalAlterar.innerHTML = `${"Ramal:"} ${""} ${inputRamal.value}`
    inputRamal.value = ''
}
function mostrarAssinatura (){
    display.style.display = 'flex'
    displayH2.style.display= 'flex'
}