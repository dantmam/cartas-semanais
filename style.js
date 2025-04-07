let form = document.getElementById("formulario");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio normal do formulário

        let respostaCorreta = "Vestido xadrez";
        let radios = document.getElementsByName("alternativa");
        let respostaSelecionada = "";
        let loading = document.getElementById("loading");
        let mensagem = document.getElementById("mensagem");
        let fraseExtra = document.getElementById("fraseExtra");

        // Verifica qual radio foi marcado
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                respostaSelecionada = radios[i].value;
                break;
            }
        }

        mensagem.textContent = "";
        mensagem.className = "";
        fraseExtra.textContent = "";
        loading.style.display = "flex";

        setTimeout(() => {
            loading.style.display = "none";

            if (respostaSelecionada.toLowerCase() === respostaCorreta.toLowerCase()) {
                mensagem.innerHTML = "<span class='check'>✔</span> E não é que gosta de mim mesmo";
                mensagem.classList.add("verde");

                setTimeout(() => {
                    window.location.href = "carta-semanal-4.html";
                }, 2000);
            } else {
                mensagem.textContent = "Acho que você não gosta de mim, tente novamente.";
                mensagem.classList.add("vermelho");
            }
        }, 2000);
    });
}


// Inicializa o Slick apenas se o elemento existe
jQuery(document).ready(function ($) {
    if ($('.carousel-fotos').length) { 
        $('.carousel-fotos').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
});

function atualizarCountdown() {
    var targetDate = new Date("2025-05-11T12:40:00").getTime();
    var now = new Date().getTime();
    var distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "O Gô chegou!";
        document.querySelector(".countdown-container").style.display = "none";
        return;
    }

    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    var weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("months").innerText = months;
    document.getElementById("weeks").innerText = weeks;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(atualizarCountdown, 1000);
atualizarCountdown();

