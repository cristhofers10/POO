const prompt = require('prompt-sync')();

class Cliente{

    nome;
    idade;
    cpf;
    agencia;
} 

let cliente = new Cliente();

cliente.nome = prompt("digite o nome do cliente: ");
cliente.idade = 17;
cliente.cpf = "130.970.489-95";
cliente.agencia = 101010;

console.log(cliente);