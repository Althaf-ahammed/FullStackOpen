import People from "./People";

function ShowPeople({ personsToShow }) {
  return (
    <div>
      {personsToShow.map((person) => (
        <People key={person.name} person={person} />
      ))}
    </div>
  );
}

export default ShowPeople;
