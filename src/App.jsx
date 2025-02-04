import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
  }

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}
