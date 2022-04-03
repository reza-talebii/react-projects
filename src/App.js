import React from "react";
import Title from "./Components/Title";
import UploadForm from "./Components/Upload/UploadForm";
import ImageGrid from "./Components/ImageGrid/ImageGrid";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
