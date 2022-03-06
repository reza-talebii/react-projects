import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Concat from "./routes/concat";
import PricingPage from "./routes/pricingPage";
import TrainingPage from "./routes/trainingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Concat />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="training" element={<TrainingPage />} />
      </Routes>
    </>
  );
}

export default App;
