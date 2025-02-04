import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10)
       .fill(0)
       .map(() => ({
          value:Math.floor(Math.random() * 6) + 1,
          isHeld:false,
          id:nanoid()
    }));
  }

  const diceElements = dice.map((diebObj) => 
  (   <Die key={diebObj.id} value={diebObj.value} isHeld={diebObj.isHeld} id={diebObj.id} />

  ));

  const handleRoll =() => setDice(generateAllNewDice())

  return (
    <main>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={handleRoll}>Roll</button>
    </main>
  );
}
