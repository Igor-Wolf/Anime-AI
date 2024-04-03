let img = document.querySelector(".imagem")
let titulopag = document.querySelector("title")
let year = document.querySelector(".ano")
let classification = document.querySelector(".cassificacao")
let gender = document.querySelector(".genero")
let resumo = document.querySelector(".sinopse")
let docTitle = document.querySelector("title")
let forma = document.querySelector(".formato")
let first = document.querySelector(".titulo")
let epi = document.querySelector(".epi")
var container = document.getElementById("videos");






function realizar() {

    buscar(docTitle.innerHTML)
        .then(anime => {

            titulopag.innerHTML = anime.titulo
            year.innerHTML = anime.ano
            classification.innerHTML = anime.classificacao
            gender.innerHTML = anime.genero
            resumo.innerHTML = anime.sinopse;
            forma.innerHTML = anime.formato;
            img.src = anime.img
        })
        .catch(error => {
            console.error('Erro ao buscar anime:', error);
        });
}

async function injetar() {
    try {
        // Realiza a busca da página de dados
        const response = await fetch('/animes/dados.json');
        console.log("Passou aqui");

        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        // Converte a resposta para JSON
        const data = await response.json();
        console.log("Data carregada:", data);

        // Verifica se o anime já está na lista
        const title = titulopag.innerHTML;
        console.log("Título extraído do HTML:", title);

        for (const anime of data.animes) {
            console.log("Comparando com:", anime.titulo);
            if (anime.titulo === title) {
                console.log("Anime encontrado:", anime);
                // Se o anime estiver na lista, realizar as operações necessárias
                titulopag.innerHTML = anime.titulo;
                first.innerHTML = `${anime.titulo}`;
                year.innerHTML = `<strong>Ano</strong>: ${anime.ano}`;
                classification.innerHTML = `<strong>Classificação indicativa</strong>: ${anime.classificacao}`;
                gender.innerHTML = `<strong>Gênero:</strong> ${anime.genero}`;
                resumo.innerHTML = `<strong>Sinopse:</strong> ${anime.sinopse}`;
                forma.innerHTML = `<strong>Formato:</strong> ${anime.formato}`;
                epi.innerHTML = `<strong>Episódios:</strong> ${anime.episodios}`
                img.src = anime.img;


                anime.videos.forEach(function(caminho) {
                    // Cria um elemento <iframe> para o vídeo
                    var videoElement = document.createElement("iframe");
            
                    // Configura os atributos do vídeo
                    videoElement.setAttribute("width", "350");
                    videoElement.setAttribute("height", "200");
                    videoElement.setAttribute("src", caminho);
                    videoElement.setAttribute("title", "Embedded Video");
                    videoElement.setAttribute("allowfullscreen", "");

                    videoElement.classList.add("my-video")
            
                    // Adiciona o elemento do vídeo ao contêiner
                    container.appendChild(videoElement);
                });
                return; // Encerra o loop quando o anime é encontrado
            }
        }

        // Se o loop terminar sem encontrar o anime
        console.error('Anime não encontrado na lista');
    } catch (error) {
        console.error('Erro ao buscar anime:', error);
    }
}

injetar();



