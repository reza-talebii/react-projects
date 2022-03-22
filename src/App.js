import React, { useContext, useState } from "react";
import ScoreSection from "./Components/ScoreSection";
import QuestionSection from "./Components/QuestionSection";
import { QuestionContext } from "./store/question-Context";

export default function App() {
  const endQuiz = useContext(QuestionContext).endQuiz;

  return (
    <div className="app">
      {endQuiz ? <ScoreSection /> : <QuestionSection />}
    </div>
  );
}
