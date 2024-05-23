
function criarCarrosselAnimes() {
    // Selecionar a div com a classe "banner"
    var bannerDiv = document.querySelector('.bannerTopo');
    var pipoca = document.querySelector(".pipocar")

    // Verificar se a div foi encontrada
    if (bannerDiv) {
        // Criar o conteúdo do carrossel de animes dinamicamente
        var carrosselConteudo = `
        <div class="owl-one owl-carousel owl-theme">
        <div class="item">
            <div class="anime-principal a1">
                <div class="container">
                    <h3 class="titulo">Solo Leveling</h3>
                    <p class="descricao">
                        Em um mundo onde caçadores – humanos que possuem habilidades mágicas – devem lutar contra
                        monstros
                        mortais para proteger a raça humana de certa aniquilação, um caçador notoriamente fraco
                        chamado Sung
                        Jinwoo se encontra em uma luta aparentemente interminável pela sobrevivência.
                    </p>
                    <div class="botoes">

                        <button role="button" class="botao" onclick="openCapa('popup1')">
                            <i class="bi bi-play-circle"></i>
                            ASSITIR AGORA
                        </button>
                        <button role="button" class="botao" onclick="window.location.href = 'Solo-Leveling.html';">
                        <i class="bi bi-info-circle"></i>
                            MAIS INFORMAÇÕES
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="anime-principal a2">
                <div class="container">
                    <h3 class="titulo">Tower of God</h3>
                    <p class="descricao">
                        Em um mundo onde caçadores – humanos que possuem habilidades mágicas – devem lutar contra
                        monstros
                        mortais para proteger a raça humana de certa aniquilação, um caçador notoriamente fraco
                        chamado Sung
                        Jinwoo se encontra em uma luta aparentemente interminável pela sobrevivência.
                    </p>
                    <div class="botoes">
                        <button role="button" class="botao" onclick="openCapa('popup2')">
                        <i class="bi bi-play-circle"></i>
                            ASSITIR AGORA
                        </button>
                        <button role="button" class="botao" onclick="window.location.href = 'Tower-of-God.html'">
                        <i class="bi bi-info-circle"></i>
                            MAIS INFORMAÇÕES
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="anime-principal a3">
                <div class="container">
                    <h3 class="titulo">Chainsaw Man</h3>
                    <p class="descricao">
                        Denji tem um sonho simples — viver uma vida feliz e pacífica, passando tempo com uma garota
                        de quem gosta. No entanto, isso está longe da realidade, já que Denji é forçado pela yakuza
                        a matar demônios para pagar suas dívidas avassaladoras. Usando seu demônio de estimação,
                        Pochita, como arma, ele está pronto para fazer qualquer coisa por um pouco de dinheiro.
                    </p>
                    <div class="botoes">
                        <button role="button" class="botao" onclick="openCapa('popup3')">
                            <i class="bi bi-play-circle"></i>
                            ASSITIR AGORA
                        </button>
                        <button role="button" class="botao" onclick="window.location.href = 'Chainsaw-Man.html'">
                            <i class="bi bi-info-circle"></i>
                            MAIS INFORMAÇÕES
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="anime-principal a4">
                <div class="container">
                    <h3 class="titulo">Frieren</h3>
                    <p class="descricao">
                        Em um mundo onde caçadores – humanos que possuem habilidades mágicas – devem lutar contra
                        monstros
                        mortais para proteger a raça humana de certa aniquilação, um caçador notoriamente fraco
                        chamado Sung
                        Jinwoo se encontra em uma luta aparentemente interminável pela sobrevivência.
                    </p>
                    <div class="botoes">
                        <button role="button" class="botao" onclick="openCapa('popup4')">
                            <i class="bi bi-play-circle"></i>
                            ASSITIR AGORA
                        </button>
                        <button role="button" class="botao" onclick="window.location.href = 'Frieren-e-a-Jornada-para-o-Alem.html'">
                            <i class="bi bi-info-circle"></i>
                            MAIS INFORMAÇÕES
                        </button>
                    </div>
                </div>
            </div>
        </div>



    </div>
        `;
        var pulando = `
        
        
        <div class="container">
            <div id="popup1" class="popup">
                <div class="popup-content">
                    <div id="spamar">
                        <span class="close" onclick="closePopup('popup1')">&times;</span>
                    </div>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/MWrsQmBIkhM"
                            title="Solo Leveling em PORTUGUÊS | TRAILER OFICIAL" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div id="popup2" class="popup">
                <div class="popup-content">
                    <div id="spamar">
                        <span class="close" onclick="closePopup('popup2')">&times;</span>
                    </div>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/TcYz4v1Y9ko" title="Tower of God | TRAILER OFICIAL"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div id="popup3" class="popup">
                <div class="popup-content">
                    <div id="spamar">
                        <span class="close" onclick="closePopup('popup3')">&times;</span>
                    </div>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/86huOYthTb4" title="Chainsaw Man | TRAILER OFICIAL 2"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div id="popup4" class="popup">
                <div class="popup-content">
                    <div id="spamar">
                        <span class="close" onclick="closePopup('popup4')">&times;</span>
                    </div>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/eXjbk-4ljgc"
                            title="Frieren e a Jornada para o Além | TRAILER OFICIAL" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
        
        
        `;
        // Definir o conteúdo da div "banner" como o carrossel de animes
        bannerDiv.innerHTML = carrosselConteudo;
        pipoca.innerHTML = pulando;
    } else {
        console.error('Div com classe "banner" não encontrada.');
    }

}

// Chamar a função para criar o carrossel de animes quando o script banner.js for carregado
criarCarrosselAnimes();
