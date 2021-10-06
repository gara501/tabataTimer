import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <div className="window">
        <Counter
          minutes="00"
          seconds="00"
          textColor="red"
          title="exercise"
        ></Counter>
      </div>
      <div className="control"></div>
    </div>
  );
}

export default App;
