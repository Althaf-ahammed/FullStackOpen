import { useState } from "react";

import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handlegoodbutton = () => {
    setGood(good + 1);
  };
  const handleneutralbutton = () => {
    setNeutral(neutral + 1);
  };
  const handlebadbutton = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <Button title={"good"} handleClick={handlegoodbutton} />
      <Button title={"neutral"} handleClick={handleneutralbutton} />
      <Button title={"bad"} handleClick={handlebadbutton} />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
