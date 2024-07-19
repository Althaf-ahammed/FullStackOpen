function ShowCountry({country}) {
    const values = Object.values(country.languages);
  return (
    <div >
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>Languages: </h3>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <img alt={country.flags.alt} src={country.flags.png}></img>
    </div>
  );
}

export default ShowCountry;
