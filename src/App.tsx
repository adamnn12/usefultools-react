import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Calculator from "./tools/Calculator";
import { Tools } from "./components/types";
import ColorPicker from "./tools/ColorPicker";
import UnitConverter from "./tools/UnitConverter";
import FileConverter from "./tools/FileConverter";
import CurrencyConverter from "./tools/CurrencyConverter";
import InterestRateCalculator from "./tools/InterestRateCalculator";

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
      {view === "fileconverter" && <FileConverter />}
      {view === "currencyexchanger" && <CurrencyConverter />}
      {view === "interestratecalculator" && <InterestRateCalculator />}
    </div>
  );
}

export default App;
