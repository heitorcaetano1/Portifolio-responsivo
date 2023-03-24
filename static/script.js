/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
     menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
     body.classList.toggle("menu-nav-active");
});


/* Fecha o menu quando clicar em algum item e muda o ícone para list */
const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item =>{
        item.addEventListener("click", () => {
            if(body.classList.contains("menu-nav-active")) {
                body.classList.remove("menu-nav-active")
                menuMobile.classList.replace("bi-x", "bi-list")
            }
        })
})

window.sr = ScrollReveal({reset: true});
sr.reveal('.sobre', {duration: 6000 });

sr. reveal('.habilidade', {
    rotate: {x: 0, y: 80,z: 0},
    duration: 6000
});
sr. reveal('.cv2', {
    rotate: {x: 100, y: 10, z: 10},
    duration: 6000
} );
sr.reveal('.portfolio', {duration: 5000});

sr.reveal('.contact', {
    rotate: {x: 100,y: 100,z: 0},
    duration: 6000
});


// Ativar carregamento de botão enviar

const btEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"
})

//Tirar a mensagem de sucesso depois de 5 segundos

setTimeout(() =>{
    document.querySelector("#alerta").style.display  = 'none';
}, 5000)
