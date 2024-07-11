function People({ person }) {
  return (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  );
}

export default People;
