import { useState } from "react";
import Button from "./Button";

const Statistics = ({
  handlegoodbutton,
  handleneutralbutton,
  handlebadbutton,
  good,
  neutral,
  bad,
  totalScore,
  total,
}) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button title={"good"} handleClick={handlegoodbutton} />
      <Button title={"neutral"} handleClick={handleneutralbutton} />
      <Button title={"bad"} handleClick={handlebadbutton} />
      <h2>statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {totalScore / total}</p>
          <p>positive {(good / total) * 100} %</p>
        </>
      )}
    </>
  );
};

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
