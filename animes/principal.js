let img = document.querySelector(".imagem")
let titulopag = document.querySelector("title")
let year = document.querySelector(".ano")
let classification = document.querySelector(".cassificacao")
let gender = document.querySelector(".genero")
let resumo = document.querySelector(".sinopse")
let docTitle = document.querySelector("title")
let forma = document.querySelector(".formato")
let first = document.querySelector(".primeiro")
let epi = document.querySelector(".epi")
var container = document.getElementById("videos");
let strGender = "";

let divExterna = document.querySelector('.geral');


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


        // Verifica se o anime já está na lista
        const title = titulopag.innerHTML;


        for (const anime of data.animes) {
            console.log("Comparando com:", anime.titulo);
            if (anime.titulo === title) {
                console.log("Anime encontrado:", anime);

                // Se o anime estiver na lista, realizar as operações necessárias

                anime.genero.forEach((element, index) => {

                    if (index === anime.genero.length - 1) {

                        strGender += element
                    }
                    else {
                        strGender += `${element}, `
                    }
                });


                titulopag.innerHTML = anime.titulo;
                first.innerHTML = titulopag.innerHTML;
                year.innerHTML = `<strong>Ano</strong>: ${anime.ano}`;
                classification.innerHTML = `<strong>Classificação indicativa</strong>: ${anime.classificacao}`;
                gender.innerHTML = `<strong>Gênero:</strong> ${strGender}`;
                resumo.innerHTML = `<strong>Sinopse:</strong> ${anime.sinopse}`;
                forma.innerHTML = `<strong>Formato:</strong> ${anime.formato}`;
                epi.innerHTML = `<strong>Episódios:</strong> ${anime.episodios}`
                img.src = anime.img;


                anime.videos.forEach(function (caminho, index) {
                    // Constrói o URL do vídeo com as opções para desativar o autoplay e ocultar informações
                    var videoUrl = caminho + "?autoplay=0&showinfo=0";

                    // Cria um elemento <div> para conter o overlay e o vídeo
                    var videoContainer = document.createElement("div");
                    videoContainer.style.position = "relative"; // Garante que a posição do overlay seja relativa a este contêiner

                    // Cria um elemento <div> para o overlay
                    var overlay = document.createElement("div");

                    // Adiciona classes e estilos CSS para o overlay

                    var tumbvideo = getLastPart(caminho)

                    overlay.classList.add("video-overlay");
                    overlay.style.backgroundImage = `url("https://i.ytimg.com/vi/${tumbvideo}/mqdefault.jpg")`
                    overlay.style.backgroundSize = "cover"
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

    tela.style.display = "flex"

}

function closePopup(fechar) {
    var popup = document.getElementById(fechar);

    popup.style.display = "none";
    iframe = document.querySelector(`#${fechar} iframe`)
    pauseVideo(iframe);
    tela = document.getElementById("filtro")

    tela.style.display = "none"

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

    tela.style.display = "flex"

}

var iframe = document.querySelector('iframe');

// Função para pausar o vídeo
function pauseVideo(video) {
    i = video.src;
    video.src = "";
    video.src = i;

}





function getLastPart(url) {
    // Divide a string pelo caractere '/' e retorna o último elemento do array
    const parts = url.split('/');
    return parts[parts.length - 1];

}


//--------------------------------------------------------------------------------------------- Recomendações




const linhaDivisoria = document.createElement('div');

// Ajustando o CSS inline
linhaDivisoria.style.marginTop = "20px";
linhaDivisoria.style.marginBottom = "10px";
linhaDivisoria.style.borderLeft = "5px solid #ff0000"; // Exemplo: uma barra lateral vermelha
linhaDivisoria.style.paddingLeft = "15px";

// Definimos o que tem dentro da div que criamos
linhaDivisoria.innerHTML = `
    <span>
        <h3>Recomendações</h3>
    </span>
    <div class="divisor"></div>
`;

// Agora sim, adicionamos o objeto à div externa
divExterna.appendChild(linhaDivisoria);


const carregarComponenteCarrossel = (containerPai, lista) => {
    // 1. Seleciona a div onde tudo será injetado (ex: .geral)
    const pai = document.querySelector(containerPai);
    
    // 2. Cria a div interna que o Owl Carousel precisa
    const divCarrossel = document.createElement('div');
    divCarrossel.className = 'owl-two owl-carousel owl-theme';

    // 3. Gera o HTML dos itens
    const itensHTML = lista.map(anime => `
        
        <div class="item">
            <img class="box-anime" 
                 src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${anime.img}" 
                 alt="${anime.titulo}" 
                 style="max-height: 400px; width: 100%; object-fit: cover";
                 onclick="window.location.href = '${anime.titulo.replaceAll(" ", "-")}.html'">

                 <div class="info-anime" style="padding: 10px; background: rgba(0,0,0,0.7); color: white;">
            <h4 style="margin: 0;">${anime.titulo} ${anime.similaridade}</h4>
            <p style="font-size: 12px;">Clique para ver mais detalhes </p>
        </div>
        </div>

    `).join('');

    // 4. Alimenta a div do carrossel com os itens
    divCarrossel.innerHTML = itensHTML;

    // 5. Injeta a div do carrossel dentro da div externa (.geral)
    pai.appendChild(divCarrossel);

    // 6. Inicializa o plugin do carrossel
    $(divCarrossel).owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 4 }
        }
    });
};

$(document).ready(async function() { // Adicionamos async aqui no ready
    
   const buscarAnimes = async (tituloAnime) => {
    try {
        console.log("Iniciando busca para:", tituloAnime); // LOG 1

        const resposta = await fetch(`https://anime-ai-recomend-back.vercel.app/api/recomendation/2/${tituloAnime}`); 
        
        console.log("Status da Resposta:", resposta.status); // LOG 2 (Deve ser 200)

        if (!resposta.ok) throw new Error(`Erro HTTP! status: ${resposta.status}`);

        const dados = await resposta.json();
        
        console.log("Dados recebidos da API:", dados); // LOG 3 - VEJA O FORMATO AQUI
        
        // Se quiser ver um alerta com o primeiro nome da lista:
        if(dados.length > 0) {
            
        }

        return dados; 
        
    } catch (erro) {
        console.error("ERRO DETALHADO:", erro);
        alert("Falha na requisição: " + erro.message);
        return null;
    }
};
    
    // 1. Você precisa de um título para a busca (exemplo: 'Naruto')
    const tituloBusca = titulopag.innerHTML;

    // 2. Você PRECISA usar o await aqui, senão o JS passa batido sem os dados
    const listaAnimes = await buscarAnimes(tituloBusca);

    // 3. Só carrega o componente se os dados existirem
    if (listaAnimes) {
        carregarComponenteCarrossel('.geral', listaAnimes);
    }
});