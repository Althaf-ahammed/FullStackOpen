function AddPeople({
  handleSubmit,
  newName,
  handleChange,
  newNumber,
  handleNumberChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleChange} />
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default AddPeople;
