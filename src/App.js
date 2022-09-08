import { useState } from "react";
import "./App.css";
import Drawer from "./components/drawer";
import ColorsPicker from "./components/ColorsPicker";

export default function App() {
  const [casesNumber, setCasesNumber] = useState("5");
  const totalCases = casesNumber * casesNumber;
  return (
    <div className="App">
      <div>
        <span>Nombre de cases :{totalCases} </span>
      </div>

      <ColorsPicker />
      <Drawer casesNumber={casesNumber} totalCases={totalCases} />
    </div>
  );
}
