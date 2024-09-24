let nomes = ["Ana", "Bruno", "Carlos"];
console.log("Array inicial:", nomes);

nomes.push("Daniel", "Eduarda", "Fernanda");
console.log("Após adicionar três novos nomes:", nomes);

nomes.shift();
console.log("Após remover o primeiro nome:", nomes);

nomes.unshift("Gabriel");
console.log("Após adicionar um nome no início:", nomes);

let indice = nomes.indexOf("Eduarda");
console.log("Índice do nome 'Eduarda':", indice);

let nomesString = nomes.join(", ");
console.log("Nomes unidos em uma string:", nomesString);
