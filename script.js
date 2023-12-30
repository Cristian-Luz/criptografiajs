function criptografar() {
    var textoOriginal = document.getElementById('inputText').value;
    var textoCriptografado = cifraCesar(textoOriginal, 3); // Use a cifra de César como exemplo, com chave 3
    exibirResultado(textoCriptografado);
}

function descriptografar() {
    var textoCriptografado = document.getElementById('inputText').value;
    var textoDescriptografado = cifraCesar(textoCriptografado, -3); // Use a cifra de César como exemplo, com chave -3
    exibirResultado(textoDescriptografado);
}

function cifraCesar(texto, chave) {
    var textoCriptografado = '';

    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];

        if (char.match(/[a-zA-Z]/)) {
            var codigo = texto.charCodeAt(i);
            var limite = (char === char.toUpperCase()) ? 65 : 97;
            textoCriptografado += String.fromCharCode((codigo - limite + chave + 26) % 26 + limite);
        } else {
            textoCriptografado += char;
        }
    }

    return textoCriptografado;
}

function exibirResultado(resultado) {
    document.getElementById('resultado').innerHTML = resultado;
}

function limparResultado() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('inputText').value = '';
}
