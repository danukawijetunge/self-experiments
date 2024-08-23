import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
      break;

    case "dec":
      return { count: state.count - 1 };
      break;

    default:
      return state;
  }
}

const initialState = { count: 0 };
export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(0);

  function increment() {
    dispatch({ type: "inc" });
  }

  function decrement() {
    setCounter((pre) => pre - 1);
  }
  return (
    <>
      <h1>hi</h1>
      <button onClick={increment}>+</button> {counter} {state.count}
      <button onClick={decrement}>-</button>
    </>
  );
}
