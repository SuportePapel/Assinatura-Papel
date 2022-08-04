const form = document.querySelector(".form")

let display = document.querySelector(".assinatura")
let textoUpAssinatura = document.querySelector(".textoUpAssinatura")

let inputName = document.querySelector("input[name = 'name']")
let inputCargo = document.querySelector("input[name = 'cargo']")
let inputTel = document.querySelector("input[name = 'tel']")
let inputRamal = document.querySelector("input[name = 'ramal']")


let adicionarNome = document.querySelector("p[name = 'adicionarNome']")
let adicionarCargo = document.querySelector("p[name = 'adicionarCargo']")
let adicionarTelefone = document.querySelector("span[name = 'adicionarTelefone']")
let adicionarRamal = document.querySelector("span[name = 'adicionarRamal']")

function novajanela(){
     window.open("https://leosilvacasti.github.io/passo-passo/")
}
    form.addEventListener('submit', (event)=>{

        event.preventDefault()

        addnome()
        addcargo()
        addtelefone()
        addramal()
        mostrarAssinatura()
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
    display.style.display = 'flex'
    textoUpAssinatura.style.display= 'flex'
}
