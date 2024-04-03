let img = document.querySelector(".imagem")
let titulo = document.querySelector(".titulo")
let year = document.querySelector(".ano")
let classification = document.querySelector(".cassificacao")
let gender = document.querySelector(".genero")
let resumo = document.querySelector(".sinopse")
let docTitle = document.querySelector("title")
let forma = document.querySelector(".formato")
let anime;





function realizar() {
    
    buscar(docTitle.innerHTML)
        .then(anime => {
            
            titulo.innerHTML = anime.titulo
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


realizar();