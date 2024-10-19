function toggleBackgroundColor() {
    var bodyElement = document.getElementById("body");
    
    // Alterna entre preto e branco
    if (bodyElement.style.backgroundColor === "white") {
        bodyElement.style.backgroundColor = "black";
    } else {
        bodyElement.style.backgroundColor = "white";
    }
}

// Alternar cor a cada 1000 milissegundos (1 segundo)
setInterval(toggleBackgroundColor, 1000);
