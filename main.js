<<<<<<< HEAD

=======
>>>>>>> 86763012553986fc4174c72ffed173d51eaaf22d
function toggleBackgroundColor() {
    var bodyElement = document.getElementById("body");
    
    // Alterna entre preto e branco
    if (bodyElement.style.backgroundColor === "white") {
        bodyElement.style.backgroundColor = "black";
    } else {
        bodyElement.style.backgroundColor = "white";
    }
}
const intervalo = setTimeout(toggleBackgroundColor, random);
function random(){
    var random = Math.random() * 2000 + 100;
    return random;
}


// Alternar cor a cada 1000 milissegundos (1 segundo)
setInterval(toggleBackgroundColor, intervalo);
<<<<<<< HEAD
//utilizar uma funçao random pra piscar legal

=======
//utilizar uma funçao random pra piscar legal
>>>>>>> 86763012553986fc4174c72ffed173d51eaaf22d
