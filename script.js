document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para la Página de "Elige tu camino" (choose-path.html) ---
    const categoryCards = document.querySelectorAll('.category-selection .option-card');
    const difficultyCards = document.querySelectorAll('.difficulty-selection .option-card');
    const startChallengeBtn = document.getElementById('start-challenge-btn'); // Asume que este botón está en choose-path.html

    let selectedCategory = null;
    let selectedDifficulty = null;

    if (categoryCards.length > 0) { // Solo si estamos en choose-path.html
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                categoryCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedCategory = card.querySelector('span').textContent;
                console.log('Categoría seleccionada:', selectedCategory);
                checkCanStartQuiz();
            });
        });

        difficultyCards.forEach(card => {
            card.addEventListener('click', () => {
                difficultyCards.forEach(d => d.classList.remove('selected'));
                card.classList.add('selected');
                selectedDifficulty = card.querySelector('span').textContent;
                console.log('Dificultad seleccionada:', selectedDifficulty);
                checkCanStartQuiz();
            });
        });

        if (startChallengeBtn) {
            startChallengeBtn.addEventListener('click', () => {
                if (selectedCategory && selectedDifficulty) {
                    console.log(`Iniciando desafío: Categoría - ${selectedCategory}, Dificultad - ${selectedDifficulty}`);
                    // Guardar la selección en localStorage para usarla en quiz.html
                    localStorage.setItem('quizCategory', selectedCategory);
                    localStorage.setItem('quizDifficulty', selectedDifficulty);
                    window.location.href = 'quiz.html'; // Redirigir a la página del quiz
                } else {
                    alert('Por favor, selecciona una categoría y una dificultad.');
                }
            });
        }
    }

    function checkCanStartQuiz() {
        if (selectedCategory && selectedDifficulty && startChallengeBtn) {
            startChallengeBtn.disabled = false;
            startChallengeBtn.style.opacity = '1';
        } else if (startChallengeBtn) {
            startChallengeBtn.disabled = true;
            startChallengeBtn.style.opacity = '0.7';
        }
    }
    // Ejecutar al cargar la página para establecer el estado inicial del botón
    checkCanStartQuiz();


    // --- Lógica para la Página de Preguntas y Respuestas (quiz.html) ---
    const questionText = document.getElementById('question-text');
    const optionsGrid = document.getElementById('options-grid');
    const questionNumberSpan = document.getElementById('question-number');
    const currentScoreSpan = document.getElementById('current-score');
    const timerSecondsSpan = document.getElementById('timer-seconds');
    const quizProgressBar = document.getElementById('quiz-progress');
    const learnMoreSection = document.getElementById('learn-more-section');
    const learnMoreText = document.getElementById('learn-more-text');
    const bibleVerse = document.getElementById('bible-verse');
    const nextQuestionBtn = document.getElementById('next-question-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 20; // Tiempo para cada pregunta
    const questions = [
        {
            question: "¿Quién construyó el arca para salvarse del diluvio?",
            options: ["Noé", "Abraham", "Moisés", "David"],
            answer: "Noé",
            learnMore: "Noé fue elegido por Dios por ser justo en su generación. Construyó un arca siguiendo las instrucciones divinas y salvó a su familia y a los animales del gran diluvio que cubrió la tierra.",
            verse: "Génesis 6:13-14"
        },
        {
            question: "¿Cuántos días y noches llovió durante el diluvio?",
            options: ["7 días y 7 noches", "20 días y 20 noches", "40 días y 40 noches", "150 días y 150 noches"],
            answer: "40 días y 40 noches",
            learnMore: "El diluvio duró cuarenta días y cuarenta noches, cubriendo toda la tierra y destruyendo toda vida fuera del arca.",
            verse: "Génesis 7:12"
        },
        {
            question: "¿Quién fue el primer hombre creado por Dios?",
            options: ["Abraham", "Adán", "Noé", "Caín"],
            answer: "Adán",
            learnMore: "Adán fue el primer ser humano creado por Dios a su imagen y semejanza, del polvo de la tierra, en el Jardín del Edén.",
            verse: "Génesis 2:7"
        },
        // Añade más preguntas aquí
    ];

    if (questionText) { // Solo si estamos en quiz.html
        loadQuestion();
        startTimer();
    }

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            questionNumberSpan.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
            currentScoreSpan.textContent = score;
            questionText.textContent = q.question;
            optionsGrid.innerHTML = ''; // Limpiar opciones anteriores
            learnMoreSection.classList.remove('show'); // Ocultar sección "Aprende más"
            nextQuestionBtn.classList.remove('show'); // Ocultar botón "Siguiente"

            q.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.classList.add('option-button');
                button.dataset.option = String.fromCharCode(65 + index); // A, B, C, D
                button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span> ${option}`;
                button.addEventListener('click', () => selectOption(button, option, q.answer, q.learnMore, q.verse));
                optionsGrid.appendChild(button);
            });
            resetTimer();
        } else {
            endQuiz();
        }
    }

    function selectOption(selectedButton, selectedAnswer, correctAnswer, learnMoreInfo, bibleVerseInfo) {
        clearInterval(timer); // Detener el temporizador
        disableOptions(); // Deshabilitar todas las opciones

        if (selectedAnswer === correctAnswer) {
            selectedButton.classList.add('correct');
            score += 10; // Sumar puntos por respuesta correcta
            currentScoreSpan.textContent = score;
        } else {
            selectedButton.classList.add('incorrect');
            // Marcar la respuesta correcta si el usuario falló
            Array.from(optionsGrid.children).forEach(button => {
                if (button.textContent.includes(correctAnswer)) {
                    button.classList.add('correct');
                }
            });
        }

        // Mostrar sección "Aprende más"
        learnMoreText.textContent = learnMoreInfo;
        bibleVerse.innerHTML = `<i class="fas fa-bible"></i> ${bibleVerseInfo}`;
        learnMoreSection.classList.add('show');
        nextQuestionBtn.classList.add('show');
    }

    function disableOptions() {
        Array.from(optionsGrid.children).forEach(button => {
            button.disabled = true;
        });
    }

    function startTimer() {
        timeLeft = 20; // Reiniciar tiempo
        timerSecondsSpan.textContent = `${timeLeft}s`;
        quizProgressBar.style.width = '100%';
        quizProgressBar.style.backgroundColor = 'white'; // Asegurar color inicial

        timer = setInterval(() => {
            timeLeft--;
            timerSecondsSpan.textContent = `${timeLeft}s`;
            const progressPercentage = (timeLeft / 20) * 100;
            quizProgressBar.style.width = `${progressPercentage}%`;

            if (timeLeft <= 5) { // Cambiar a rojo cuando queden pocos segundos
                timerSecondsSpan.style.color = 'red';
            } else {
                timerSecondsSpan.style.color = 'white';
            }

            if (timeLeft <= 0) {
                clearInterval(timer);
                // Si el tiempo se acaba sin seleccionar, automáticamente mostrar "Aprende más"
                const q = questions[currentQuestionIndex];
                selectOption(null, null, q.answer, q.learnMore, q.verse); // Pasa null para que no marque ninguna opción como seleccionada por el usuario
                alert('¡Tiempo agotado!');
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timeLeft = 20;
        timerSecondsSpan.textContent = `${timeLeft}s`;
        timerSecondsSpan.style.color = 'white';
        quizProgressBar.style.width = '100%';
        quizProgressBar.style.backgroundColor = 'white';
        startTimer(); // Reiniciar el temporizador para la nueva pregunta
    }

    nextQuestionBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    function endQuiz() {
        clearInterval(timer);
        alert(`¡Quiz terminado! Tu puntuación final es: ${score}`);
        // Aquí podrías redirigir a una página de resultados o guardar el score
        // Por ahora, redirigimos al inicio
        window.location.href = 'index.html';
        // En una aplicación real, aquí guardarías el score en GitHub
        saveScoreToGitHub(score); // Función placeholder
    }

    // --- Lógica simulada de GitHub ---
    // Esta función solo simula el guardado. La implementación real necesita un backend.
    function saveScoreToGitHub(finalScore) {
        const username = localStorage.getItem('githubUsername') || 'Invitado'; // Obtener nombre de usuario (simulado)
        console.log(`Simulando guardar score de ${username}: ${finalScore} en GitHub.`);
        // En un escenario real:
        // 1. Envías una petición al servidor con el score y el token de GitHub del usuario.
        // 2. El servidor usa el token para interactuar con la API de GitHub (ej. crear un Gist o actualizar un archivo en un repo privado).
        // Ejemplo simplificado para almacenamiento local (NO ES GITHUB):
        let records = JSON.parse(localStorage.getItem('quizRecords')) || [];
        records.push({
            username: username,
            score: finalScore,
            date: new Date().toISOString(),
            category: localStorage.getItem('quizCategory') || 'General',
            difficulty: localStorage.getItem('quizDifficulty') || 'Medio'
        });
        localStorage.setItem('quizRecords', JSON.stringify(records));
        console.log('Récords guardados localmente (simulación):', records);
    }

    // Lógica para la página de bienvenida (index.html)
    const loginGithubBtn = document.querySelector('.github-btn');
    const registerGithubBtn = document.querySelector('.register-btn');
    const playGuestBtn = document.querySelector('.guest-btn');

    if (loginGithubBtn) { // Solo si estamos en index.html
        loginGithubBtn.addEventListener('click', () => {
            // Aquí iría la lógica de inicio de sesión de GitHub OAuth
            // Para simular, guardamos un nombre de usuario y redirigimos
            localStorage.setItem('githubUsername', 'UsuarioGitHubSimulado');
            alert('Simulación de inicio de sesión con GitHub. ¡Bienvenido!');
            window.location.href = 'choose-path.html';
        });

        registerGithubBtn.addEventListener('click', () => {
            // Aquí iría la lógica de registro de GitHub OAuth
            localStorage.setItem('githubUsername', 'NuevoUsuarioGitHub');
            alert('Simulación de registro con GitHub. ¡Tu cuenta ha sido creada!');
            window.location.href = 'choose-path.html';
        });

        playGuestBtn.addEventListener('click', () => {
            localStorage.removeItem('githubUsername'); // Asegurarse de que no hay usuario de GitHub
            alert('Jugando como invitado. Los récords no se guardarán permanentemente.');
            window.location.href = 'choose-path.html';
        });
    }

});
