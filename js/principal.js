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

var imc = peso/ (altura * altura);
.info-imc = imc;
console.log(imc);
//IMC = peso/altura * altura