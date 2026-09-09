console.log("Apple Clone carregado");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

window.addEventListener("scroll", () => {

    const evento = document.querySelector(".evento");

    if(evento){
        evento.style.backgroundPositionY =
            (window.scrollY * 0.3) + "px";
    }

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});