var palavras = ["tripa","aureo","silva","osseo","corte"]
var palavra = ""
palavraSorteada =  Math.floor(Math.random() * palavras.length)
palavra = palavras[palavraSorteada]
elementoLetra1 = document.getElementById("l1")
elementoLetra2 = document.getElementById("l2")
elementoLetra3 = document.getElementById("l3")
elementoLetra4 = document.getElementById("l4")
elementoLetra5 = document.getElementById("l5")

function chama() {

    // elementoa1Valor = parseInt(elementoa1.innerText)
    // elementob1Valor = parseInt(elementob1.innerText)
    // elementoc1Valor = parseInt(elementoc1.innerText)
    // elementod1Valor = parseInt(elementod1.innerText)
    // elementoa2Valor = parseInt(elementoa2.innerText)

    letra = []
    letra.push(document.getElementById("letra1").value)
    letra.push(document.getElementById("letra2").value)
    letra.push(document.getElementById("letra3").value)
    letra.push(document.getElementById("letra4").value)
    letra.push(document.getElementById("letra5").value)

    for (var i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra[i] ){
            document.getElementById().className = 'letra-certa';
        }

    } 
    document.getElementById("letra"+i).className = 'letra-certa';

    // document.getElementById("btnReiniciar").className = "button"

}