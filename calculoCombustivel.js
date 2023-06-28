/*Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12 km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média. O algoritmo deverá apresentar o valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem.*/

var tempo = 3;
var velocidade = 80;
var distancia = tempo * velocidade;
var litros = distancia/12;
console.log("A velocidade média foi: " + velocidade + "Km/h");
console.log("O tempo gasto na viagem foi: " + tempo + " horas");
console.log("A distancia percorrida foi: " + distancia + "Km/h");
console.log("O consumo de combustivel foi: " + litros + " litros");