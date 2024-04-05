import { useState, useRef } from "react";

export default function Player() {
  const refPlayerName = useRef();
  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(refPlayerName.current.value);
    refPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={refPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
