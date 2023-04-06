var palavras = ["tripa", "aureo", "silva", "osseo", "corte"]
var palavra = ""
palavraSorteada = Math.floor(Math.random() * palavras.length)
palavra = palavras[palavraSorteada]
rodada = 1

palavraArray = []

palavraArray.push(palavra[0])
palavraArray.push(palavra[1])
palavraArray.push(palavra[2])
palavraArray.push(palavra[3])
palavraArray.push(palavra[4])

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

function chute() {
    // $('input[termo-linha="1"][termo-pos="0"]').val();

    letras = [];

    for (var i = 0; i < 5; i++) {
        letras.push($('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').val());
    }
    console.log(letras)

    if (letras.includes("")) {
        alert("letras vazias")
    } else {
        var i = 0
        while (i < palavra.length) {
            console.log("Palavra  " + palavra[i] + "     Letra  " + letras[i] + palavra[i] === letras[i])
            console.log("Contador   " + i)

            if (palavra[i] === letras[i]) {
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').addClass("letras-certas").removeClass("letras-brutas").removeClass("letras-erradas").removeClass("letras-inexistentes")
            } else if (palavra.includes(letras[i]))
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').addClass("letras-erradas").removeClass("letras-certas").removeClass("letras-inexistentes").removeClass("letras-brutas")
            else {
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').addClass("letras-inexistentes").removeClass("letras-certas").removeClass("letras-brutas").removeClass("letras-erradas")
            }
            i++
        }

        var atributo = 'letras-certas';
        var primeiraClasse = null;

        $('input[termo-linha="' + rodada + '"]').each(function (index) {
            var classeAtual = $(this).attr('class');
            validador = true
            if (index === 0) {
                primeiraClasse = classeAtual;
            } else if (classeAtual !== primeiraClasse) {
                validador = false
                return false;
            }
        });

        if (validador === true) {
            alert("voce venceu")
        } else {
            for (var i = 0; i < 5; i++) {
                $('input[termo-linha="' + rodada + '"][termo-pos="' + i + '"]').prop('disabled', true);
                proximaRodada = rodada + 1
                $('input[termo-linha="' + proximaRodada + '"][termo-pos="' + i + '"]').prop('disabled', false);
            }

            alert("Tente novamente")
        }
        rodada++
    }
}