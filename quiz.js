function checkAnswer(){
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    if(!selectedAnswer){
        document.getElementById('feedback').textContent = "Please enter an answer";
        return;
    }


const userAnswer = selectedAnswer.value;


const feedbackToBeGiven = document.getElementById('feedback');

if (userAnswer === correctAnswer) {
  feedbackToBeGiven.textContent = "Correct! Well done.";
} 
else {
   feedbackToBeGiven.textContent = "That's incorrect. Try again!"
}
}

//adding an event listener
document.getElementById("submit-answer").addEventListener('click', checkAnswer);

