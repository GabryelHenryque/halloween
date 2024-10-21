
function toggleBackgroundColor() {
    var bodyElement = document.getElementById("body");
    
    // Alterna entre preto e branco
    if (bodyElement.style.backgroundColor === "white") {
        bodyElement.style.backgroundColor = "black";
    } else {
        bodyElement.style.backgroundColor = "white";
    }
}
function random(){
    return random = Math.random() * 2000 + 3000;
}


setInterval(()=>{
    // Alternar cor a cada 1000 milissegundos (1 segundo)
    intervalo = setInterval(toggleBackgroundColor, random);
        //utilizar uma funçao random pra piscar legal
        //setInterval(intervalo, random)
    setTimeout(()=>{
        clearInterval(intervalo)
        document.getElementById("body").style.backgroundColor = "black";
    },1000)

},3000)



