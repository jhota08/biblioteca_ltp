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

     if (isNaN(opcao)){
    console.log("Digite um número!");
    continue;

     switch(opcao){
        case 1:
            let titulo = prompt("Título:");
            let autor = prompt("Autor: ");
            let genero = prompt("Gênero: ");
            let anoPub = parseInt(prompt("Ano de publicação: "));
            let numPaginas = parseInt(prompt("Número de páginas: "));

            livros.push(new Livro(titulo, autor, genero, anoPub, numPaginas));
            console.log("Livro cadastrado!");
            break;

        case 2:
            if (livros.length === 0) {
             console.log("Nenhum livro cadastrado.");
            } else {
             livros.forEach((livro, i) => {
             console.log(`[${i}] ${livro.getInfo()}`);
            });
            } 
            break;
    
    }

}
}
