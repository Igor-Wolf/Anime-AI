$('.owl-two').owlCarousel({

    loop: false,
    margin: 10,
    nav: false,
    responsive: {


        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        },
        1400: {
            items: 6
        }
    }
})


$('.owl-one').owlCarousel({

    loop: true,
    margin: 0,
    nav: false,
    responsive: {


        0: {
            items: 1
        }
    }
})



function mudarBaner() {


    $('.owl-one').trigger('next.owl.carousel');

}
setInterval(mudarBaner, 8000);


//--------------------------------------------------------------------------------------------- video popup


var i = "";

function openPopup(pop) {
    var popup = document.getElementById(pop);
    popup.style.display = "flex";
    
}

function closePopup(fechar) {
    var popup = document.getElementById(fechar);
    popup.style.display = "none";
    iframe = document.querySelector(`#${fechar} iframe`)
    pauseVideo(iframe);
    
}

var iframe = document.querySelector('iframe');

// Função para pausar o vídeo
function pauseVideo(video) {
    i = video.src;
    video.src = "";
    video.src = i;
    
}


function nadaAcontece() {
    
    alert("Função não implementada ainda")
}