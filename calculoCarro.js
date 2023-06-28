/*O custo de um carro novo ao consumidor é a soma do custo da fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/

var custoFabrica = 40000;
var porcentagemDist;
var porcentagemImposto;
var custoFinal;

porcentagemDist = custoFabrica * 28/100;
porcentagemImposto = custoFabrica * 45/100;
custoFinal = custoFabrica + porcentagemDist + porcentagemImposto;

console.log("O custo final do carro ao consumidor é: " + custoFinal);