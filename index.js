// DADO 1
let numeroRandom1 = Math.floor(Math.random() * 6) + 1; // 1-6

let imagenRandomDado1 = "dado" + numeroRandom1 + ".png"; // dado1.png - dado6.png

let imagenRandomSrc1 = "images/" + imagenRandomDado1; // images/dado1.png - images/dado6.png

let imagen1 = document.querySelectorAll("img")[0];

imagen1.setAttribute("src", imagenRandomSrc1);


// DADO 2
let numeroRandom2 = Math.floor(Math.random() * 6) + 1;

let imagenRandomDado2 = "dado" + numeroRandom2 + ".png";

let imagenRandomSrc2 = "images/" + imagenRandomDado2;

let imagen2 = document.querySelectorAll("img")[1];

imagen2.setAttribute("src", imagenRandomSrc2);

//CAMBIAR TÍTULO
if (numeroRandom1 > numeroRandom2){
    document.querySelector("h1").innerHTML = "🏁¡Gana jugador 1!";
}else if (numeroRandom1 < numeroRandom2){
    document.querySelector("h1").innerHTML = "¡Gana jugador 2! 🏁";
}else {
    document.querySelector("h1").innerHTML = "¡Empate! 🤷"
}