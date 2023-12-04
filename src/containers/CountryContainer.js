import AllCountries from "../components/AllCountries";
import VisitedCountries from "../components/VisitedCountries";
import { useState, useEffect } from 'react';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

      

    return (
        <div className="countries"> 
            <AllCountries countries={countries}/>
            <VisitedCountries
            />
        </div>
    );
};

export default CountryContainer;
