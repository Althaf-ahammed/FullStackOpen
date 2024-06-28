import React from "react";

interface HeaderProps {
  course: string;
}
interface PartProps {
  part: string;
  exercise: number;
}

interface ContentProps {
  part1: string;
  exercises1: number;
  part2: string;
  exercises2: number;
  part3: string;
  exercises3: number;
}

interface totalProps {
  total: number;
}

const Header: React.FC<HeaderProps> = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part: React.FC<PartProps> = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content: React.FC<ContentProps> = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </>
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
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={total} />
    </div>
  );
};

export default App;
