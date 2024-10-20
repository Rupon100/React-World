import React, { useState } from 'react';
import './Country.css'
 

const Country = ({country, hnadleVisitedCountries}) => {
    const {name, flags, capital,continents, cca3} = country;

    const [isVisited, setIsvisited] = useState(false);
 
    return (
        <div className={`country ${isVisited && 'visited'}`}>
            <img className='img' src={flags.svg} alt="flags" />
            <h4>Name: {name?.common}</h4>
            <h5>Capital: {capital}</h5>
            <p>Continents: {continents[0]}</p>
            <p><small>Code: {cca3}</small></p>
            <div className='btnBox'>
                <button onClick={() => hnadleVisitedCountries(country)}>Mark Visited</button>
                <button className={isVisited ? 'disabled' : 'enabled'} onClick={() => setIsvisited(!isVisited)}>
                    {
                        isVisited ? 'Visited' : 'Not Visited'
                    }
                </button>
            </div>
            <hr />
            
        </div>
    );
};

export default Country;