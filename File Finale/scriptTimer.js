// Importazione del body da modificare in MAINPROJECT

let body = document.getElementsByTagName("body")[0];

// Creazione del div contenente il main cotainer del Countdown.

let mainContainer = document.createElement("div");
mainContainer.className = "mainContainer";
body.appendChild(mainContainer);

// Da qui iniziano gli elementi UI facenti parte del Timer

// contenitore cerchio

let circleContainer = document.createElement("div");
circleContainer.className = "circleContainer";
mainContainer.appendChild(circleContainer);

// il cerchio contiene altri 4 elementi a seguire la spiegazione.

// Il primo componente è un cerchio di colore bianco elemento sul quale verrà costruito il timer

let semicircle1 = document.createElement("div");
semicircle1.className = "semicircle1";
circleContainer.appendChild(semicircle1);

// Il secondo componente è un rettangolo che verrà mascherato e sarà líndicatore di scorrimento

let semicircle2 = document.createElement("div");
semicircle2.className = "semicircle2";
circleContainer.appendChild(semicircle2);

// Il terzo componente è un rettangolo anche esso verrà mascherato e sarà un elemento visibile solo dopo la rotazione dellélemento 2, in modo che ricompaia e dia l'effetto di rotazione completa

let semicircle3 = document.createElement("div");
semicircle3.className = "semicircle3";
circleContainer.appendChild(semicircle3);

// Il quarto componente è un cerchio più piccolo che mostrerà lo spesore della barra del tempo

let outermost = document.createElement("div");
outermost.className = "outermost";
circleContainer.appendChild(outermost);

// DA QUI INIZIA IL CODICE
// voglio che l'angolo vada da 360 >>> 0
// la formula da utilizzare prevede l'uso del tempo, voglio che la rotazione di 360 venga Divisa prima dal timer con il suo tempo massimo
// e che venga diviso poi da tutti secondi successivi.

// in sostanza: Angolo necessario = TempoRimanente/TempoImpostato * 360. la frazione si fa sempre piu piccola >>> l'angolo si fa sempre più piccolo
// è neccessario anche dichiarare una variabile che contenga il tempo rimanente che è let tempoRimanente = tempoFuturo - tempoCorrente.

// input, in questo caso mi servono solo i secondi

const sec = 16;

// la funzione di countdown. dovrò specificare quando invocarla e cosa fare una volta arrivata a 0
// (inizio di ogni domanda, passa alla domanda successiva, aggiungi 0 al conteggio domande)

// I PARAMETRI A SEGUIRE SONO DA MODIFICARE IN BASE AL MAINPROG
let showSec;
let domanda;
let TastoInizio = document.getElementById("iniziaTest");
let tempoImpostato;
let tempoFuturo;

mainContainer.style.display = "none";

TastoInizio.addEventListener("click", function () {
	if (!domanda && flag.checked) {
		const secondi = sec * 1000; // Calcola il tempo in millisecondi
		const inizio = Date.now(); // Ottieni il tempo attuale
		tempoImpostato = secondi; // Imposta il tempo impostato
		tempoFuturo = inizio + tempoImpostato; // Calcola il tempo futuro
		domanda = setInterval(Countdown); // Avvia il setInterval ogni secondo
		mainContainer.style.display = "flex";
	}
});

// I PARAMETRI QUI SOPRA SONO DA MODIFICARE IN BASE AL MAINPROG

/*  */

let containerCount = document.createElement("div");
containerCount.className = "containerCount";
mainContainer.appendChild(containerCount);

let secondiScript = document.createElement("div");
secondiScript.className = "secondiScript";
containerCount.appendChild(secondiScript);
secondiScript.innerHTML = "<p><b>SECONDS</b></p>";

let numeri = document.createElement("div");
numeri.className = "numeri";
containerCount.appendChild(numeri);

let remainingScript = document.createElement("div");
remainingScript.className = "remainingScript";
remainingScript.innerHTML = "<p>REMAINING</p>";
containerCount.appendChild(remainingScript);

function Countdown() {
	// variabili e costanti

	const tempoCorrente = Date.now();
	const tempoRimanente = tempoFuturo - tempoCorrente;
	const angolo = (tempoRimanente / tempoImpostato) * 360;

	// indicatore del progresso

	if (angolo > 180) {
		semicircle3.style.display = "none";
		semicircle1.style.transform = "rotate(180deg)";
		semicircle2.style.transform = `rotate(${angolo}deg)`;
	} else {
		semicircle3.style.display = "block";
		semicircle1.style.transform = `rotate(${angolo}deg)`;
		semicircle2.style.transform = `rotate(${angolo}deg)`;
	}

	// timer

	showSec = Math.floor(tempoRimanente / 1000);
	numeri.innerHTML = parseInt(showSec);

	// condizione 5 secondi

	if (showSec < 5) {
		semicircle2.style.backgroundColor = "red";
	}

	if (showSec < 0) {
		clearInterval(domanda);
		domanda = null;
		semicircle3.style.display = "none";
		semicircle1.style.display = "none";
		semicircle2.style.display = "none";

        handleAnswer(false)
	}
	// fine

	
}

console.log(showSec);
