import React, { useContext } from "react";
import ScoreSection from "./Components/ScoreSection";
import QuestionSection from "./Components/QuestionSection";
import { QuestionContext } from "./store/question-Context";

export default function App() {
  const endQuiz = useContext(QuestionContext).endQuiz.value;

  return (
    <div className="app">
      {endQuiz ? <ScoreSection /> : <QuestionSection />}
    </div>
  );
}
