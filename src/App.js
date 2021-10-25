import Counter from "./components/counter";
import Wim from "./components/wim";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import bg from "./images/bg.jpeg";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 240);

  return (
    <div className="parent-wrapper">
      <Navbar></Navbar>
      <div className="intro-page">
        <div className="wrapper">
          <div className="heading">
            <h1>
              Breathing methods to heal your body, clear your mind and relax.
            </h1>
            <a class="btn primary" href="#methods">
              Know the Methods
            </a>
          </div>
        </div>
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
