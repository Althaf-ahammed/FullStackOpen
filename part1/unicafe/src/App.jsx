import { useState } from "react";
import Statistics from "./Statistics";

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

  const totalScore = good - bad;
  const total = good + neutral + bad;

  return (
    <div>
      <Statistics
        handlegoodbutton={handlegoodbutton}
        handleneutralbutton={handleneutralbutton}
        handlebadbutton={handlebadbutton}
        totalScore={totalScore}
        total={total}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;
