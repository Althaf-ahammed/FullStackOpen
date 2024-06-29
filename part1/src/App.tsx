import React from "react";

interface HeaderProps {
  course: string;
}
interface PartProps {
  part: string;
  exercise: number;
}

interface PartsProps {
  parts: {
    name: string;
    exercises: number;
  }[];
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

const Content: React.FC<PartsProps> = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  );
};

const Total: React.FC<PartsProps> = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App: React.FC = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
