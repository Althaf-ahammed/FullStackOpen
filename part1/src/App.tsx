import React from "react";

interface HeaderProps {
  course: string;
}
interface PartProps {
  part: string;
  exercise: number;
}

interface ContentProps {
  part1: {
    name: string;
    exercises: number;
}
  part2: {
    name: string;
    exercises: number;
}
  part3: {
    name: string;
    exercises: number;
}
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
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
    </>
  );
};

const Total: React.FC<totalProps> = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

const App: React.FC = () => {
  const course = "Half Stack application development";
  const part1 = {name: "Fundamentals of React", exercises: 10 }
  const part2 = {name: "Using props to pass data", exercises: 7 }
  const part3 = {name: "State of a component", exercises: 14 }
  const total = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total total={total} />
    </div>
  );
};

export default App;
