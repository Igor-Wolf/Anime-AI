const paragrafo = document.querySelector("p")
let a = [];

let sotage;




async function buscar(db) {
    

    try {
        // Realiza a busca da página de dados
        const response = await fetch('dados.json');

        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        // Converte a resposta para JSON
        const data = await response.json();
        storage = data

        for (const element of db) {
            // Realiza a busca para cada elemento do banco de dados
            const link = element; // URL da página da web que queremos fazer scraping
            if (!data.animes.some(anime => anime.url === link)) {
                // Se não estiver, realiza o scraping e adiciona à lista
                await scraping(link, data);
            }
        }
        
        // Verifica se o anime já está na lista
        
    } catch (error) {
        console.error('Erro ao buscar anime:', error);
        return null; // Retorna null em caso de erro
    }
}

async function scraping(link, data) {
    try {
        // Limpa a lista 'a' antes de cada scraping
        a = [];

        // Realiza o scraping da página
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${link}`);

        if (!response.ok) {
            throw new Error('Erro ao buscar página da web');
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Aqui você pode fazer o scraping dos dados da página e adicionar ao objeto 'data'
        // Extraindo o título da página
        const title = doc.querySelector('div.title.ott_true h2 a');
        alert(title.textContent.trim())

        // Extraindo o generos  da página
        const gen = doc.querySelectorAll('span.genres a');
        gen.forEach(element => {
            a.push(element.textContent.trim())
        });


        // Extraindo o ano  da página
        const ano = doc.querySelector('div.title.ott_true span.tag.release_date');
        alert(ano.textContent.trim())

        // Link da pag

        let linkar = link

        // Extraindo a sinopse  da página

        const sinopse = doc.querySelector('div.overview p');
        alert(sinopse.textContent.trim())

        // Extraindo a img  da página

        const imagem = doc.querySelector('div.blurred img');
        alert(imagem.src.trim())


        // Extraindo formato

        if (linkar.includes("org/tv/")) {
            formato = ("TV");
        } else if (linkar.includes("org/movie/")) {
            formato = ("Movie");
        }
        alert(formato)

        let epi = ""
        let clas = ""


        //Classificação indicativa
        // const classifica = doc.querySelector('div.title.ott_true div.facts span.certification');
        // alert(classifica.textContent.trim())


        const novoAnime = {
            "titulo": title.textContent.trim(),
            "ano": ano.textContent.trim(),
            "url": linkar,
            "genero": a,
            "sinopse": sinopse.textContent.trim(),
            "img": imagem.src.trim(),
            "formato": formato,
            "episodios": " ",
            "classificacao": " ",
            "lancamento": " ",
            "videos": [],
        };

        storage.animes.push(novoAnime);
        alert(JSON.stringify(storage, null, 2));

        
    } catch (error) {
        console.error('Erro ao fazer scraping:', error);
        throw error; // Propaga o erro para ser tratado no nível superior
    }
}

function save(data) {
    try {
        const jsonString = JSON.stringify(data, null, 2);

        // Verifica se os dados estão vazios
        if (!jsonString) {
            console.error('Erro ao converter dados para JSON');
            return;
        }

        // Cria um novo Blob com a string JSON
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Usa a função saveAs do FileSaver.js para salvar o Blob como um arquivo
        saveAs(blob, 'dados.json');
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

async function processarBusca(db) {
    try {
        let data = { animes: [] };
        

        await buscar(db);
        // Após todas as buscas serem concluídas, chama a função 'save'
        paragrafo.innerHTML = "<pre>" + JSON.stringify(storage, null, 2) + "</pre>";
        save(storage);
        

    } catch (error) {
        console.error('Erro ao processar busca:', error);
    }
}

// Inicia o processo de busca
const db = databaseAnimes(); // Supondo que você tenha uma função 'databaseAnimes' que retorna a lista de URLs
processarBusca(db);
