const keys = [
  {
    id: "Q",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "W",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "E",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "A",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "S",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "D",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Z",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "X",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "C",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const DrumPad = ({ drumKey }) => {
  const [active, setActive] = React.useState(false);

  const handlePlayback = (id) => {
    document.getElementById("display").innerText = id;
    const keyDiv = document.getElementById(id);
    const audio = keyDiv.firstChild;
    audio.play();
    setActive(true);
    setTimeout(() => setActive(false), 200);
  };

  React.useEffect(() => {
    const keyDownHandler = (event) => {
      let key = event.key.toUpperCase();
      if (key === drumKey.id) {
        handlePlayback(key);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div
      id={drumKey.id}
      class={`drum-pad ${active && "button-click"}`}
      onClick={(e) => handlePlayback(e.target.id)}
    >
      <audio id={drumKey.id} class="clip" src={drumKey.clip} />
      {drumKey.id}
    </div>
  );
};

const App = () => {
  return (
    <div id="drum-machine">
      <div id="drum-pads">
        {keys.map((drumKey) => (
          <DrumPad drumKey={drumKey} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
