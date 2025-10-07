//console.log(document.querySelector("h1"));
var titulo = (document.querySelector("h1"));
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent="Kauan Nutricions";
  

var tdNome= document.querySelector("#primeiro-paciente");
var paciente = tdNome.textContent;
console.log(paciente);

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = document.querySelector(".info-altura");      
var altura = tdAltura.textContent;
console.log(altura);

//IMC = peso/altura * altura