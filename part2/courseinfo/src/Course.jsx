const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, i) => {
        return <Part key={i} part={part.name} exercise={part.exercises} />;
      })}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <h3>total of {total} exercises</h3>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
export default Course;
