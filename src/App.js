import Counter from "./components/counter";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 240);

  return (
    <div className="tabata">
      <div className="window">
        <Counter
          expiryTimestamp={time}
          textColor="red"
          title="Square Breathing"
        ></Counter>
      </div>
      <div className="control"></div>
    </div>
  );
}

export default App;
