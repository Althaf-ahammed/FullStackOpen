import Button from "./Button";
import StatisticLine from "./StatisticLine";

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
            <StatisticLine title={'good'} value={good} />
            <StatisticLine title={'neutral'} value={neutral} />
            <StatisticLine title={'bad'} value={bad} />
            <StatisticLine title={'all'} value={total} />
            <StatisticLine title={'average'} value={totalScore / total} />
            <StatisticLine title={'positive'} value={`${(good / total) * 100} % `} />
          </>
        )}
      </>
    );
  };
  export default Statistics