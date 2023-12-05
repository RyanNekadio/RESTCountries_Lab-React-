import { useState, useEffect } from 'react';
import AllCountries from "../components/AllCountries";
import VisitedCountries from "../components/VisitedCountries";

const CountriesContainer = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setAllCountries(data))
  }, []);

  const handleMarkAsVisited = (country) => {
    setAllCountries(allCountries.filter(countryName => countryName !== country));
    setVisitedCountries([...visitedCountries, country]);
  };

  const handleUnmarkAsVisited = (country) => {
    setVisitedCountries(visitedCountries.filter(countryName => countryName !== country));
    setAllCountries([...allCountries, country]);
  }

  return (
    <div class="countries">
      <AllCountries countries={allCountries} markAsVisited={handleMarkAsVisited}/>
      <VisitedCountries countries={visitedCountries} unmarkAsVisited={handleUnmarkAsVisited}/>
    </div>
  );
};

export default CountriesContainer;
