let score = 0;
let currentPage = 1;

function calculateScore() {
    // Get the selected answer for the current page
    const selectedAnswer = document.querySelector(`input[name="q${currentPage}"]:checked`);
    
    // Define the correct answer for the current page
    const correctAnswer = "Correct";
    
    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
        // Increase the score if the answer is correct
        score += 1;
    }
    
    // Update the score display
    document.getElementById("score").textContent = "Score: " + score;
    
    // Disable the radio inputs for the current page
    const radioInputs = document.querySelectorAll(`input[name="q${currentPage}"]`);
    radioInputs.forEach(input => {
        input.disabled = true;
    });
    
    // Disable the "Next" button
    const nextButton = document.querySelector("button");
    nextButton.disabled = true;

    // Move to the next page or show the final score
    currentPage += 1;
    const currentPageContainer = document.getElementById('page' + (currentPage - 1));
    currentPageContainer.style.display = 'none';

    if (currentPage <= 4) { // Adjust this number based on the number of questions
        const nextPageContainer = document.getElementById('page' + currentPage);
        nextPageContainer.style.display = 'block';

        // Enable the "Next" button for the next question
        nextButton.disabled = false;
    } else {
        // Show the final score
        document.getElementById('score').textContent = "Final Score: " + score;
        document.getElementById('retryButton').style.display = 'block';
    }
}
function retryQuiz() {
    location.reload();
}
