import { useEffect, useState } from "react";
import countriesService from "./services/countries";
import ShowCountry from "./ShowCountry";
import WeatherCard from "./WeatherCard";

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

  const handleShowClick = (countryName) => {
    const filteredCountry = allCountries.filter(
      (country) => country.name.common === countryName
    );
    setCountriesToShow(filteredCountry);
  };

  return (
    <div>
      find countries <input value={newCountry} onChange={handleCountryChange} />
      {countriesToShow.length > 10 ? (
        <p>Too many matches, Specify another filter</p>
      ) : (
        countriesToShow.map((country) => {
          if (countriesToShow.length === 1) {
            return (
              <div key={country.fifa}>
                <ShowCountry country={country} />
                <WeatherCard country={country} />
              </div>
            );
          } else {
            return (
              <p key={country.fifa}>
                {country.name.common}{" "}
                <button
                  onClick={() => {
                    handleShowClick(country.name.common);
                  }}
                >
                  show
                </button>
              </p>
            );
          }
        })
      )}
    </div>
  );
}

export default App;
