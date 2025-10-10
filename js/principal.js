//console.log(document.querySelector("h1"));
var titulo = (document.querySelector("h1"));
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent="Kauan Nutricions";
  

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = document.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome)

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = document.querySelector(".info-altura");      
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = paciente.querySelector(".info-imc")
var imc = peso/ (altura * altura);
tdImc.textContent = imc;
console.log(imc);
//IMC = peso/altura * altura

var pesoEhValido = true;
var alturaEhValido = true;

if(peso < 0 || peso > 1000){
    console.log("Peso inválido");
    var pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if(altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
    var alturaEhValido = false;
    tdImc.textContent = "Altura inválida";
}

if(altura, peso > 1000, 3.00){
    console.log("Altura e peso inválido!");
    var alturaPesoEhValido = false;
    tdImc.textContent = "Altura e peso inválido";
}

if(alturaEhValido && pesoEhValido){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}