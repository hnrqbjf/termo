var btnChute = document.getElementById("div-botao-chute")
var btnDivReiniciar = document.getElementById("div-botao-reiniciar")
var btnReiniciar = document.getElementById("botao-reiniciar")
var btnDivReiniciar2 = document.querySelectorAll("button:nth-child(5)");
var palavra = ""
var rodada = 1
var arrayPalavrasValidas = []
var palavraArray = []

fetch('palavrasSorteio.json')
    .then(response => response.json())
    .then(data => {
        const keys = Object.keys(data);
        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys[randomIndex];
        palavra = data[randomKey];
    });

fetch('palavrasValidas.json')
    .then(response => response.json())
    .then(data => {
        arrayPalavrasValidas = data;
    })
    .catch(error => console.error(error));

for (var i = 0; i < 5; i++) {
    palavraArray.push(palavra[i])
}

function reiniciarPartida() {
    location.reload()
}

function chute() {
    letras = [];
    var acertoFull = 0
    var palavraInvalida = true;

    for (var i = 0; i < 5; i++) {
        letras.push($('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').val());
    }

    palavraChutada = letras.join(" ").replace(/\s+/g, '');

    if (arrayPalavrasValidas.includes(palavraChutada)) {
        palavraInvalida = false;
    } else {
        palavraInvalida = true;
    }

    if (letras.includes("") || letras.includes(" ")) {
        $("div.warning").fadeIn(300).delay(3000).fadeOut(600);
    } else if (palavraInvalida === true) {
        $("div.warning-palavra-invalida").fadeIn(300).delay(3000).fadeOut(600);
    } else {
        var i = 0
        while (i < palavra.length) {
            if (palavra[i] === letras[i]) {
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').addClass("letras-certas").removeClass("letras-brutas").removeClass("letras-erradas").removeClass("letras-inexistentes")
                acertoFull++
            } else if (palavra.includes(letras[i]))
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').addClass("letras-erradas").removeClass("letras-certas").removeClass("letras-inexistentes").removeClass("letras-brutas")
            else {
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').addClass("letras-inexistentes").removeClass("letras-certas").removeClass("letras-brutas").removeClass("letras-erradas")
            }
            i++
        }

        if (acertoFull === 5) {
            $("div.success").fadeIn(300).delay(3000).fadeOut(600);
            btnChute.style.display = "none"
            document.querySelector('.button:nth-of-type(5)').style.display = "inline-block"
        } else {
            for (var i = 0; i < 6; i++) {
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').prop('disabled', true);
                proximaRodada = rodada + 1
                $('input[termo-linha="' + proximaRodada + '"][termo-pos="' + i + '"]').prop('disabled', false);
            }
        }

        if (rodada === 6 && acertoFull != 5) {
            btnChute.style.display = "none"
            document.querySelector('.button:nth-of-type(5)').style.display = "inline-block"
        }
        rodada++
    }
}

var container = document.getElementsByClassName("container")[0];
container.onkeyup = function (e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}