var nota1 = prompt("Digite a primeira nota:");
var peso1 = prompt("Digite o peso da primeira nota:");

var nota2 = prompt("Digite a segunda nota:");
var peso2 = prompt("Digite o peso da segunda nota:");

var nota3 = prompt("Digite a terceira nota:");
var peso3 = prompt("Digite o peso da terceira nota:");

nota1 = parseFloat(nota1);
peso1 = parseFloat(peso1);
nota2 = parseFloat(nota2);
peso2 = parseFloat(peso2);
nota3 = parseFloat(nota3);
peso3 = parseFloat(peso3);

var mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

alert("A média ponderada das notas é: " + mediaPonderada.toFixed(2));
