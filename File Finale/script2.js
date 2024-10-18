const questions = [
	{
		category: "Science: Computers",
		question: "What does CPU stand for?",
		correct_answer: "Central Processing Unit",
		incorrect_answers: [
			"Central Process Unit",
			"Computer Personal Unit",
			"Central Processor Unit",
		],
	},
	{
		category: "Science: Computers",
		question:
			"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
		correct_answer: "Final",
		incorrect_answers: ["Static", "Private", "Public"],
	},
	{
		category: "Science: Computers",
		question: "The logo for Snapchat is a Bell.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		question:
			"Pointers were not used in the original C programming language; they were added later on in C++.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		question:
			"What is the most preferred image format used for logos in the Wikimedia database?",
		correct_answer: ".svg",
		incorrect_answers: [".png", ".jpeg", ".gif"],
	},
	{
		category: "Science: Computers",
		question: "In web design, what does CSS stand for?",
		correct_answer: "Cascading Style Sheet",
		incorrect_answers: [
			"Counter Strike: Source",
			"Corrective Style Sheet",
			"Computer Style Sheet",
		],
	},
	{
		category: "Science: Computers",
		question:
			"What is the code name for the mobile operating system Android 7.0?",
		correct_answer: "Nougat",
		incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
	},
	{
		category: "Science: Computers",
		question: "On Twitter, what is the character limit for a Tweet?",
		correct_answer: "140",
		incorrect_answers: ["120", "160", "100"],
	},
	{
		category: "Science: Computers",
		question: "Linux was first created as an alternative to Windows XP.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		question:
			"Which programming language shares its name with an island in Indonesia?",
		correct_answer: "Java",
		incorrect_answers: ["Python", "C", "Jakarta"],
	},
];

// -------- Inizializza l'indice della domanda corrente e il punteggio

let currentQuestionIndex = 0;
let score = 0;
let questionNumber = 1;

// -------- Crea div container, quiz, score

let main = document.getElementsByTagName("main")[0];

const container = document.createElement("div");
container.classList = "container";
container.style.display = "none";
main.appendChild(container);

const quizDiv = document.createElement("div");
quizDiv.id = "quiz";
container.appendChild(quizDiv);

const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
scoreDiv.classList = "finale";
container.appendChild(scoreDiv);

const flag = document.getElementById("flag");

/* document.getElementById("iniziaTest").addEventListener("click", function() {
    if (checkbox.checked) {
        iniziaTest(); 
    } else {
        alert("You have to promise to yourself that you won't search on ChatGPT");
	}); */

document.getElementById("iniziaTest").addEventListener("click", function () {
	if (flag.checked) {
		iniziaTest(); // Chiama la funzione con le parentesi
	} else {
		alert("remember to make the promise!!");
	}
});

function iniziaTest() {
	domandaCorrente = 0;

	document.getElementById("testContainer").style.display = "none";
	document.getElementsByClassName("container")[0].style.display = "flex";
}

// -------- Funzione per visualizzare la domanda attuale

function displayQuestion() {
	// Recupera il div del quiz usando l'ID 'quiz'
	/* const quizDiv = document.getElementById('quiz'); */

	// -------- Pulisce il contenuto del div per visualizzare la nuova domanda
	quizDiv.innerHTML = "";

	// -------- Ottiene la domanda corrente dall'array 'questions'
	const currentQuestion = questions[currentQuestionIndex];

	// -------- Crea un elemento h1 per la domanda
	const questionText = document.createElement("h1");

	// -------- Imposta il testo dell'elemento h1 con la domanda corrente
	questionText.innerText = currentQuestion.question;
	// -------- Aggiunge l'elemento h1 al div del quiz
	quizDiv.appendChild(questionText);

	const allAnswers = [];
	// -------- Aggiunge tutte le risposte all'array
	for (let i = 0; i < currentQuestion.incorrect_answers.length; i++) {
		allAnswers.push(currentQuestion.incorrect_answers[i]);
	}
	// -------- Aggiunge la risposta corretta
	allAnswers.push(currentQuestion.correct_answer);

	// -------- Aggiunge div per risposte al quiz
	const containerAnswer = document.createElement("div");
	containerAnswer.id = "containerAnswer";
	quizDiv.appendChild(containerAnswer);

	// --------- Mostra i pulsanti delle risposte
	for (let i = 0; i < allAnswers.length; i++) {
		// --------- Crea un nuovo pulsante per ogni risposta
		const button = document.createElement("button");
		// --------- Imposta il testo del pulsante con la risposta
		button.innerText = allAnswers[i];
		// --------- Aggiunge un gestore di eventi 'onclick' per il pulsante
		// --------- Verifica se la risposta è corretta e chiama 'handleAnswer'
		button.onclick = () =>
			handleAnswer(allAnswers[i] === currentQuestion.correct_answer);
		// --------- Aggiunge il pulsante al div del quiz
		containerAnswer.appendChild(button);
	}

	// -------- Aggiunge div contatore al quiz
	const contatore = document.createElement("div");
	contatore.id = "contatore";
	contatore.innerHTML =
		"<p>QUESTION " + questionNumber++ + "<span> / 10<span><p>";
	quizDiv.appendChild(contatore);
}

// --------- Funzione per gestire la risposta dell'utente
function handleAnswer(isCorrect) {
	// --------- Logga se la risposta è corretta o sbagliata
	console.log(`Risposta: ${isCorrect ? "Corretto" : "Sbagliato"}`);
	// --------- Incrementa il punteggio se la risposta è corretta
	if (isCorrect) {
		score++;
	}
	// --------- Incrementa l'indice della domanda corrente
	currentQuestionIndex++;
	// --------- Se ci sono ancora domande, visualizza la prossima
	if (currentQuestionIndex < questions.length) {
		displayQuestion();
	} else {
		// --------- Altrimenti, mostra il punteggio finale
		displayScore();
	}
	const tempoCorrente = Date.now();
	const tempoRimanente = tempoFuturo - tempoCorrente;
	const angolo = (tempoRimanente / tempoImpostato) * 360;
	const secondi = sec * 1000; // Calcola il tempo in millisecondi
	const inizio = Date.now(); // Ottieni il tempo attuale
	tempoImpostato = secondi; // Imposta il tempo impostato
	tempoFuturo = inizio + tempoImpostato; // Calcola il tempo futuro
	domanda = setInterval(Countdown); // Avvia il countdown
	if (angolo > 180) {
		semicircle3.style.display = "none";
		semicircle1.style.transform = "rotate(180deg)";
		semicircle2.style.transform = `rotate(${angolo}deg)`;
	} else {
		semicircle3.style.display = "block";
		semicircle1.style.transform = `rotate(${angolo}deg)`;
		semicircle2.style.transform = `rotate(${angolo}deg)`;
	}
	if (showSec < 5) {
		semicircle2.style.backgroundColor = "red";
	}
}

// Funzione per visualizzare il punteggio finale
function displayScore() {
	// Recupera il div del quiz e lo pulisce
	const quizDiv = document.getElementById("quiz");
	quizDiv.innerHTML = "";
	// Recupera il div per il punteggio usando l'ID 'score'
	const scoreDiv = document.getElementById("score");
	// Imposta il testo del punteggio finale
	scoreDiv.innerHTML = `Il tuo punteggio finale è di: <br> ${score} su ${questions.length}!`;
	// Rimuove la classe 'finale' (probabilmente per stilizzare il punteggio)
	scoreDiv.classList.remove("finale");
	mainContainer.style.display = "none";
}

// Inizia il quiz visualizzando la prima domanda
displayQuestion();
