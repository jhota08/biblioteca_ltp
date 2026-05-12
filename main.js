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
     }

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

        case 3:
            livros.forEach((livro, i) => {
            console.log(`[${i}] ${livro.getInfo()}`);
            });

            let indice = parseInt(prompt("Índice do livro: "));

            if (isNaN(indice) || indice < 0 || indice >= livros.length) {
            console.log("Índice inválido.");
             } else {
            let novoTitulo = prompt("Novo título: ");
            let novoAutor = prompt("Novo autor: ");
            let novoGenero = prompt("Novo gênero: ");
            let novoAno = prompt("Novo ano: ");
            let novasPaginas = prompt("Novas páginas: ");

            if (novoTitulo.trim() !== "") livros[indice].titulo = novoTitulo;
            if (novoAutor.trim() !== "") livros[indice].autor = novoAutor;
            if (novoGenero.trim() !== "") livros[indice].genero = novoGenero;
            if (novoAno.trim() !== "") livros[indice].anoPub = parseInt(novoAno);
            if (novasPaginas.trim() !== "") livros[indice].numPaginas = parseInt(novasPaginas);

            console.log("Livro alterado!");
            }
            break; 

        case 4:
            if (livros.length === 0) {
            console.log("Nenhum livro cadastrado.");
            } else {
            let aux = new Livro("", "", "", 0, 0);

            console.log("Média de páginas:", aux.mediaNumPaginas(livros));

            let generos = aux.contarPorGenero(livros);

            for (let genero in generos) {
            console.log(genero + ": " + generos[genero]);
             }
            }
            break;

         case 0:
            console.log("Programa encerrado");
            break;

            default:
            console.log("Escolha uma opção do menu!");        
    }
};

