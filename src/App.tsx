import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Calculator from "./tools/Calculator";
import { Tools } from "./components/types";
import ColorPicker from "./tools/ColorPicker";
import UnitConverter from "./tools/UnitConverter";

function App() {
  const [view, setView] = useState<Tools>("calculator");

  const handleChangeView = (newView: Tools) => {
    setView(newView);
  };

  return (
    <div>
      <Navbar onChangeView={handleChangeView} />
      {view === "calculator" && <Calculator />}
      {view === "converter" && <UnitConverter />}
      {view === "colorpicker" && <ColorPicker />}
    </div>
  );
}

export default App;
