const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});

const topButton = document.getElementById("topButton");

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    const pesquisa = prompt("O que você está procurando?");

    if (pesquisa) {

        alert(
            "Você pesquisou por: " + pesquisa
        );

    }

});


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(

    function (elementos) {

        elementos.forEach(function (elemento) {

            if (elemento.isIntersecting) {

                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

let slideAtual = 0;
let transformInicial = ((document.querySelector('.apple-carousel').offsetWidth - 900)/2) - 900
track.style.transform = `translateX(${transformInicial}px)`;

function mostrarSlide(numero) {
    slideAtual = numero;
    const slide = slides[slideAtual];

    track.style.transform = `translateX(${transformInicial - (slideAtual * 900)}px)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideAtual);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        mostrarSlide(index);
        clearInterval(mudarImagemInterval)
        setInterval(criarIntervalo())
    });
});

let mudarImagemInterval;

function criarIntervalo(){
    mudarImagemInterval = setInterval(() => {
        slideAtual++;
        if (slideAtual >= slides.length-2){
            slideAtual = 0;
        }
        mostrarSlide(slideAtual);
    }, 5000);
}

criarIntervalo()

window.addEventListener('resize', () => {
    console.log((document.querySelector('.apple-carousel').offsetWidth - 900)/2)
    transformInicial = ((document.querySelector('.apple-carousel').offsetWidth - 900)/2) - 900
    track.style.transform = `translateX(${transformInicial}px)`;
    clearInterval(mudarImagemInterval)
    setInterval(criarIntervalo())
})

