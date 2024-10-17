// Genera un numero casuale tra 1 e 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    let userGuess = document.getElementById('guessInput').value;
    attempts++;

    if (userGuess == randomNumber) {
        document.getElementById('feedback').innerHTML = 'Complimenti! Hai indovinato in ' + attempts + ' tentativi.';
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').innerHTML = 'Troppo alto! Riprova.';
    } else {
        document.getElementById('feedback').innerHTML = 'Troppo basso! Riprova.';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').style.color = '#555';
}

