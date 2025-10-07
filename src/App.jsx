import { useCalculatorController } from "./controller/CalculatorController";
import CalculatorView from "./view/CalculatorView";
import "./App.css";

function App() {
  const { value, onButtonClick } = useCalculatorController();

  return <CalculatorView value={value} onButtonClick={onButtonClick} />;
}

export default App;
