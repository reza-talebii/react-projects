import React, { useContext } from "react";
import { useState } from "react";
import { QuestionContext } from "../store/question-Context";

const QuestionSection = () => {
  const questions = useContext(QuestionContext).questions;
  const endQuizHandler = useContext(QuestionContext).endQuiz.dispatch;
  const setScore = useContext(QuestionContext).score.dispatch;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    isCorrect && setScore((prev) => prev + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      endQuizHandler(true);
    }
  };

  const { questionText, answerOptions } = questions[currentQuestion];

  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">{questionText}</div>
      </div>

      <div className="answer-section">
        {answerOptions.map((answerOption) => (
          <button
            key={answerOption.answerText}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionSection;
