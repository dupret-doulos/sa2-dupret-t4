$(documet).ready(function()) {

    letslideAtual = 1;
    let listaSlides = ["banner","banner 02", "banner 03"]

    setInterval(mudarSlide, 1000)

    function mudarSlide() {
        console.log("slide atual:", slideAtual);

        // remove o slide anterior
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        }else if (slideAtual == 0) {
            $("carrossel").removeClass(listaSlides[ (listaSlides.length) - 1 ])
        }
         // adiciona o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual]);
        // indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }
    }

}


//     $("#barras").click(function() {

//         $("#menu").toggleClass("menu-ativo")

        // if( $("#menu").hasClass("menu-ativo") ) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }

//     })
     
// })

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';  
    } else {
        menu.style.display = "none";
    }
}

function cadastrarNewsLetter() {
    let email = document.getElementById("campo-email").value 

    
}
