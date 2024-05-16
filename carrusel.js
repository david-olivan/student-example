let imagenes = [
    document.getElementById("imagen1"),
    document.getElementById("imagen2"),
    document.getElementById("imagen3"),
    document.getElementById("imagen4"),
    document.getElementById("imagen5"),
];


let imagenActual = 0;
const VELOCIDAD = 3000;
let pausa = false;

imagenes[1].style.display = "none";
imagenes[2].style.display = "none";
imagenes[3].style.display = "none";
imagenes[4].style.display = "none";

function pausar() {
    if (pausa === false) {
        pausa = true;
        document.getElementById("btnPausa").innerHTML ="reproducir";
    } else {
        pausa = false;
        btnPausa.innerHTML = "Pausar";
    }
}

function autosSiguiente() {
    if (pausa === false) {
    siguiente();
    }
    setTimeout(autosSiguiente, VELOCIDAD);
}

function siguiente() {
    imagenes[imagenActual].style.display = "none";

    if (imagenActual === 4) { 
        imagenActual = 0; 
    } else {
        imagenActual += 1;
    }

    imagenes[imagenActual].style.display = "inline-block";
}

setTimeout(autosSiguiente, VELOCIDAD);