import { useReducer } from "react";
import "./App.css";
import DigitButton from "./components/digit-button";
import OperationButton from "./components/operation-button";
export const actionTypes = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION:"choose-operation",
  CLEAR:"clear",
  DELETE_DIGIT:"delete-digit",
  EVALUATE:"evaluate",
}

const defaultState = {currentOperand : "", previousOperand : "", operation  : ""}
const reducer = (state = defaultState, {type, payload}) => {
  switch(type) {
    case actionTypes.ADD_DIGIT : 
      return {...state, currentOperand :`${state.currentOperand || ""}${payload.digit}`}
      case actionTypes.CHOOSE_OPERATION : 
      return {...state, operation : payload.operation, previousOperand : state.currentOperand, currentOperand: 0}
      case actionTypes.CLEAR : 
      return defaultState

      case actionTypes.EVALUATE : 
      // eslint-disable-next-line no-eval
      return {...state, currentOperand : eval(`${state.previousOperand} ${state.operation} ${state.currentOperand}`), previousOperand: "", operation : ""}

      case actionTypes.DELETE_DIGIT: 
      return {...state, currentOperand : `${Math.floor(state.currentOperand / 10) || ""}`}
    default : 
      return state
    }

}
const App = () => {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator__grid">
      <div className="output">
        <div className="prev__operand">{`${previousOperand || ""} ${operation || ""}`}</div>
        <div className="current__operand">{`${currentOperand || 0}`}</div>
      </div>
      <button className="span--two" onClick={() => dispatch({type : actionTypes.CLEAR})}>AC</button>
      <button onClick={() => dispatch({type: actionTypes.DELETE_DIGIT})}>DEL</button>
      <OperationButton dispatch={dispatch} operation={"/"}/>
      <DigitButton dispatch={dispatch} digit={1}/>
      <DigitButton dispatch={dispatch} digit={2}/>
      <DigitButton dispatch={dispatch} digit={3}/>
      <OperationButton dispatch={dispatch} operation={"*"}/>
      <DigitButton dispatch={dispatch} digit={4}/>
      <DigitButton dispatch={dispatch} digit={5}/>
      <DigitButton dispatch={dispatch} digit={6}/>
      <OperationButton dispatch={dispatch} operation={"+"}/>
      <DigitButton dispatch={dispatch} digit={7}/>
      <DigitButton dispatch={dispatch} digit={8}/>
      <DigitButton dispatch={dispatch} digit={9}/>
      <OperationButton dispatch={dispatch} operation={"-"}/>
      <DigitButton dispatch={dispatch} digit={"."}/>
      <DigitButton dispatch={dispatch} digit={0}/>
      <button className="span--two" onClick={() => dispatch({type : actionTypes.EVALUATE})}>=</button>
    </div>
  );
};

export default App;
