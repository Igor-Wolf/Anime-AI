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
        const response = await fetch('dados.json');
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


                anime.videos.forEach(function(caminho, index) {
                    // Constrói o URL do vídeo com as opções para desativar o autoplay e ocultar informações
                    var videoUrl = caminho + "?autoplay=0&showinfo=0";
                    
                    // Cria um elemento <div> para conter o overlay e o vídeo
                    var videoContainer = document.createElement("div");
                    videoContainer.style.position = "relative"; // Garante que a posição do overlay seja relativa a este contêiner
                    
                    // Cria um elemento <div> para o overlay
                    var overlay = document.createElement("div");
                    
                    // Adiciona classes e estilos CSS para o overlay
                    overlay.classList.add("video-overlay");
                    overlay.style.position = "absolute";
                    overlay.style.top = "0";
                    overlay.style.left = "0";
                    overlay.style.width = "100%";
                    overlay.style.height = "100%";
                    overlay.style.cursor = "pointer"; // Altera o cursor para indicar que é clicável
                    overlay.style.zIndex = "1"; // Garante que o overlay esteja sobre o iframe
                    
                    // Adiciona um atributo onclick para chamar a função openPopup
                    overlay.setAttribute("onclick", "openPopup('video-" + index + "')");
                    
                    // Cria um elemento <iframe> para o vídeo
                    var videoElement = document.createElement("iframe");
                    
                    // Configura os atributos do vídeo
                    videoElement.setAttribute("width", "350");
                    videoElement.setAttribute("height", "200");
                    videoElement.setAttribute("src", videoUrl); // Usa o URL construído
                    videoElement.setAttribute("title", "Embedded Video");
                    videoElement.setAttribute("allowfullscreen", "");
                    
                    // Adiciona um ID único para cada elemento
                    videoElement.setAttribute("id", "video-" + index);
                    
                    // Adiciona uma classe para estilização ou outras operações
                    videoElement.classList.add("my-video");
                    
                    // Adiciona o overlay e o vídeo ao contêiner
                    videoContainer.appendChild(overlay);
                    videoContainer.appendChild(videoElement);
                    
                    // Adiciona o contêiner ao contêiner principal
                    container.appendChild(videoContainer);
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

// ----------------------------------------------------------------------- videos em geral

var i = "";

function openPopup(pop) {
    var popup = document.getElementById("popup0");
    popup.style.display = "flex";    
    var troca = document.getElementById("trocar")
    var novo = document.getElementById(pop)  
    troca.setAttribute("src", novo.src);
    tela = document.getElementById("filtro")

    tela.style.display ="flex"
    
}

function closePopup(fechar) {
    var popup = document.getElementById(fechar);
   
    popup.style.display = "none";
    iframe = document.querySelector(`#${fechar} iframe`)
    pauseVideo(iframe);
    tela = document.getElementById("filtro")

    tela.style.display ="none"
    
}

var iframe = document.querySelector('iframe');

// Função para pausar o vídeo
function pauseVideo(video) {
    i = video.src;
    video.src = "";
    video.src = i;
    
}


//--------------------------------------------------------------------------------------------- video popup carrossel


var i = "";

function openCapa(pop) {
    var popup = document.getElementById(pop);
    popup.style.display = "flex";
    tela = document.getElementById("filtro")

    tela.style.display ="flex"
    
}

var iframe = document.querySelector('iframe');

// Função para pausar o vídeo
function pauseVideo(video) {
    i = video.src;
    video.src = "";
    video.src = i;
    
}



