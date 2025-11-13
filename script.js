document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica Común o de Inicialización ---
    // Puedes colocar funciones o variables globales que se usen en varias páginas aquí.

    // --- Lógica para la Página de Bienvenida (index.html) ---
    const loginGithubBtn = document.querySelector('.github-btn');
    const registerGithubBtn = document.querySelector('.register-btn');
    const playGuestBtn = document.querySelector('.guest-btn');

    if (loginGithubBtn && registerGithubBtn && playGuestBtn) { // Solo si estos botones existen en la página actual
        loginGithubBtn.addEventListener('click', () => {
            // Aquí iría la lógica de inicio de sesión de GitHub OAuth
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

    // --- Lógica para la Página de "Elige tu camino" (choose-path.html) ---
    const categoryCards = document.querySelectorAll('.category-selection .option-card');
    const difficultyCards = document.querySelectorAll('.difficulty-selection .option-card');
    const startChallengeBtn = document.querySelector('.start-challenge-btn'); // Usamos querySelector con la clase

    if (categoryCards.length > 0 && difficultyCards.length > 0 && startChallengeBtn) { // Solo si estamos en choose-path.html
        let selectedCategory = null;
        let selectedDifficulty = null;

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

        startChallengeBtn.addEventListener('click', () => {
            if (selectedCategory && selectedDifficulty) {
                console.log(`Iniciando desafío: Categoría - ${selectedCategory}, Dificultad - ${selectedDifficulty}`);
                localStorage.setItem('quizCategory', selectedCategory);
                localStorage.setItem('quizDifficulty', selectedDifficulty);
                window.location.href = 'quiz.html';
            } else {
                alert('Por favor, selecciona una categoría y una dificultad.');
            }
        });

        function checkCanStartQuiz() {
            if (selectedCategory && selectedDifficulty) {
                startChallengeBtn.disabled = false;
                startChallengeBtn.style.opacity = '1';
            } else {
                startChallengeBtn.disabled = true;
                startChallengeBtn.style.opacity = '0.7';
            }
        }
        checkCanStartQuiz(); // Establecer estado inicial del botón
    }

    // --- Lógica para la Página de Preguntas y Respuestas (quiz.html) ---
    const questionText = document.getElementById('question-text');

    if (questionText) { // Solo si estamos en quiz.html
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

        loadQuestion();
        startTimer(); // Iniciar el temporizador para la primera pregunta

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
                resetTimer(); // Reiniciar el temporizador para la nueva pregunta
            } else {
                endQuiz();
            }
        }

        function selectOption(selectedButton, selectedAnswer, correctAnswer, learnMoreInfo, bibleVerseInfo) {
            clearInterval(timer); // Detener el temporizador
            disableOptions(); // Deshabilitar todas las opciones

            if (selectedButton) { // Si se hizo clic en una opción (no por tiempo agotado)
                if (selectedAnswer === correctAnswer) {
                    selectedButton.classList.add('correct');
                    score += 10; // Sumar puntos por respuesta correcta
                    currentScoreSpan.textContent = score;
                } else {
                    selectedButton.classList.add('incorrect');
                }
            }

            // Marcar la respuesta correcta (si el usuario falló o el tiempo se agotó)
            Array.from(optionsGrid.children).forEach(button => {
                if (button.textContent.includes(correctAnswer)) {
                    button.classList.add('correct');
                }
            });


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
            timerSecondsSpan.style.color = 'white'; // Asegurar color de texto del timer

            timer = setInterval(() => {
                timeLeft--;
                timerSecondsSpan.textContent = `${timeLeft}s`;
                const progressPercentage = (timeLeft / 20) * 100;
                quizProgressBar.style.width = `${progressPercentage}%`;

                if (timeLeft <= 5) {
                    timerSecondsSpan.style.color = 'red';
                } else {
                    timerSecondsSpan.style.color = 'white';
                }

                if (timeLeft <= 0) {
                    clearInterval(timer);
                    const q = questions[currentQuestionIndex];
                    // Pasar null para selectedButton y selectedAnswer ya que el tiempo se agotó
                    selectOption(null, null, q.answer, q.learnMore, q.verse);
                    // Puedes decidir si mostrar una alerta o simplemente revelar la respuesta
                    // alert('¡Tiempo agotado!');
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timer); // Asegúrate de limpiar cualquier temporizador previo
            startTimer(); // Iniciar un nuevo temporizador
        }

        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });

        function endQuiz() {
            clearInterval(timer);
            alert(`¡Quiz terminado! Tu puntuación final es: ${score}`);
            window.location.href = 'index.html';
            saveScoreToGitHub(score); // Función placeholder
        }

        // --- Lógica simulada de GitHub ---
        function saveScoreToGitHub(finalScore) {
            const username = localStorage.getItem('githubUsername') || 'Invitado';
            console.log(`Simulando guardar score de ${username}: ${finalScore} en GitHub.`);
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
    }
});
