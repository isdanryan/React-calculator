import { useReducer } from "react";
import "./styles.css"
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EQUALS: 'equals',
}

export const CHOOSE_OPERATION = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EQUALS: 'equals',
}

const initialState = {
  previousOperand: "",
  currentOperand: "",
  operation: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // Prevent multiple 0's being entered if starting 0 present
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      // Only allow one .
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }
      return {
        ...state, // Copy existing state
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CLEAR:
      return {}
  }
};

function App() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button>DEL</button>
      <button>÷</button>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <button>*</button>
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <button>+</button>
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <button>-</button>
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
