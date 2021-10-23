import Counter from "./components/counter";
import Wim from "./components/wim";
import Intro from "./components/intro";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 240);

  return (
    <div className="tabata">
      <div className="window">
        <Intro></Intro>
      </div>
      <div className="window">
        <Counter title="Square Breathing"></Counter>
      </div>
      <div className="window">
        <Wim title="Wim Hof Breathing"></Wim>
      </div>
      <div className="control"></div>
    </div>
  );
}

export default App;
