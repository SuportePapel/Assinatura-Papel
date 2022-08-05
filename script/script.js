let h2 = document.querySelector(".h2")
let h1 = document.querySelector(".h1")
let form = document.querySelector(".form")
let assinatura = document.querySelector(".assinatura")

let section = document.querySelector(".section")
let lastSection = document.querySelector(".last-section")

let inputName = document.querySelector("input[name = 'name']")
let inputCargo = document.querySelector("input[name = 'cargo']")
let inputTel = document.querySelector("input[name = 'tel']")
let inputRamal = document.querySelector("input[name = 'ramal']")


let adicionarNome = document.querySelector("p[name = 'adicionarNome']")
let adicionarCargo = document.querySelector("p[name = 'adicionarCargo']")
let adicionarTelefone = document.querySelector("span[name = 'adicionarTelefone']")
let adicionarRamal = document.querySelector("span[name = 'adicionarRamal']")


    form.addEventListener('submit', (event)=>{
        event.preventDefault()

        mostrarAssinatura()
        ocultarForm()
        
    })
function addnome(){
    adicionarNome.innerHTML= inputName.value
    inputName.value = ''
}
function addcargo (){
    adicionarCargo.innerHTML = inputCargo.value
    inputCargo.value = ''
}
function addtelefone(){
    let  array = [`${inputTel.value[0]}`+`${inputTel.value[1]}`+ `${inputTel.value[2]}`+`${inputTel.value[3]}`+ `-`+`${inputTel.value[4]}`+`${inputTel.value[5]}`+`${inputTel.value[6]}`+`${inputTel.value[7]}`]
    adicionarTelefone.innerText = `${"Tel.: 55 11"} ${""} ${array}`
    inputTel.value = ''
}
function addramal (){
    adicionarRamal.innerHTML = `${"Ramal:"} ${""} ${inputRamal.value}`
    inputRamal.value = ''
}
function mostrarAssinatura (){

    assinatura.style.display = 'flex'

    addnome()
    addcargo()
    addtelefone()
    addramal()
    mostraPassos()
    alteraH1()
}
function ocultarForm(){
    section.style.display= 'none'
    h2.style.display = 'none'
}
function mostraPassos(){
    lastSection.style.display = 'flex'
}
function alteraH1 (){
    h1.innerHTML =  'Assnitatura / Passo a Passo'
}