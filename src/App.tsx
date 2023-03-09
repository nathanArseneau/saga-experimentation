import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Learn React</h1>
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT_ASYNC" })}>
        Decrement
      </button> */}
    </div>
  );
}

export default App;
