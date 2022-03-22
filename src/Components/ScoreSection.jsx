import React from "react";
import { useContext } from "react";
import { QuestionContext } from "../store/question-Context";

const ScoreSection = () => {
  const score = useContext(QuestionContext).score;
  const questions = useContext(QuestionContext).questions;

  return (
    <div className="score-section">
      You scored {score} out of {questions.length}
    </div>
  );
};

export default ScoreSection;
