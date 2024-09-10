var deposito = prompt("Digite o valor do depósito:");
var taxaJuros = prompt("Digite a taxa de juros (em %):");
var tempo = prompt("Digite o tempo (em anos):");

deposito = parseFloat(deposito);
taxaJuros = parseFloat(taxaJuros);
tempo = parseFloat(tempo);

var rendimento = deposito * (taxaJuros / 100) * tempo;
var valorTotal = deposito + rendimento;

alert("Valor do rendimento: " + rendimento.toFixed(2) + "\nValor total após rendimento: " + valorTotal.toFixed(2));
