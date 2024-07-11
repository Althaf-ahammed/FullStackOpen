import { useState } from "react";
import Filter from "./Filter";
import AddPeople from "./AddPeople";
import ShowPeople from "./ShowPeople";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkPerson = persons.find((person) => person.name === newName);
    if (checkPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = { name: newName, number: newNumber };
      const newPersons = persons.concat(personObject);
      setPersons(newPersons);

      const filteredPersons = newPersons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );

      setPersonsToShow(filteredPersons);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    setNewFilter(filterValue);
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setPersonsToShow(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <AddPeople
        handleSubmit={handleSubmit}
        newName={newName}
        handleChange={handleChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ShowPeople personsToShow={personsToShow} />
    </div>
  );
};

export default App;
