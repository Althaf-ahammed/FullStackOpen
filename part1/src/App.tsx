import React from "react";

interface HeaderProps {
  course: string;
}
interface ContentProps {
  part: string;
  exercise: number;
}

interface totalProps {
  total: number;
}

const Header: React.FC<HeaderProps> = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content: React.FC<ContentProps> = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Total: React.FC<totalProps> = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

const App: React.FC = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total total={total} />
    </div>
  );
};

export default App;
