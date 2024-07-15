import { useEffect, useState } from "react";
import Filter from "./Filter";
import AddPeople from "./AddPeople";
import ShowPeople from "./ShowPeople";
import phonebookServices from './services/phonebooks'
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    phonebookServices.getAll()
    .then(books => setPersons( books))
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
      if (window.confirm(`${checkPerson.name} is already added to phonebook, replace the old number with a new one`)) {
        const updatedPerson = { ...checkPerson, number: newNumber }
        phonebookServices.numberUpdate(checkPerson.id, updatedPerson)
        .then(updatedPersonData => {
          setPersons(persons.map(person => person.id !== checkPerson.id ? person : updatedPersonData));
          setPersonsToShow(
            persons.map(person => person.id !== checkPerson.id ? person : updatedPersonData)
              .filter(person =>
                person.name.toLowerCase().includes(filter.toLowerCase())
              )
          );
          setNewName("");
          setNewNumber("");
          setMessage(
            `Changed number of ${checkPerson.name}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }

    } else {
      const personObject = { name: newName, number: newNumber };
      const newPersons = persons.concat(personObject);
      setPersons(newPersons);
      phonebookServices.create(personObject)
      .then(() => {setMessage(
        `Added ${personObject.name}`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)} )

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

  const handleDelete = (id,name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      phonebookServices.remove(id)
        .then(() => {
          const newPersons = persons.filter(person => person.id !== id);
          setPersons(newPersons);

          const filteredPersons = newPersons.filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          );

          setPersonsToShow(filteredPersons);
        });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
      <ShowPeople personsToShow={personsToShow} handleDelete={handleDelete} /> 
    </div>
  );
};

export default App;
