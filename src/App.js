import React, { useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'Question 1',
			answerOptions: [
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 't', isCorrect: true },
			],
		},
		{
			questionText: 'Question 2',
			answerOptions: [
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 't', isCorrect: true },
			],
		},
		{
			questionText: 'Question 3',
			answerOptions: [
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 't', isCorrect: true },
			],
		},
		{
			questionText: 'Question 4',
			answerOptions: [
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 't', isCorrect: true },
			],
		},
		{
			questionText: 'Question 5',
			answerOptions: [
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 'f', isCorrect: false },
				{ answerText: 't', isCorrect: true },
			],
		},
	];

  // set bubble colors green
  function correctAnswer() {
    if (currentQuestion === 0) {
      var bubble1 = document.getElementById("bubble1");
      bubble1.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 1) {
      var bubble2 = document.getElementById("bubble2");
      bubble2.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 2) {
      var bubble3 = document.getElementById("bubble3");
      bubble3.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 3) {
      var bubble4 = document.getElementById("bubble4");
      bubble4.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 4) {
      var bubble5 = document.getElementById("bubble5");
      bubble5.style.backgroundColor = "#7EC631";
    }
  }

  // set bubble colors red
  function incorrectAnswer() {
    if (currentQuestion === 0) {
      var bubble1 = document.getElementById("bubble1");
      bubble1.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 1) {
      var bubble2 = document.getElementById("bubble2");
      bubble2.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 2) {
      var bubble3 = document.getElementById("bubble3");
      bubble3.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 3) {
      var bubble4 = document.getElementById("bubble4");
      bubble4.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 4) {
      var bubble5 = document.getElementById("bubble5");
      bubble5.style.backgroundColor = "#D54E31";
    }
  }

  // clear bubble colors on reset
  function changeStyleClear() {
    var bubble1 = document.getElementById("bubble1");
    bubble1.style.backgroundColor = "transparent";

    var bubble2 = document.getElementById("bubble2");
    bubble2.style.backgroundColor = "transparent";

    var bubble3 = document.getElementById("bubble3");
    bubble3.style.backgroundColor = "transparent";

    var bubble4 = document.getElementById("bubble4");
    bubble4.style.backgroundColor = "transparent";

    var bubble5 = document.getElementById("bubble5");
    bubble5.style.backgroundColor = "transparent";
  }

	//properties
	const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

	// checks if correct answer is selected
  const handleAnswerButtonClick = (isCorrect) => {
    // add score + 1 and change bubble to green if correct answer is selected
    if(isCorrect === true) {
      setScore(score + 1);
			correctAnswer();

		// change bubble to red if wrong answer is selected
    } else {
      incorrectAnswer();
    }

    // show next question until the end, then show score
    const nextQuestion = currentQuestion + 1;
    	if (nextQuestion < questions.length) {
      		setCurrentQuestion(nextQuestion);
    	} else {
      		setShowScore(true);
    	}
  	};

  // resets the game back to default
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
		changeStyleClear();
  };

	return (
		<div className='app'>
			{/* header  */}
      <h1>Trivia test</h1>
			
			<div className='card'>
			{/* show final-results or show questions */}
			{showScore ? (

			/* final results */
			<div className='final-results'>

				<div className='card-top-section'>
					<div className='header-text'>
						{/* final score */}
						<span>Final Score: {(score / questions.length) * 100}%</span>
					</div>
					<div className='subheader-text'>
						{/* number correct */}
						You answered {score} / {questions.length} questions correctly
					</div>
				</div>

				<div className='card-bottom-section'>
					<button id="try-again" onClick={() => restartGame()}>Try Again</button>
				</div>
			</div>
			) : (
			<>

			{/* question card */}
			<div className='card-top-section'>
				<div className='header-text'>
					{/* current question number */}
					<span>Question {currentQuestion + 1}</span>/{questions.length}
				</div>
				{/* current question text */}
				<div className='subheader-text'>
					{questions[currentQuestion].questionText}
				</div>
			</div>

			{/* possible answers */}
			<div className='card-bottom-section'>
				{questions[currentQuestion].answerOptions.map((answerOption) => (
					<button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
				))}
			</div>
			</>
			)}
			
				{/* current score markers */}
				<div class="bubble-container">
					<div class="bubble" id="bubble1"></div>
					<div class="bubble" id="bubble2"></div>
					<div class="bubble" id="bubble3"></div>
					<div class="bubble" id="bubble4"></div>
					<div class="bubble" id="bubble5"></div>
				</div>	

			</div>
		</div>
	);
}
