// Definindo a função buscar
async function buscar(nomeAnime) {
    alert("entrou")
    try {
        // Faz a requisição e espera a resposta
        const response = await fetch('dados.json');

        // Se a resposta não estiver no formato esperado, lança um erro
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        // Parseia a resposta como JSON e espera o resultado
        const data = await response.json();

        // Itera sobre os animes procurando pelo título
        for (let anime of data.animes) {
            if (anime.titulo === nomeAnime) {
                // Se encontrar o anime, retorna o objeto correspondente
                return anime;
            }
        }

        // Se não encontrar o anime, lança um erro
        throw new Error('Anime não encontrado');
    } catch (error) {
        // Trata erros caso ocorram durante a busca
        console.error('Erro ao buscar anime:', error);
        return null; // Retorna null em caso de erro
    }
}

// function buscar2(nomeAnime) {

//     var str = [];
//     fetch('dados.json')
//         .then(response => response.json())
//         .then(data => {
//             const titulo = data.animes;
//             titulo.forEach(element => {
            
//                 //adicionar elementos na lista
//                 str.push(element)
//             });


//             //ordenar elementos na lista em ordem alfabetica

//             str.sort((a, b) => {
//                 if (a.titulo < b.titulo) return -1;
//                 if (a.titulo > b.titulo) return 1;
//                 return 0;

//             });

//             str.forEach(element => {
//                 console.log(element)
//             });
//         })
//         .catch(error => {
//             console.error('Erro ao carregar o arquivo JSON:', error);
//         });

// }