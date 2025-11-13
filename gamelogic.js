// Referencias a elementos del DOM
const welcomeScreen = document.getElementById('welcome-screen');
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const explanationModal = document.getElementById('explanation-modal');
const resultsScreen = document.getElementById('results-screen');
const scoresScreen = document.getElementById('scores-screen');

const categoriesContainer = document.getElementById('categories');
const difficultyContainer = document.getElementById('difficulty');
const startGameBtn = document.getElementById('startGameBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const viewScoresBtn = document.getElementById('viewScoresBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');

const questionText = document.getElementById('question-text');
const questionCategory = document.getElementById('question-category');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score-display');
const resultText = document.getElementById('result-text');
const explanationText = document.getElementById('explanation-text');
const finalScoreDisplay = document.getElementById('final-score');
const playerNameInput = document.getElementById('playerNameInput');
const highScoresList = document.getElementById('high-scores-list');

let selectedCategory = null;
let selectedDifficulty = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Función para cambiar de pantalla
function showScreen(screenToShow) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    screenToShow.classList.remove('hidden');
    screenToShow.classList.add('active');
}

// Lógica de Bienvenida
document.addEventListener('DOMContentLoaded', () => {
    showScreen(welcomeScreen); // Muestra la pantalla de bienvenida

    setTimeout(() => {
        welcomeScreen.style.opacity = '0'; // Inicia la transición de opacidad
        welcomeScreen.style.transform = 'translateY(-20px)';
    }, 3000); // 3 segundos antes de empezar a desaparecer

    welcomeScreen.addEventListener('transitionend', () => {
        if (welcomeScreen.style.opacity === '0') {
            welcomeScreen.classList.add('hidden'); // Oculta completamente después de la transición
            showScreen(setupScreen); // Muestra la pantalla de configuración
        }
    }, { once: true }); // Asegura que el evento solo se dispare una vez
});

// Event Listeners para selección de categoría y dificultad
categoriesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        // Eliminar 'selected' de todos los botones de categoría
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('selected'));
        // Añadir 'selected' al botón clicado
        e.target.classList.add('selected');
        selectedCategory = e.target.dataset.category;
        checkCanStartGame();
    }
});

difficultyContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('difficulty-btn')) {
        // Eliminar 'selected' de todos los botones de dificultad
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
        // Añadir 'selected' al botón clicado
        e.target.classList.add('selected');
        selectedDifficulty = e.target.dataset.difficulty;
        checkCanStartGame();
    }
});

function checkCanStartGame() {
    if (selectedCategory && selectedDifficulty) {
        startGameBtn.disabled = false;
    } else {
        startGameBtn.disabled = true;
    }
}

startGameBtn.addEventListener('click', () => {
    if (selectedCategory && selectedDifficulty) {
        startQuiz();
    }
});

nextQuestionBtn.addEventListener('click', () => {
    explanationModal.classList.remove('active'); // Ocultar el modal
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
});

playAgainBtn.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    selectedCategory = null;
    selectedDifficulty = null;
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
    startGameBtn.disabled = true;
    playerNameInput.value = ''; // Limpiar el campo de nombre
    showScreen(setupScreen);
});

viewScoresBtn.addEventListener('click', () => {
    displayHighScores();
    showScreen(scoresScreen);
});

backToMenuBtn.addEventListener('click', () => {
    showScreen(setupScreen);
});

saveScoreBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        saveHighScore(playerName, score);
        alert('Puntuación guardada!');
        playerNameInput.value = '';
        saveScoreBtn.disabled = true; // Deshabilitar para evitar guardar múltiples veces
    } else {
        alert('Por favor, introduce tu nombre.');
    }
});


// --- Funciones del juego (se completarán más adelante) ---

function startQuiz() {
    // 1. Filtrar preguntas por categoría y dificultad
    currentQuestions = questions.filter(q =>
        q.categoria === selectedCategory && q.dificultad === selectedDifficulty
    );

    // 2. Mezclar las preguntas (Fisher-Yates shuffle)
    for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
    }

    score = 0;
    currentQuestionIndex = 0;
    scoreDisplay.textContent = score;
    showScreen(gameScreen);
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionCategory.textContent = `Categoría: ${question.categoria} - Dificultad: ${question.dificultad}`;
    questionText.textContent = question.pregunta;

    // Mezclar las opciones para cada pregunta
    const shuffledOptions = [...question.opciones].sort(() => Math.random() - 0.5);

    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, question.respuestaCorrecta, question.explicacion));
        optionsContainer.appendChild(button);
    });

    // Restaurar estilos de botones si es necesario
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.backgroundColor = ''; // Restaura el color original
        btn.disabled = false;
    });
}


function checkAnswer(selectedOption, correctAnswer, explanation) {
    const allOptionButtons = document.querySelectorAll('.option-btn');
    allOptionButtons.forEach(btn => {
        btn.disabled = true; // Deshabilitar botones para evitar múltiples clics
        if (btn.textContent === correctAnswer) {
            btn.style.backgroundColor = '#2ecc71'; // Verde para la correcta
        } else if (btn.textContent === selectedOption) {
            btn.style.backgroundColor = '#e74c3c'; // Rojo para la incorrecta seleccionada
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        scoreDisplay.textContent = score;
        resultText.textContent = '¡Correcto!';
        resultText.style.color = '#2ecc71';
    } else {
        resultText.textContent = 'Incorrecto.';
        resultText.style.color = '#e74c3c';
    }
    explanationText.textContent = explanation;
    explanationModal.classList.add('active'); // Mostrar el modal de explicación
}


function endQuiz() {
    finalScoreDisplay.textContent = score;
    saveScoreBtn.disabled = false; // Habilitar el botón de guardar puntuación
    showScreen(resultsScreen);
}

// --- Funciones para High Scores (Usando localStorage) ---

function getHighScores() {
    const scores = JSON.parse(localStorage.getItem('bibleQuizHighScores')) || [];
    return scores.sort((a, b) => b.puntuacion - a.puntuacion); // Ordenar de mayor a menor
}

function saveHighScore(name, score) {
    const scores = getHighScores();
    scores.push({ nombre: name, puntuacion: score });
    localStorage.setItem('bibleQuizHighScores', JSON.stringify(scores));
    displayHighScores(); // Actualizar la lista después de guardar
}

function displayHighScores() {
    const scores = getHighScores();
    highScoresList.innerHTML = ''; // Limpiar lista
    if (scores.length === 0) {
        highScoresList.innerHTML = '<li>Aún no hay puntuaciones. ¡Sé el primero!</li>';
    } else {
        scores.forEach((s, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${s.nombre} - ${s.puntuacion} puntos`;
            highScoresList.appendChild(li);
        });
    }
}
// ... (Referencias a elementos del DOM existentes) ...

const timerBar = document.getElementById('timer-bar');

// ... (variables existentes) ...
let timeRemaining = 30; // 30 segundos por pregunta
let timerInterval;
const MAX_TIME = 30; // Tiempo máximo para la barra

// ... (funciones showScreen, DOMContentLoaded, event listeners existentes) ...

function checkCanStartGame() {
    if (selectedCategory && selectedDifficulty) {
        startGameBtn.disabled = false;
        startGameBtn.style.backgroundColor = '#3498db'; // Reestablece el color
    } else {
        startGameBtn.disabled = true;
        startGameBtn.style.backgroundColor = '#cccccc'; // Color deshabilitado
    }
}

// ... (resto de event listeners existentes) ...


// --- Funciones del juego ---

function startQuiz() {
    // 1. Filtrar preguntas por categoría y dificultad
    currentQuestions = questions.filter(q =>
        q.categoria === selectedCategory && q.dificultad === selectedDifficulty
    );

    // 2. Mezclar las preguntas (Fisher-Yates shuffle)
    for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
    }

    score = 0;
    currentQuestionIndex = 0;
    scoreDisplay.textContent = score;
    showScreen(gameScreen);
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    // Reiniciar temporizador para la nueva pregunta
    resetTimer();
    startTimer();

    const question = currentQuestions[currentQuestionIndex];
    questionCategory.textContent = `Categoría: ${question.categoria} - Dificultad: ${question.dificultad}`;
    questionText.textContent = question.pregunta;

    // Mezclar las opciones para cada pregunta
    const shuffledOptions = [...question.opciones].sort(() => Math.random() - 0.5);

    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, question.respuestaCorrecta, question.explicacion));
        optionsContainer.appendChild(button);
    });

    // Restaurar estilos de botones y habilitarlos
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect', 'disabled-after-answer');
        btn.style.backgroundColor = ''; // Restaura el color original del CSS
        btn.disabled = false;
    });
}

function startTimer() {
    timeRemaining = MAX_TIME;
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#f39c12'; // Color inicial

    timerInterval = setInterval(() => {
        timeRemaining--;
        // Actualizar la barra de progreso
        const percentage = (timeRemaining / MAX_TIME) * 100;
        timerBar.style.width = `${percentage}%`;

        // Cambiar color de la barra cuando queda poco tiempo
        if (timeRemaining <= 10) {
            timerBar.style.backgroundColor = '#e74c3c'; // Rojo
        } else {
            timerBar.style.backgroundColor = '#f39c12'; // Naranja/Amarillo
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000); // Actualiza cada segundo
}

function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = MAX_TIME;
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#f39c12';
}

function handleTimeUp() {
    // Cuando el tiempo se agota, considera la respuesta como incorrecta
    // y muestra la explicación de la pregunta actual
    const question = currentQuestions[currentQuestionIndex];
    
    // Deshabilitar todos los botones para evitar más clics
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled-after-answer'); // Añadir clase para estilo deshabilitado
        if (btn.textContent === question.respuestaCorrecta) {
             btn.style.backgroundColor = '#2ecc71'; // Muestra la correcta en verde
        }
    });

    resultText.textContent = '¡Tiempo agotado!';
    resultText.style.color = '#e74c3c'; // Rojo
    explanationText.textContent = question.explicacion;
    explanationModal.classList.add('active'); // Mostrar el modal
}


function checkAnswer(selectedOption, correctAnswer, explanation) {
    resetTimer(); // Detener el temporizador inmediatamente al responder

    const allOptionButtons = document.querySelectorAll('.option-btn');
    allOptionButtons.forEach(btn => {
        btn.disabled = true; // Deshabilitar botones para evitar múltiples clics
        btn.classList.add('disabled-after-answer'); // Añadir clase para estilo deshabilitado

        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct'); // Clase para verde
        } else if (btn.textContent === selectedOption) {
            btn.classList.add('incorrect'); // Clase para rojo
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        scoreDisplay.textContent = score;
        resultText.textContent = '¡Correcto!';
        resultText.style.color = '#2ecc71';
    } else {
        resultText.textContent = 'Incorrecto.';
        resultText.style.color = '#e74c3c';
    }
    explanationText.textContent = explanation;
    explanationModal.classList.add('active'); // Mostrar el modal de explicación
}


function endQuiz() {
    resetTimer(); // Asegurarse de que el temporizador esté detenido
    finalScoreDisplay.textContent = score;
    saveScoreBtn.disabled = false;
    showScreen(resultsScreen);
}
const timerCountdownDisplay = document.getElementById('timer-countdown'); // Nuevo elemento

// ... (Tus variables existentes) ...

function startTimer() {
    timeRemaining = MAX_TIME;
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#f1c40f'; // Color inicial del degradado
    timerCountdownDisplay.textContent = `${timeRemaining}s`; // Actualizar texto inicial

    timerInterval = setInterval(() => {
        timeRemaining--;
        // Actualizar la barra de progreso
        const percentage = (timeRemaining / MAX_TIME) * 100;
        timerBar.style.width = `${percentage}%`;
        timerCountdownDisplay.textContent = `${timeRemaining}s`; // Actualizar texto

        // Cambiar color de la barra cuando queda poco tiempo
        if (timeRemaining <= 10) {
            timerBar.style.backgroundColor = '#e74c3c'; // Rojo
        } else {
            timerBar.style.backgroundColor = '#f1c40f'; // Naranja/Amarillo
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000); // Actualiza cada segundo
}

function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = MAX_TIME;
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#f1c40f';
    timerCountdownDisplay.textContent = `${timeRemaining}s`; // Reiniciar texto
}

// ... (Resto de tu JS) ...
// ... (funciones getHighScores, saveHighScore, displayHighScores existentes) ...
