const prompt = require("prompt-sync")();
const Livro = require("./Livro");

const livros = [];
let opcao = -1;

while(opcao !==0){
    console.log("\n--- BIBLIOTECA ---");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Alterar livro");
    console.log("4 - Estatísticas");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Opção: "));

    }

