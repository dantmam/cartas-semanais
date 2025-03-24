// Verifica se o formulário existe antes de adicionar o event listener
let form = document.getElementById("formulario");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio normal do formulário

        let respostaCorreta = "Dark"; // Substitua pela data correta (formato YYYY-MM-DD)
        let respostaDigitada = document.getElementById("resposta").value;
        let loading = document.getElementById("loading");
        let mensagem = document.getElementById("mensagem");
        let fraseExtra = document.getElementById("fraseExtra");

        mensagem.textContent = ""; // Limpa a mensagem anterior
        mensagem.className = "";
        fraseExtra.textContent = ""; // Limpa a frase extra
        loading.style.display = "flex"; // Exibe o loading

        setTimeout(() => {
            loading.style.display = "none"; // Esconde o loading após 2 segundos
            
            if (respostaDigitada.toLowerCase() === respostaCorreta.toLowerCase()) {
                mensagem.innerHTML = "<span class='check'>✔</span> E não é que gosta de mim mesmo";
                mensagem.classList.add("verde");

                setTimeout(() => {
                    window.location.href = "carta-semanal-2.html"; // Redireciona após 2 segundos
                }, 2000);
            } else {
                mensagem.textContent = "Acho que você não gosta de mim, tente novamente.";
                mensagem.classList.add("vermelho");
            }
        }, 2000); // Tempo de espera para simular o loading
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

