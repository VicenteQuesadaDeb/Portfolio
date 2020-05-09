import React from "react";
import Typical from "react-typical";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <code>Hi, I'm Vicente Quesada Camón</code>
        </h1>
        <p>
          I'm a
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " developer 💻",
              1000,
              " student 👨🏼‍🎓",
              1000,
              " curious person 😯",
              1000,
              "n outgoing person 👍🏻",
              1000,
              " wannabe musician 🎵",
              1000,
              " singer 🎤",
              1000,
              " piano player 🎹",
              1000,
              " guitar player 🎸",
              1000,
              " languajes lover 🌏",
              1000,
              " roller skater 👨🏼‍🦽",
              1000,
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
