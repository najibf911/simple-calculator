import { useState } from "react";
import * as model from "../model/CalculatorModel";

export function useCalculatorController() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  function onButtonClick(value) {
    if (!isNaN(value)) {
      // Number pressed
      setDisplay(waitingForOperand ? value : (display === '0' ? value : display + value));
      setWaitingForOperand(false);
      return;
    }

    if (value === '.') {
      if (waitingForOperand) {
        setDisplay('0.');
        setWaitingForOperand(false);
      } else if (!display.includes('.')) {
        setDisplay(display + '.');
      }
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      // Chain calculations if operator already pending
      if (operator && !waitingForOperand) {
        const secondOperand = Number(display);
        const result = compute(firstOperand, operator, secondOperand);
        setFirstOperand(result);
        setDisplay(String(result));
      } else {
        setFirstOperand(Number(display));
      }
      setOperator(value);
      setWaitingForOperand(true);
      return;
    }

    if (value === '=') {
      if (operator && firstOperand !== null && !waitingForOperand) {
        const secondOperand = Number(display);
        const result = compute(firstOperand, operator, secondOperand);
        setDisplay(String(result));
        setFirstOperand(null);
        setOperator(null);
        setWaitingForOperand(false);
      }
      return;
    }

    if (value === 'AC') {
      setDisplay('0');
      setFirstOperand(null);
      setOperator(null);
      setWaitingForOperand(false);
      return;
    }

    if (value === '+/-') {
      if (display !== '0') setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
      return;
    }

    if (value === '%') {
      const num = Number(display);
      setDisplay(String(num / 100));
      return;
    }
  }

  function compute(a, op, b) {
    switch (op) {
      case '+': return model.add(a, b);
      case '-': return model.subtract(a, b);
      case '*': return model.multiply(a, b);
      case '/': return model.divide(a, b);
      default: return b;
    }
  }

  return { value: display, onButtonClick };
}