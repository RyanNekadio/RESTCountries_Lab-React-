
const AllCountries = ({ countries, markAsVisited }) => {

  return (
    <div>
      <h2>All Countries</h2>
      <ul class='allCountries'>
        {countries.map(country => (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => markAsVisited(country)}>Visited</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCountries;
