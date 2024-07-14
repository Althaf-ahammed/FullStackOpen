import People from "./People";

function ShowPeople({ personsToShow, handleDelete }) {
  return (
    <div>
      {personsToShow.map((person) => (
        <People key={person.name} person={person} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ShowPeople;
