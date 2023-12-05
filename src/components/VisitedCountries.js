
const VisitedCountries = ({ countries, unmarkAsVisited }) => {

  return (
    <div>
      <h2>Visited Countries</h2>
      <ul class='visitedCountries'>
        {countries.map(country => (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => unmarkAsVisited(country)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitedCountries;
