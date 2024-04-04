
var container = document.getElementById("videos");
var botao = document.querySelector(".checar");
var texto = document.querySelector(".textoChecar")
var auxi = localStorage.getItem('pesquisa')

async function injetar(usuario) {
    try {

        const response = await fetch('dados.json');

        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Ordena o array de animes em ordem alfabética pelo título
        data.animes.sort((a, b) => a.titulo.localeCompare(b.titulo));

        // Verifica se o anime já está na lista
        const title = usuario.toLowerCase();
        

        for (const anime of data.animes) {
            if (anime.titulo.toLowerCase().includes(title)) {
                

                // Verifica se anime.img é uma string
                if (typeof anime.img === 'string') {
                    // Cria um elemento <div> para conter o overlay e a imagem
                    var videoContainer = document.createElement("div");
                    videoContainer.style.position = "relative";
                    videoContainer.classList.add("img-redimencionar")
                    // Garante que a posição do overlay seja relativa a este contêiner

                    // Cria um elemento <div> para o overlay
                    var overlay = document.createElement("div");

                    // Adiciona classes e estilos CSS para o overlay
                    overlay.classList.add("video-overlay");
                    overlay.id = anime.titulo;
                    overlay.style.position = "absolute";
                    overlay.style.top = "0";
                    overlay.style.left = "0";
                    overlay.style.width = "100%";
                    overlay.style.height = "100%";
                    overlay.style.cursor = "pointer"; // Altera o cursor para indicar que é clicável
                    overlay.style.zIndex = "1"; // Garante que o overlay esteja sobre a imagem

                    // Adiciona um atributo onclick para chamar a função mudarPag
                    overlay.setAttribute("onclick", "mudarPag(this.id)");

                    // Cria um elemento <img> para a imagem
                    var imgElement = document.createElement("img");

                    // Configura os atributos da imagem
                    //imgElement.setAttribute("width", "300");
                    //imgElement.setAttribute("height", "450");
                    imgElement.setAttribute("src", anime.img); // Usa o URL da imagem
                    imgElement.setAttribute("title", "Embedded Video");

                    // Adiciona uma classe para estilização ou outras operações
                    imgElement.classList.add("img-geral");

                    // Adiciona o overlay e a imagem ao contêiner
                    videoContainer.appendChild(overlay);
                    videoContainer.appendChild(imgElement);

                    // Adiciona o contêiner ao contêiner principal
                    container.appendChild(videoContainer);
                } else {
                    console.error('anime.img não é uma string:', anime.img);
                }
            }
        }

        // Se o loop terminar sem encontrar o anime
        console.error('Anime não encontrado na lista');
    } catch (error) {
        console.error('Erro ao buscar anime:', error);
    }
}

function mudarPag(pag) {
    let auxi = pag.replace(/\s+/g, '-');
    window.location.href = `${auxi}.html`;

}




botao.addEventListener('click', function () {
    localStorage.setItem('pesquisa', texto.value);
    location.reload();
    
});

injetar(auxi)

//--------------------------------------------------------------------------------------------- video popup carrossel
function closePopup(fechar) {
    var popup = document.getElementById(fechar);

    popup.style.display = "none";
    iframe = document.querySelector(`#${fechar} iframe`)
    pauseVideo(iframe);
    tela = document.getElementById("filtro")

    tela.style.display = "none"

}

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





