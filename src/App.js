import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Watched from "./Components/Watched";
import AddMovie from "./Components/AddMovie";
import WatchList from "./Components/WatchList";

import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </>
  );
}

export default App;
