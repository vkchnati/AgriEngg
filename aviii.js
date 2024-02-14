/// Define an event listener for the Start Quiz button
const startQuizButton = document.getElementById("start-quiz-btn");
startQuizButton.addEventListener("click", startQuiz);

let quizTimer;

// Populate subject options based on the selected category
const categoryDropdown = document.getElementById("category");
const subjectDropdown = document.getElementById("subject");

categoryDropdown.addEventListener("change", populateSubjects);

function populateSubjects() {
    const selectedCategory = categoryDropdown.value;
    let subjectOptions = '';

    // Populate subject options based on the selected category
    switch(selectedCategory) {
        case 'ecet':
            subjectOptions = '<option value="Agri implements">Agri implements</option><option value="Farm Power & Tractor Systems">Farm Power & Tractor Systems</option>';
            break;
        case 'ibps':
            subjectOptions = '<option value="Agronomy">Agronomy</option><option value="Soil Science">Soil Science</option>';
            break;
        default:
            subjectOptions = '<option value="">Select Subject</option>';
    }

    subjectDropdown.innerHTML = subjectOptions;
}

// Function to start the quiz
function startQuiz() {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const selectedSubject = subjectDropdown.value;

    if (!nameInput || !emailInput || selectedSubject === '') {
        alert("Please fill all details and select a subject to start the quiz.");
        return;
    }
    alert("A 45-second time limit applies to each question. The system will automatically move to the next question if no response is registered within this period.");

    // Get the questions for the selected subject
    const questions = questionsBySubject[selectedSubject];

    // Hide the form container and show the quiz container
    const formContainer = document.querySelector(".form-container");
    const quizContainer = document.querySelector(".quiz-container");
    formContainer.style.display = "none";
    quizContainer.style.display = "block";

    // Start the quiz
    startQuizWithQuestions(questions);
}

// Function to start the quiz with specific questions
// Function to start the quiz with specific questions
function startQuizWithQuestions(questions) {
    // Set current question index and score to initial values
    let currentQuestionIndex = 0;
    let score = 0;

    // Show the first question
    showQuestion();
   // startTimer();

    function showQuestion() {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = ""; // Clear previous question

        const questionElement = document.createElement("div");
        questionElement.classList.add("quiz");
        const currentQuestion = questions[currentQuestionIndex];

        // Add question text
        const questionText = document.createElement("h2");
        questionText.textContent = currentQuestion.question;
        questionElement.appendChild(questionText);

        // Add question counter
        const counterElement = document.createElement("p");
        counterElement.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
        counterElement.classList.add("question-counter");
        questionElement.appendChild(counterElement);

        // Add answer options
        currentQuestion.answers.forEach((answer, index) => {
            const answerButton = document.createElement("button");
            answerButton.classList.add("btn");
            answerButton.textContent = answer.text;
            answerButton.addEventListener("click", () => {
                if (answer.correct) {
                    answerButton.classList.add("correct");
                    score++;
                } else {
                    answerButton.classList.add("incorrect");
                }
                // Disable buttons after answering
                const btns = document.querySelectorAll(".btn");
                btns.forEach(btn => {
                    btn.disabled = true;
                });
                clearInterval(quizTimer);
                // Show next/submit button after answering
                if (currentQuestionIndex < questions.length - 1) {
                    const nextButton = document.createElement("button");
                    nextButton.id = "next-btn";
                    nextButton.textContent = "Next Question";
                    nextButton.addEventListener("click", () => {
                        currentQuestionIndex++;
                        showQuestion();
                        startTimer();
                        updateQuestionCounter();
                    });
                    quizContainer.appendChild(nextButton);
                } else {
                    const submitButton = document.createElement("button");
                    submitButton.id = "submit-btn";
                    submitButton.textContent = "Submit";
                    submitButton.addEventListener("click", () => {
                        endQuiz();
                    });
                    quizContainer.appendChild(submitButton);
                }
            });
            questionElement.appendChild(answerButton);
        });

        quizContainer.appendChild(questionElement);
    }

    // Function to start the timer
    //function startTimer() {
      //  const timerElement = document.getElementById("timer");
        //let timeLeft = 45; // 45 seconds per question
        //timerElement.textContent = `Time Left: ${formatTime(timeLeft)}`; // Initial display

        //quizTimer = setInterval(() => {
          //  timeLeft--;
            //if (timeLeft >= 0) {
              //  timerElement.textContent = `Time Left: ${formatTime(timeLeft)}`;
            //} else {
              //  clearInterval(quizTimer);
                //showNextQuestion();
           // }
        //}, 1000);

        //function formatTime(seconds) {
          //  const minutes = Math.floor(seconds / 60);
            //const remainingSeconds = seconds % 60;
            //return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        //}
    //}
    
    
    

    // Function to show the score
    function showScore() {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = ""; // Clear previous content
    
        // Calculate percentage
        const percentage = (score / questions.length) * 100;
        let message = '';
    
        message = `Your score: ${score}/${questions.length}, `;
    
        if (percentage >= 75) {
            message += `Congratulations on Achieving${percentage.toFixed(2)}%. ! You're on the right track. Keep exploring the topics that spark your curiosity, and you'll keep achieving amazing things! ✨`;
        } else if (percentage >= 50 && percentage < 75) {
            message += `Hey There!Your Score of ${percentage.toFixed(2)}%. is Solid Start! Take another crack at the quiz and see if you can improve your score. Remember, every attempt helps you learn and grow.`;
        } else {
            message += `Don't worry! Your score ${percentage.toFixed(2)}%. is a chance to learn and grow. Take another shot at the quiz, focus on understanding the concepts, and you'll see progress in no time!`;
        }
    
        const scoreContainer = document.createElement("div");
        scoreContainer.textContent = message;
        quizContainer.appendChild(scoreContainer);
    
        // Show Show Answers button
        const showAnswersButton = document.createElement("button");
        showAnswersButton.id = "show-answers-btn";
        showAnswersButton.textContent = "Show Answers";
        showAnswersButton.addEventListener("click", () => {
            showAnswers(questions);
        });
        quizContainer.appendChild(showAnswersButton);
    
        // Show submit button
        const submitButton = document.createElement("button");
        submitButton.id = "submit-btn";
        submitButton.textContent = "Submit";
        submitButton.addEventListener("click", () => {
            endQuiz();
        });
        quizContainer.appendChild(submitButton);
    }
    

    function updateQuestionCounter() {
        const counterElement = document.querySelector(".question-counter");
        counterElement.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    }

    function endQuiz() {
        clearInterval(quizTimer);
        showScore();
        const showAnswersButton = document.createElement("button");
        showAnswersButton.id = "show-answers-btn";
        showAnswersButton.textContent = "Show Answers";
        showAnswersButton.addEventListener("click", () => {
            showAnswers(questions);
        });
        quizContainer.appendChild(showAnswersButton);
    }
}



function showAnswers(questions) {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = ""; // Clear previous content

    questions.forEach(question => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("quiz");

        // Add question text
        const questionText = document.createElement("h2");
        questionText.textContent = question.question;
        questionElement.appendChild(questionText);

        // Add answer options
        question.answers.forEach(answer => {
            const answerButton = document.createElement("button");
            answerButton.classList.add("btn");
            answerButton.textContent = answer.text;
            if (answer.correct) {
                answerButton.classList.add("correct");
            }
            questionElement.appendChild(answerButton);
        });

        quizContainer.appendChild(questionElement);
    });
}


const questionsBySubject = {
    "Agri implements": [
        {
            question: "What is the first operation in the production of crops?",
            answers: [             { text: "Tillage",correct: true},
                                   { text: "Sowing",correct:false },
                                   { text: "Harvesting",correct:false },
                                   { text: "Irrigation",correct:false },
            ]
            },
            {
            question: "What is rotary tillage?",
            answers: [       
                                   { text: "Ploughing with a rotating blade",correct:false },
                                   { text: "Planting with a rotating mechanism",correct:false },
                       { text: "Operations employing rotary action to cut, break and mix the soil",correct:true},
                                   { text: "Irrigation using rotary sprinklers",correct:false },
            ]
            },
            {
            question: "What is left in between two adjacent strips of land after finishing ploughing?",
            answers: [       { text: "Dead furrow",correct:true},
                                   { text: "Ridge",correct:false },
                                   { text: "Trench",correct:false },
                                   { text: "Slope",correct:false },
            ]
            },
            {
            question: "What is the weight range of the puddler including its beam?",
            answers: [             
                       { text: "20-30 kg",correct: false },
                                   { text: "30-40 kg",correct:true},
                                   { text: "40-50 kg",correct:false },
                                   { text: "50-60 kg",correct:false },
                       
            ]
            },
            {
            question: "What is the curved part of the plough which lifts and turns the furrow slice?",
            answers: [             { text: "Mould board",correct:true},
                                   { text: "Share",correct:false },
                                   { text: "Beam",correct:false },
                                   { text: "Land wheel",correct:false },
            ]
            },
            {
            question: "What is the wheel of the plough which runs on the unploughed land?",
            answers: [       
                                   { text: "Beam",correct:false },
                                   { text: "Mould board",correct:false },
                    { text: "Land wheel",correct:true},
                                   { text: "Furrow",correct:false },
            ]
            },
            {
            question: "What is a unit draft?",
            answers: [       { text: "Draft per unit area of land",correct:false },
                                   { text: "Draft per unit cross-sectional area of the furrow",correct:true},
                                   { text: "Draft per unit volume of soil",correct:false },
                                   { text: "Draft per unit weight of soil",correct:false },
            ]
            },
            {
            question: "What is the mass of soil cut, lifted, and thrown to one side called?",
            answers: [       
                                   { text: "Plough bottom",correct:false },
                                   { text: "Beam",correct:false },
                                   { text: "Mould board",correct:false },
                    { text: "Furrow slice",correct:true},
            ]
            },
            {
            question: "What is the purpose of a green manure tamper implement?",
            answers: [       
                                   { text: "To cut the green manure crop",correct:false },
                    { text: "To trample and press the green manure crop",correct:true},
                                   { text: "To water the green manure crop",correct:false },
                                   { text: "To harvest the green manure crop",correct:false },
            ]
            },
            {
            question: "What is the device called that is used to cut the furrow slice vertically from the land ahead of the plough bottom?",
            answers: [       { text: "Coulter",correct:true},
                                   { text: "Mould board",correct:false },
                                   { text: "Beam",correct:false },
                                   { text: "Land wheel",correct:false },
            ]
            },
            {
            question: "What is the perpendicular distance between the point of share and the lower position of the beam of the plough called?",
            answers: [       { text: "Throat clearance",correct:true},
                                   { text: "Draft",correct:false },
                                   { text: "Beam distance",correct:false },
                                   { text: "Plough height",correct:false },
            ]
            },
            {
            question: "Where is the offset disc harrow most useful?",
            answers: [       { text: "Orchards and gardens",correct:true},
                                   { text: "Large fields",correct:false },
                                   { text: "Paddy fields",correct:false },
                                   { text: "Desert areas",correct:false },
            ]
            },
            {
            question: "What is the size of the concave discs in tractor-drawn disc harrows?",
            answers: [       
                                   { text: "20-25 cm diameter",correct:false },
                                   { text: "45-50 cm diameter",correct:false },
                                   { text: "10-15 cm diameter",correct:false },
                       { text: "35-40 cm diameter",correct:true},
            ]
            },
            {
            question: "What is used to separate and keep two adjacent discs in position in a disc harrow?",
            answers: [       
                                   { text: "Beam",correct:false },
                       { text: "Spool",correct:true},
                                   { text: "Mould board",correct:false },
                                   { text: "Coulter",correct:false },
            ]
            },
            {
            question: "What is a rotary cultivator?",
            answers: [       
                                   { text: "Cultivator with rotating wheels",correct:false },
                                   { text: "Cultivator powered by wind energy",correct:false },
                        {text: "Cultivator with tines or blades mounted on a power-driven horizontal shaft",correct:true},
                                   { text: "Cultivator with a rotating seed dispenser",correct:false },
            ]
            },
            {
            question: "What is the main purpose of puddling?",
            answers: [       
                                   { text: "To increase water evaporation",correct:false },
                       { text: "To reduce leaching of water",correct:true},
                                   { text: "To improve soil aeration",correct:false },
                                   { text: "To control pests",correct:false },
            ]
            },
            {
            question: "What type of mechanism do most fertilizer drills in the country use to drop fertilizer in the field?",
            answers: [       { text: "Auger feed type",correct:true},
                                   { text: "Sprayer type",correct:false },
                                   { text: "Manual type",correct:false },
                                   { text: "Conveyor belt type",correct:false},
            ]
            },
            {
            question: "What is a transplanter fitted with an engine called?",
            answers: [      
                                   { text: "Manual transplanter",correct:false },
                                   { text: "Tractor-driven transplanter",correct:false },
                                   { text: "Walk-behind transplanter",correct:false },
                        { text: "Self-propelled transplanter",correct:true},
            ]
            },
            {
            question: "In which crops is the transplanting method adopted for planting seedlings?",
            answers: [       
                                   { text: "Wheat and barley",correct:false },
                                   { text: "Corn and soybeans",correct:false },
                       { text: "Paddy and vegetables",correct:true},
                                   { text: "Cotton and sugarcane",correct:false },
            ]
            },
            {
            question: "What is the term for the art of placing seeds in the soil to obtain good germination?",
            answers: [             { text: "Sowing", correct:true},
                                   { text: "Harvesting", correct:false },
                                   { text: "Transplanting", correct:false },
                                   { text: "Tillage", correct:false },
            ]
            }
        // Add more questions for Agri implements as needed
    ],
    "Farm Power & Tractor Systems": [
        {
            question: "Marginal farmers having land?",
             answers: [     
                 { text: "less than 1 h",correct:true },
                         { text: "greater than 2 h",correct:false },
                         { text: "less than 5 h",correct:false },
                         { text: "greater than 10 h",correct:false },
            ]
        },
        {
            question: "Small farmers having land?",
             answers: [     
                         { text: "1-7 h",correct:false },
                         { text: "1-2 h",correct:false },
                         { text: "1-5 h",correct:false },
                         { text: "2-4 h",correct:true },
            ]
        },
        {
            question: "Medium farmers having land?",
             answers: [     { text: "2-4 ",correct:false },
                         { text: "4-10 h",correct:true },
                         { text: "1-5 h",correct:false },
                         { text: "greater than 10 h",correct:false },
            ]
        },
        {
            question: "Large farmers having land?",
             answers: [     { text: "less than 1 h",correct:false},
                         { text: "greater than 2 h",correct:false},
                         { text: "greater than 10 h",correct:true },
                         { text: "5-10 h",correct:false}
            ]
        },
        {
            question: "How much land can an average man develop?",
             answers: [     
                 { text: "0.1 h",correct:true },		     
                         { text: "0.01 h",correct:false },
                         { text: "1 h",correct:false },
                         { text: "0.5 h",correct:false },
            ]
        },
        {
            question: "How many crop cattle does India have?",
             answers: [  
                     
                         { text: "20.68",correct:false },
                         { text: "25.68",correct:false },
                         { text: "30.68",correct:false },
                 { text: "22.68",correct:true },
            ]
        },
        {
            question: "How much power is developed by an average pair of bullocks?",
             answers: [  
                         { text: "1 hp",correct:true },
                         { text: "2 hp",correct:false },
                         { text: "0.5 hp",correct:false },
                         { text: "0.1 hp",correct:false },
            ]
        },
        {
            question: "What is the average force a bullock can exert?",
             answers: [     
                         { text: "1/5th of its body weight",correct:false },
                         { text: "1/10th of its body weight",correct:true },
                         { text: "1/3rd of its body weight",correct:false },
                         { text: "1/8th of its body weight",correct:false },
            ]
        },
        {
            question: "What is the efficiency of a diesel engine?",
             answers: [     { text: "32-38%",correct:true },
                         { text: "25-32%",correct:false },
                         { text: "20-25%",correct:false },
                         { text: "38-40%",correct:false },
            ]
        },
        {
            question: "What is the efficiency of a petrol engine?",
             answers: [     
                         { text: "32-38%",correct:false },
                         { text: "20-25%",correct:false },
                 { text: "25-32%",correct:true },
                         { text: "38-40%",correct:false },
            ]
        },
        {
            question: "Where can wind mills be used for lifting water?",
             answers: [     { text: "where wind velocity is less than 32 kmph",correct:false },
                         { text: "where wind velocity is more than 32 kmph",correct:true },
                         { text: "in urban areas",correct:false },
                         { text: "in coastal areas",correct:false },
            ]
        },
        {
            question: "What is the average capacity of a wind mill?",
             answers: [     { text: "1 hp",correct:false },
                         { text: "2 hp",correct:false },
                         { text: "0.5 hp",correct:true },
                         { text: "0.1 hp",correct:false },
            ]
        },
        {
            question: "How many wind mills are there in India?",
             answers: [     { text: "2000",correct:false },
                         { text: "3000",correct:false },
                         { text: "4000",correct:false },
                         { text: "2540",correct:true },
            ]
        },
        {
            question: "Examples of renewable energy sources are?",
             answers: [     { text: "nuclear energy",correct:false },
                         
                         { text: "coal energy",correct:false },
                 { text: "solar energy",correct:true },
                         { text: "hydro energy",correct:false },
            ]
        },
        {
            question: "How many watts is equal to 1 hp?",
             answers: [     
                    { text: "500 watts",correct:false },
                         { text: "1000 watts",correct:false },
                         { text: "2000 watts",correct:false },
                 { text: "746 watts",correct:true },
            ]
        }
        // Add more questions for Farm Power Machiner as needed
    ],
    "Agronomy": [
        {
            question: "Question 1 for Agronomy",
            answers: [
                { text: "Option 1", correct: true },
                { text: "Option 2", correct: false },
                // Add more options as needed
            ]
        },
        {
            question: "Question 2 for Agronomy",
            answers: [
                { text: "Option 1", correct: false },
                { text: "Option 2", correct: true },
                // Add more options as needed
            ]
        }
        // Add more questions for Agronomy as needed
    ],
    "Soil Science": [
        {
            question: "Question 1 for Soil Science",
            answers: [
                { text: "Option 1", correct: true },
                { text: "Option 2", correct: false },
                // Add more options as needed
            ]
        },
        {
            question: "Question 2 for Soil Science",
            answers: [
                { text: "Option 1", correct: false },
                { text: "Option 2", correct: true },
                // Add more options as needed
            ]
        }
        // Add more questions for Soil Science as needed
    ]
    // Add more subjects and questions as needed
};

function showAnswers(questions) {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = ""; // Clear previous content

    questions.forEach(question => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("quiz");

        // Add question text
        const questionText = document.createElement("h2");
        questionText.textContent = question.question;
        questionElement.appendChild(questionText);

        // Add answer options
        question.answers.forEach(answer => {
            const answerButton = document.createElement("button");
            answerButton.classList.add("btn");
            answerButton.textContent = answer.text;
            if (answer.correct) {
                answerButton.classList.add("correct");
            }
            questionElement.appendChild(answerButton);
        });

        quizContainer.appendChild(questionElement);
    });
}
