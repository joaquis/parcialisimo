// Declaración de las preguntas de la trivia
const questions = [
    {
      question: "¿Quién interpretó el papel principal en la película 'Forrest Gump'?",
      options: ["Tom Hanks", "Brad Pitt", "Johnny Depp"],
      correctAnswer: "Tom Hanks"
    },
    {
        question: " En la película 'El Padrino', ¿cuál es el nombre del personaje principal interpretado por Marlon Brando?",
        options: ["Michael Corleone", "Fredo Corleone", "Don Vito Corleone"],
        correctAnswer: "Don Vito Corleone"
      },
      {
        question: "¿Qué película de ciencia ficción de 1999 popularizó la frase 'Hasta la vista baby'?",
        options: ["Blade Runner", "The Terminator", "The Matrix"],
        correctAnswer: "The Terminator"
      },
      {
        question: "¿En qué película se encuentra el personaje Jack Dawson gritando '¡Soy el rey del mundo!' mientras está en la proa de un barco?",
        options: ["Titanic", "Pearl Harbor", "Piratas del Caribe"],
        correctAnswer: "Titanic"
      },
      {
        question: "¿Cuál es la película de Quentin Tarantino que presenta una famosa escena de baile entre Uma Thurman y John Travolta?",
        options: ["Reservoir Dogs", "Kill Bill", "Pulp Fiction"],
        correctAnswer: "Pulp Fiction"
      },
      {
        question: " ¿Qué película de ciencia ficción de 1982 dirigida por Ridley Scott presenta a un androide llamado 'Roy Batty' y un detective llamado 'Rick Deckard'?",
        options: ["Blade Runner", "Terminator 2: Judgment Day", "The Fifth Element"],
        correctAnswer: "Blade Runner"
      },
      {
        question: "¿En qué película Argentina Gano el premio Oscar?",
        options: ["1985", "La historia oficial", "Relatos salvajes"],
        correctAnswer: "La historia oficial"
      },
      {
        question: "¿Quién interpretó el papel principal en la película 'Barbie'?",
        options: ["Emma Stone", "Anne Hathaway", "Margot Robbie"],
        correctAnswer: "Margot Robbie"
      },
      {
        question: "¿Quién interpretó el papel de Neo en la trilogía 'Matrix'?",
        options: ["Keanu Reeves", "Jake Gylenhall", "Johnny Depp"],
        correctAnswer: "Keanu Reeves"
      },
      {
        question: "¿Que película protagonizó Björk?",
        options: ["The neon demon", "Black swain", "Dancer in the dark"],
        correctAnswer: "Dancer in the dark"
      },
  ];
  
  // Inicialización de variables
  let currentQuestionIndex = 0; // Índice de la pregunta actual
  let score = 0; // Puntuación del jugador
  
  // Obtención de referencias a elementos HTML
  const questionElement = document.getElementById('question'); // Pregunta
  const optionsElement = document.getElementById('options'); // Opciones de respuesta
  const scoreElement = document.getElementById('score'); // Puntuación
  const nextButton = document.getElementById('nextButton'); // Botón "Siguiente Pregunta"
  
  // Función para mostrar la pregunta actual
  function displayQuestion() {
    // Obtiene la pregunta actual del arreglo de preguntas
    const currentQuestion = questions[currentQuestionIndex];
    
    // Muestra la pregunta en el elemento HTML
    questionElement.textContent = currentQuestion.question;
    
    // Limpia las opciones de respuesta anteriores
    optionsElement.innerHTML = '';
    
    // Itera a través de las opciones de respuesta y las agrega al elemento HTML
    currentQuestion.options.forEach(option => {
      const optionElement = document.createElement('div');
      optionElement.textContent = option;
      optionElement.classList.add('option'); // Agrega una clase CSS para el estilo
      optionElement.addEventListener('click', () => checkAnswer(option)); // Agrega un manejador de eventos al hacer clic
      optionsElement.appendChild(optionElement); // Agrega la opción al elemento HTML
    });
  }
  
  // Función para comprobar la respuesta seleccionada
  function checkAnswer(selectedOption) {
    // Obtiene la pregunta actual
    const currentQuestion = questions[currentQuestionIndex];
    
    // Compara la opción seleccionada con la respuesta correcta
    if (selectedOption === currentQuestion.correctAnswer) {
      score += 10; // Suma 10 puntos si es correcta
    }
    
    // Incrementa el índice de la pregunta actual
    currentQuestionIndex++;
    

    
    // Verifica si quedan más preguntas o si se ha completado la trivia
    if (currentQuestionIndex < questions.length) {
      displayQuestion(); // Muestra la siguiente pregunta
    } else {
      endGame(); // Finaliza la trivia
    }
  }
  
  
  // Función para finalizar la trivia
  function endGame() {
    // Muestra un mensaje de trivia completada
    questionElement.textContent = 'Trivia completada';
    
    // Limpia las opciones de respuesta
    optionsElement.innerHTML = '';
    
    // Muestra la puntuación final
    scoreElement.textContent = `Puntuación final: ${score} puntos`;
    
    // Oculta el botón "Siguiente Pregunta"
    nextButton.style.display = 'none';
    
    // Crea un botón para reiniciar el juego
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Volver a Jugar';
    restartButton.addEventListener('click', () => {
      currentQuestionIndex = 0; // Reinicia el índice de la pregunta actual
      score = 0; // Reinicia la puntuación
      scoreElement.textContent = 'Puntos: 0'; // Actualiza la puntuación en el elemento HTML
      nextButton.style.display = 'block'; // Muestra el botón "Siguiente Pregunta"
      displayQuestion(); // Muestra la primera pregunta
    });

    }

  // Inicializa la trivia mostrando la primera pregunta
  displayQuestion();
  