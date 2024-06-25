from title import titles

def criar_html(nome_arquivo, titulo):
    # Conteúdo do arquivo HTML com o título dinâmico
    conteudo_html = f'''
    <!DOCTYPE html>
    <html lang="pt-BR">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{titulo}</title>
    
        <link rel="stylesheet" href="style/main.css">
        <link rel="stylesheet" href="style/responsive.css">
        <link rel="stylesheet" href="animes.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
        <!-- owl css -->
        <link rel="stylesheet" href="style/owl/owl.carousel.min.css">
        <link rel="stylesheet" href="style/owl/owl.theme.default.min.css">
    
    </head>
    
    <body>
        <div id="filtro"></div>
        <!------------------------------------------------------------------------------------------------------------------------------- Cabeçalho -->
    
        <header>
            <div class="container">
                <h2 id="logo" class="logo" onclick="window.location.href = '../index.html';">ANIMEAI</h2>
                <nav id="menu--desktop">
                    <a href="../index.html">Início</a>
                    <a href="busca.html">Busca</a>
                    <a href="filmes.html">Filmes</a>
                    <a href="series.html">Séries</a>
    
                </nav>
            </div>
        </header>
    
        <nav class="nav--mobile">
            <ul class="menu menu--mobile">
                <li class="menu__item">
                    <a class="menu__link active" href="../index.html">
                        <i class="menu__icon bi bi-house-door"></i>
                        <span class="menu__text">Home</span>
                    </a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="busca.html">
                        <i class="menu__icon bi bi-search"></i>
                        <span class="menu__text">Busca</span>
                    </a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="filmes.html">
                        <i class="menu__icon bi bi-film"></i>
                        <span class="menu__text">Filmes</span>
                    </a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="series.html">
                        <i class="menu__icon bi bi-tv"></i>
                        <span class="menu__text">Séries</span>
                    </a>
                </li>
            </ul>
        </nav>
        <!------------------------------------------------------------------------------------------------------------------------------- Cabeçalho -->
        <main>
            <div class="pipocar">
                
            </div>
            <div class="bannerTopo">
    
                 
            </div>
            <div id="popup0" class="popup">
                <div class="popup-content">
                    <div id="spamar">
                        <span class="close" onclick="closePopup('popup0')">&times;</span>
                    </div>
                    <div class="video-container">
                        <iframe id="trocar" src=" " title="Solo Leveling em PORTUGUÊS | TRAILER OFICIAL" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
    
                </div>
            </div>
            <div class="geral">
                <div class="externa">
                    <div class="boxImage">
    
                        <img class="imagem" src="" alt="">
                    </div>
    
                    <div class="textContent">
    
                    <p class="primeiro"></p>
                       <p class="ano"></p>
                        <p class="cassificacao"></p>
                        <p class="genero"></p>
                        <p class="sinopse"></p>
                        <p class="formato"></p>
                        <p class="epi"></p>
    
                    </div>
    
                </div>
                <div id="videos">
    
    
    
                </div>
    
            </div>
        </main>
        <footer>
    
            <div>
                <p>&copy; 2024. Todos os Direitos Reservados à Igor Barbosa. Desenvolvido por <a id="git"
                        href="https://github.com/Igor-Wolf">IB</a></p>
            </div>
        </footer>
        <script src="https://kit.fontawesome.com/2c36e9b7b1.js"></script>
        <script src="js/owl/jquery.min.js"></script>
        <script src="js/owl/owl.carousel.min.js"></script>   
        <script src="banner.js"></script>
        <script src="js/main.js"></script>    
        <script src="principal.js"></script>  
    
    </body>
    
    </html>
    '''
    
    # Escrever o conteúdo no arquivo .html com codificação UTF-8
    with open(nome_arquivo, 'w', encoding='utf-8') as file:
        file.write(conteudo_html)
    

for i, titulo in enumerate(titles, start=1):
    original_string = titulo
    # Substituir espaços por hífens
    modified_string = original_string.replace(" ", "-")
    # Nome do arquivo HTML será o título modificado mais a extensão .html
    nome_do_arquivo = f'{modified_string}.html'
    # Chamar a função para criar o arquivo HTML
    criar_html(nome_do_arquivo, titulo)
    print(f'Arquivo HTML "{nome_do_arquivo}" criado com sucesso!')
