import { useEffect, useState } from "react";
import Filter from "./Filter";
import AddPeople from "./AddPeople";
import ShowPeople from "./ShowPeople";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons( response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    setPersonsToShow(
      persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [persons, filter]);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkPerson = persons.find((person) => person.name === newName);
    if (checkPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = { name: newName, number: newNumber,id: "4" };
      const newPersons = persons.concat(personObject);
      setPersons(newPersons);

      axios.post('http://localhost:3001/persons',personObject).then(response => {
        console.log('response',response);
      })

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
