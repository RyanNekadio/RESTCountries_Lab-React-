
const AllCountries = ( {countries}) => {

    return (
        <div>
            <h1>All Countries</h1>
            <ul class='allCountriesList'>
                {countries.map((country) => (
                    <li key={country.id}>
                        {country.name.common}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllCountries;