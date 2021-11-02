import Counter from "./components/counter";
import Wim from "./components/wim";
import Double from "./components/double";
import Navbar from "./components/navbar";
import m1 from "./images/m1.png";
import m2 from "./images/m2.png";
import m3 from "./images/m3.png";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 240);

  return (
    <div className="parent-wrapper">
      <Navbar></Navbar>
      <div id="heading" className="intro-page">
        <div className="wrapper">
          <div className="heading">
            <h1>
              Breathing methods to heal your body, clear your mind and relax.
            </h1>
            <div className="heading-buttons">
              <a class="btn primary" href="#t-square">
                Square Breathing
              </a>
              <a class="btn primary" href="#t-wim">
                Wim Hof Method
              </a>
              <a class="btn primary" href="#t-double">
                2:1 Method
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="t-square" className="data-page p-section">
        <div className="wrapper">
          <div className="title-section">
            <img src={m2} alt="" />
            <h2 className="m-b-text">Square Breathing</h2>
          </div>
          <p>
            Square breathing is a type of breathwork that can shift your energy,
            connect you more deeply with your body, calm your nervous system,
            and decrease stress in your body. It is also referred to as box
            breathing, 4×4 breathing, and 4-part breath.
          </p>
          <h3 className="m-t-block m-b-text">How to do square breathing</h3>
          <ul className="list m-b-text">
            <li>Begin by slowly exhaling all of your air out.</li>
            <li>Then, gently inhale through your nose to a slow count of 4.</li>
            <li>Hold at the top of the breath for a count of 4.</li>
            <li>Then gently exhale through your mouth for a count of 4.</li>
            <li>
              At the bottom of the breath, pause and hold for the count of 4.
            </li>
          </ul>
          <a className="link" href="#square">
            Go to the simulator.
          </a>
        </div>
      </div>
      <div id="t-wim" className="data-page p-section bg-dark">
        <div className="wrapper">
          <div className="title-section">
            <img src={m1} alt="" />
            <h2 className="m-b-text">Wim Hof Method</h2>
          </div>
          <p>
            This method was invented by Wim Hof itself it is based is based on
            three powerful pillars. (more info in{" "}
            <a
              className="link-dark"
              target="_blank"
              rel="noreferrer"
              href="https://www.wimhofmethod.com/practice-the-method#learn-more"
            >
              the oficial page.
            </a>
            )
          </p>
          <h3 className="m-t-block m-b-text">Breathing</h3>
          <p>
            The first pillar of the wim hof method is breathing. We’re always
            breathing, yet we’re mostly unaware of its tremendous potential.
            Heightened oxygen levels hold a treasure trove of benefits, and the
            specialized breathing technique of the Wim Hof Method unearths them
            all: more energy, reduced stress levels, and an augmented immune
            response that swiftly deals with pathogens.
          </p>

          <h3 className="m-t-block m-b-text">Cold therapy</h3>
          <p>
            The cold is your warm friend and one of the three pillars of the wim
            hof method . Proper exposure to the cold starts a cascade of health
            benefits, including the buildup of brown adipose tissue and
            resultant fat loss, reduced inflammation that facilitates a
            fortified immune system, balanced hormone levels, improved sleep
            quality, and the production of endorphins— the feel - good chemicals
            in the brain that naturally elevate your mood
          </p>

          <h3 className="m-t-block m-b-text">Comitment</h3>
          <p>
            The third pillar of the wim hof method is the foundation of the
            other two: both cold exposure and conscious breathing require
            patience and dedication in order to be fully mastered. Armed with
            focus and determination you are ready to explore and eventually
            master your own body and mind.
          </p>
          <h3 className="m-t-block m-b-text">How to do Wim Hof Breathing</h3>
          <ul className="list m-b-text">
            <li>
              Assume a meditation posture: sitting, lying down — whichever is
              most comfortable for you. Make sure you can expand your lungs
              freely without feeling any constriction.
            </li>
            <li>
              Get air from the mouth (or nose) using the diaphragm (expand your
              belly)
            </li>
            <li>Release the air naturally, try to not force the exhalation.</li>
            <li>
              Once you reach the number of breahts, After the last exhalation,
              inhale one final time, as deeply as you can.
            </li>
            <li>Hold until you feel the urge to breathe again.</li>
            <li>
              Once you feel the urge to breath, take a big breath and hold 15
              seconds.
            </li>
            <li>Repeat the number of sets that you want.</li>
          </ul>
          <h3 className="m-t-block m-b-text">Disclaimer</h3>
          <p>
            Be carefully, never do the exercises in the water or driving, your
            body need's time to adapt.
          </p>
          <a className="link" href="#wim">
            Go to the simulator.
          </a>
        </div>
      </div>
      <div id="t-double" className="data-page p-section">
        <div className="wrapper">
          <div className="title-section">
            <img src={m3} alt="" />
            <h2 className="m-b-text">2:1 Breathing</h2>
          </div>
          <p>
            2-to-1 breathing helps reduce, coordinate, and stabilize the
            activity of the brain and the nervous system. Repeated for a number
            of cycles, this exercise triggers an innate calming response that
            tempers the fight-or-flight activation brought on by performance
            nerves.
          </p>
          <h3 className="m-t-block m-b-text">How to do 2-to-1 Breathing</h3>
          <ul className="list m-b-text">
            <li>Sit comfortably; release your shoulders, neck, and jaw..</li>
            <li>
              Close your eyes, allow your spine to lengthen, and exhale fully
            </li>
            <li>
              To a moderate mental count, inhale silently through your nose and
              deeply into your abdomen..
            </li>
            <li>
              Exhale through gently pursed lips for double the count (twice the
              duration) of your inhalation.
            </li>
            <li>Repeat.</li>
          </ul>
          <p className="m-b-text">
            Continue for 5-10 cycles or several minutes, but reinstate normal
            breathing if you become lightheaded. If any thoughts intrude as you
            breathe, let them go without judgment, and serenely refocus on your
            breathing and counting. Many yoga practitioners of 2-to-1 breathing
            recommend exhaling via the nose rather than pursed lips – I
            encourage you to experiment with doing so, especially if you’re
            adept at breath control.
          </p>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.musiciansway.com/blog/2010/03/2-to-1-breathing/"
          >
            Study about the benefits of 2:1 breathing
          </a>
          <div>
            <a className="link" href="#twone">
              Go to the simulator.
            </a>
          </div>
        </div>
      </div>

      <div className="window" id="square">
        <Counter title="Square Breathing"></Counter>
      </div>
      <div className="window" id="wim">
        <Wim title="Wim Hof Breathing"></Wim>
      </div>
      <div className="window" id="twone">
        <Double title="2:1 Method"></Double>
      </div>
    </div>
  );
}

export default App;
