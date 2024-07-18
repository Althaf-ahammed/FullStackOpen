import { useEffect, useState } from "react";
import countriesService from "./services/countries";

function App() {
  const [newCountry, setNewCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((response) => setAllCountries(response));
  }, []);

  useEffect(() => {
    if (newCountry.trim() === "") {
      setCountriesToShow([]);
    } else {
      const filteredCountry = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(newCountry.toLowerCase())
      );
      setCountriesToShow(filteredCountry);
    }
  }, [newCountry, allCountries]);

  const handleCountryChange = (e) => {
    setNewCountry(e.target.value);
  };
  console.log(countriesToShow);
  return (
    <div>
      find countries <input value={newCountry} onChange={handleCountryChange} />
      {countriesToShow.length > 10 ? (
        <p>Too many matches, Specify another filter</p>
      ) : (
        countriesToShow.map((country) => {
          if (countriesToShow.length === 1) {
            const values = Object.values(country.languages);
            return (
              <div key={country.fifa}>
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
          } else {
            return <p key={country.fifa}>{country.name.common}</p>;
          }
        })
      )}
    </div>
  );
}

export default App;
