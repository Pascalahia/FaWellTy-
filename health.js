// Get the elements from the HTML document
var startNavigatorBtn = document.getElementById("start-navigator");
var navigatorDiv = document.getElementById("navigator");

// Define an array of questions and options for the health insurance navigator feature
var questions = [
    {
        question: "How old are you?",
        options: ["Under 18", "18-64", "65 or older"]
    },
    {
        question: "What is your monthly income?",
        options: ["Under 500€", "500-3000€", "More than 3000€"]
    },
    {
        question: "How many family members do you have?",
        options: ["None", "1-3", "More than 3"]
    },
    {
        question: "Do you have a chronic illness or disability?",
        options: ["Yes", "No"]
    }
];

// Define an array of health insurance programs and their descriptions
var programs = [
    {
        name: "Gesetzliche Krankenversicherung (GKV)",
        description: "<b>Description: </b>"+ "Public health insurance is compulsory for all employees, pensioners, students, the unemployed and other persons who fall below a certain income threshold. Contributions are calculated according to income and shared by employers and employees. The benefits include basic care, such as visits to the doctor, medication, hospitalisation, etc.",
        type: "<b>Example: </b>" + "Allgemeine Ortskrankenkasse (AOK), Betriebskrankenkasse (BKK), Innungskrankenkasse (IKK), See-Krankenkasse, Landwirtschaftliche Krankenkasse, Ersatzkassen (DAK, KKH, Barmer), Deutsche Rentenversicherung Knappschaft-Bahn-See, Künstlersozialkasse"
    },
    {
        name: "Private Krankenversicherung (PKV)",
        description: "<b>Description: </b>"+"Private health insurance is a voluntary insurance for people who are not subject to statutory health insurance, such as the self-employed, civil servants, freelancers or people with a high income. Premiums are calculated according to age, gender, state of health and the chosen tariff. The benefits may vary depending on the tariff, but they generally offer better cover than statutory health insurance, e.g. more freedom of choice of doctors, shorter waiting periods, higher reimbursements, etc.",
        type: "<b>Example: </b>" + " Allianz Private Krankenversicherung, Alte Oldenburger Krankenversicherung, ARAG Krankenversicherung, AXA Krankenversicherung, Barmenia Krankenversicherung, Concordia Krankenversicherung, Continentale Krankenversicherung, Debeka Krankenversicherung."
    },
    {
        name: "Sozialhilfe",
        description: "<b>Description: </b>"+ "Social assistance is state support for people who have no or only a very low income and cannot claim any other insurance. Social assistance covers the costs of statutory health insurance and other necessary expenses, such as rent, food, clothing, etc.",
        type: " "
    }
];

// Define a variable to store the current question index
var currentQuestionIndex = 0;

// Define a variable to store the user's answers
var userAnswers = [];

// Define a function to display the first question and options when the user clicks the start navigator button
function startNavigator() {
    // Hide the start navigator button
    startNavigatorBtn.style.display = "none";

    // Display the first question
    displayQuestion();
}

// Define a function to display the current question and options
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];

    // Create a paragraph element to display the question
    var questionElement = document.createElement("p");
    questionElement.textContent = currentQuestion.question;

    // Create a div element to hold the options
    var optionsContainer = document.createElement("div");

    // Loop through the options and create buttons for each option
    currentQuestion.options.forEach(function(option) {
        var optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.addEventListener("click", function() {
            // Store the selected answer
            userAnswers[currentQuestionIndex] = option;
            // Move to the next question or display result
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                navigatorDiv.innerHTML = "";
                displayQuestion();
            } else {
                displayResult();
            }
        });
        optionsContainer.appendChild(optionButton);
    });

    // Clear the navigator content and append the question and options
    navigatorDiv.innerHTML = "";
    navigatorDiv.appendChild(questionElement);
    navigatorDiv.appendChild(optionsContainer);

}

// Define a function to display the result
function displayResult() {
    // Determine the suggested program based on user's answers
    var suggestedProgram;
    var ageAnswer = userAnswers[0];
    var incomeAnswer = userAnswers[1];
    var familySizeAnswer = userAnswers[2];

    if (ageAnswer === "Under 18") {
        suggestedProgram = programs.find(program => program.name === "Gesetzliche Krankenversicherung (GKV)");
    } else if (ageAnswer === "18-64") {
        if (incomeAnswer === "Under 500€") {
            suggestedProgram = programs.find(program => program.name === "Sozialhilfe");
        } else if (incomeAnswer === "500-3000€" || familySizeAnswer === "More than 3") {
            suggestedProgram = programs.find(program => program.name === "Gesetzliche Krankenversicherung (GKV)");
        } else if (incomeAnswer === "More than 3000€") {
            suggestedProgram = programs.find(program => program.name === "Private Krankenversicherung (PKV)");
        }
    } else if (ageAnswer === "65 or older") {
        suggestedProgram = programs.find(program => program.name === "Gesetzliche Krankenversicherung (GKV)");
    }

    // Display the result
    //var resultElement = document.createElement("p");
    //resultElement.textContent   = "We recommend the following health insurance programme: " + suggestedProgram.name + ".\n" + suggestedProgram.description;
    //navigatorDiv.appendChild(resultElement);
    // Check if suggestedProgram exists and has the required properties
    if (suggestedProgram && suggestedProgram.name && suggestedProgram.description) {
        // Display the result
        var resultElement = document.createElement("p");
        resultElement.innerHTML = "We recommend the following health insurance programme: " + suggestedProgram.name + ".<br>" + suggestedProgram.description + ".<br>" + suggestedProgram.type;
        navigatorDiv.appendChild(resultElement);
    } else {
        console.error("suggestedProgram is undefined or does not have the required properties.");
    }

}
//refresh the page
document.getElementById('refresh').addEventListener('click', function() {
    window.location.href = 'health_resource_center.html';
});

// Add an event listener to the start navigator button
startNavigatorBtn.addEventListener("click", startNavigator);
