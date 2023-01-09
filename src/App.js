import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increament,
  decreament,
  increaseAmount,
} from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Redux Toolkit Counter</h1>
      <h1>Counter:{counter?.value}</h1>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
      <button onClick={() => dispatch(increaseAmount(20))}>
        Increase Amount 20
      </button>
    </div>
  );
}

export default App;
