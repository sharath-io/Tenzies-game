import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    }));
  }

  const hold = (id) => {
    setDice((oldDice) =>
      oldDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  };

  const diceElements = dice.map((diebObj) => (
    <Die
      key={diebObj.id}
      value={diebObj.value}
      isHeld={diebObj.isHeld}
      id={diebObj.id}
      hold={() => hold(diebObj.id)}
    />
  ));

  const rollDice = () =>
    setDice((oldDice) =>
      oldDice.map((dice) =>
        dice.isHeld ? dice : { ...dice, value: Math.floor(Math.random() * 6)+1 }
      )
    );

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
