document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para la Página de Bienvenida (index.html) ---
    const loginGithubBtn = document.querySelector('.github-btn');
    const registerGithubBtn = document.querySelector('.register-btn');
    const playGuestBtn = document.querySelector('.guest-btn');

    if (loginGithubBtn && registerGithubBtn && playGuestBtn) {
        loginGithubBtn.addEventListener('click', () => {
            localStorage.setItem('githubUsername', 'UsuarioGitHubSimulado');
            alert('Simulación de inicio de sesión con GitHub. ¡Bienvenido!');
            window.location.href = 'choose-path.html';
        });

        registerGithubBtn.addEventListener('click', () => {
            localStorage.setItem('githubUsername', 'NuevoUsuarioGitHub');
            alert('Simulación de registro con GitHub. ¡Tu cuenta ha sido creada!');
            window.location.href = 'choose-path.html';
        });

        playGuestBtn.addEventListener('click', () => {
            localStorage.removeItem('githubUsername');
            alert('Jugando como invitado. Los récords no se guardarán permanentemente.');
            window.location.href = 'choose-path.html';
        });
    }

    // --- Lógica para la Página de "Elige tu camino" (choose-path.html) ---
    const categoryCards = document.querySelectorAll('.category-selection .option-card');
    const difficultyCards = document.querySelectorAll('.difficulty-selection .option-card');
    const startChallengeBtn = document.getElementById('start-challenge-btn'); // Ahora usando el ID

    if (categoryCards.length > 0 && difficultyCards.length > 0 && startChallengeBtn) {
        let selectedCategory = localStorage.getItem('quizCategory') || null;
        let selectedDifficulty = localStorage.getItem('quizDifficulty') || null;

        // Función para aplicar la clase 'selected'
        const applySelection = (cards, value, dataAttribute) => {
            cards.forEach(card => {
                if (card.dataset[dataAttribute] === value) {
                    card.classList.add('selected');
                } else {
                    card.classList.remove('selected');
                }
            });
        };

        // Restaurar selección al cargar la página
        applySelection(categoryCards, selectedCategory, 'category');
        applySelection(difficultyCards, selectedDifficulty, 'difficulty');


        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                applySelection(categoryCards, card.dataset.category, 'category');
                selectedCategory = card.dataset.category;
                localStorage.setItem('quizCategory', selectedCategory); // Guardar en localStorage
                console.log('Categoría seleccionada:', selectedCategory);
                checkCanStartQuiz();
            });
        });

        difficultyCards.forEach(card => {
            card.addEventListener('click', () => {
                applySelection(difficultyCards, card.dataset.difficulty, 'difficulty');
                selectedDifficulty = card.dataset.difficulty;
                localStorage.setItem('quizDifficulty', selectedDifficulty); // Guardar en localStorage
                console.log('Dificultad seleccionada:', selectedDifficulty);
                checkCanStartQuiz();
            });
        });

        startChallengeBtn.addEventListener('click', () => {
            if (selectedCategory && selectedDifficulty) {
                console.log(`Iniciando desafío: Categoría - ${selectedCategory}, Dificultad - ${selectedDifficulty}`);
                // Las selecciones ya están guardadas en localStorage
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
                startChallengeBtn.style.opacity = '0.5'; // Coherente con CSS
            }
        }
        checkCanStartQuiz(); // Establecer estado inicial del botón
    }

    // --- Lógica para la Página de Preguntas y Respuestas (quiz.html) ---
    const questionText = document.getElementById('question-text');

    if (questionText) {
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
        let currentQuestions = []; // Array para almacenar las preguntas cargadas

        // Cargar las preguntas según la categoría y dificultad seleccionadas
        const category = localStorage.getItem('quizCategory');
        const difficulty = localStorage.getItem('quizDifficulty');

        async function loadQuizQuestions() {
            if (!category || !difficulty) {
                alert('No se ha seleccionado categoría o dificultad. Redirigiendo.');
                window.location.href = 'choose-path.html';
                return;
            }
            const filename = `questions/${category.toLowerCase()}_${difficulty.toLowerCase()}.json`;
            try {
                const response = await fetch(filename);
                if (!response.ok) {
                    throw new Error(`No se pudo cargar el archivo de preguntas: ${response.statusText}`);
                }
                currentQuestions = await response.json();
                if (currentQuestions.length > 0) {
                    loadQuestion();
                    startTimer();
                } else {
                    alert('No hay preguntas disponibles para esta selección. Redirigiendo.');
                    window.location.href = 'choose-path.html';
                }
            } catch (error) {
                console.error('Error al cargar las preguntas:', error);
                alert('Hubo un error al cargar las preguntas. Redirigiendo.');
                window.location.href = 'choose-path.html';
            }
        }

        loadQuizQuestions(); // Iniciar la carga de preguntas al cargar quiz.html


        function loadQuestion() {
            if (currentQuestionIndex < currentQuestions.length) {
                const q = currentQuestions[currentQuestionIndex];
                questionNumberSpan.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
                currentScoreSpan.textContent = score;
                questionText.textContent = q.question;
                optionsGrid.innerHTML = '';
                learnMoreSection.classList.remove('show');
                nextQuestionBtn.classList.remove('show');

                q.options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.classList.add('option-button');
                    button.dataset.option = String.fromCharCode(65 + index);
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
            clearInterval(timer);
            disableOptions();

            if (selectedButton) {
                if (selectedAnswer === correctAnswer) {
                    selectedButton.classList.add('correct');
                    score += 10;
                    currentScoreSpan.textContent = score;
                } else {
                    selectedButton.classList.add('incorrect');
                }
            }

            Array.from(optionsGrid.children).forEach(button => {
                if (button.textContent.includes(correctAnswer)) {
                    button.classList.add('correct');
                }
            });

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
            timeLeft = 20;
            timerSecondsSpan.textContent = `${timeLeft}s`;
            quizProgressBar.style.width = '100%';
            quizProgressBar.style.backgroundColor = 'white';
            timerSecondsSpan.style.color = 'white';

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
                    const q = currentQuestions[currentQuestionIndex];
                    selectOption(null, null, q.answer, q.learnMore, q.verse);
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timer);
            startTimer();
        }

        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });

        function endQuiz() {
            clearInterval(timer);
            alert(`¡Quiz terminado! Tu puntuación final es: ${score}`);
            window.location.href = 'index.html';
            saveScoreToGitHub(score);
        }

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
