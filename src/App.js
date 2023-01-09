import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increaseAmount,
  increment,
} from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Redux Toolkit Counter</h1>
      <h1>Counter:{counter?.value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button>Increase Amount</button>
    </div>
  );
}

export default App;
