import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [firstNumber, storeFirstNumber] = useState(0);
  const [secondNumber, storeSecondNumber] = useState(0);
  const [operator, storeOperator] = useState(undefined);
  const [result, storeResult] = useState(0);
  /** TODO: what happens when I click a number? */
  const handleNumberClick = (value) => {
    if (!operator) {
      storeFirstNumber(value);
    } else {
      storeSecondNumber(value);
    }
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (value) => {
    storeOperator(value);
  };

  const handleClearButtonClick = (value) => {
    storeFirstNumber(0);
    storeOperator(undefined);
    storeSecondNumber(0);
    storeResult(0);
  };

  const handleEqualSign = (value) => {
    if (operator === "+") {
      storeResult(firstNumber + secondNumber);
    } else if (operator === "-") {
      storeResult(firstNumber - secondNumber);
    } else if (operator === "x") {
      storeResult(firstNumber * secondNumber);
    } else if (operator === "/") {
      storeResult(firstNumber / secondNumber);
    }
  };

  return (
    <div>
      <Screen
        value={
          result
            ? result
            : `${firstNumber} ${operator ? operator : ""} ${
                secondNumber ? secondNumber : ""
              }`
        }
      />
      <div className="calculator-buttons">
        <div className="numbers">
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <div className="number-zero"><Number value={0} onClick={handleNumberClick} /></div>
          <Operation value="clear" onClick={handleClearButtonClick} />
          <Operation value="=" onClick={handleEqualSign} />
        </div>
        <div className="operator-buttons">
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
