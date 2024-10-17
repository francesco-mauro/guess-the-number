
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let attemptsHistory = [];

function makeGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    let feedbackMessage = '';
    let feedbackColor = '';

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackMessage = 'Per favore, inserisci un numero valido tra 1 e 100.';
        feedbackColor = 'orange';
    } else if (userGuess === randomNumber) {
        feedbackMessage = '🎉 Complimenti! Hai indovinato in ' + (attempts) + ' tentativi.';
        feedbackColor = 'green';
    } else if (userGuess > randomNumber) {
        feedbackMessage = '📉 Troppo alto! Riprova.';
        feedbackColor = 'red';
    } else {
        feedbackMessage = '📈 Troppo basso! Riprova.';
        feedbackColor = 'red';
    }

    document.getElementById('feedback').style.color = feedbackColor;
    document.getElementById('feedback').innerHTML = feedbackMessage;

    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 100) {
        attemptsHistory.push({ number: userGuess, message: feedbackMessage });
        updateAttemptsList();
    }

    document.getElementById('guessInput').value = '';
}

function updateAttemptsList() {
    let attemptsList = document.getElementById('attemptsList');
    attemptsList.innerHTML = '';

    for (let i = 0; i < attemptsHistory.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = 'Tentativo ' + (i + 1) + ': ' + attemptsHistory[i].number + ' - ' + attemptsHistory[i].message;
        attemptsList.appendChild(listItem);
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsHistory = [];
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('feedback').style.color = '#555';
    document.getElementById('guessInput').value = '';
    document.getElementById('attemptsList').innerHTML = '';
}

