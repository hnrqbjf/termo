var palavras = ["tripa", "aureo", "silva", "osseo", "corte"]
var palavra = ""
palavraSorteada = Math.floor(Math.random() * palavras.length)
palavra = palavras[palavraSorteada]

palavraArray = []

palavraArray.push(palavra[0])
palavraArray.push(palavra[1])
palavraArray.push(palavra[2])
palavraArray.push(palavra[3])
palavraArray.push(palavra[4])

rodadas = 0

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

function chama() {
    letra = []
    letra.push(document.getElementById("letra11").value)
    letra.push(document.getElementById("letra12").value)
    letra.push(document.getElementById("letra13").value)
    letra.push(document.getElementById("letra14").value)
    letra.push(document.getElementById("letra15").value)

    var i = 0
    var pos = 1 
    while (i < palavra.length) {
        console.log("Palavra  " + palavra[i])
        console.log("Letra  " + letra[i])
        console.log(palavra[i] === letra[i])
        console.log(i)
        
        if (palavra[i] === letra[i]) {
            document.getElementById("letra" + 1 + pos).className = "letras-certas";
        } else {
            if (palavraArray.includes(letra[i]))
            document.getElementById("letra" + 1 + pos).className = "letras-erradas";
            else {
                document.getElementById("letra" + 1 + pos).className = "letras-inexistentes";
            }
        }
        i++
        pos++
    }
}