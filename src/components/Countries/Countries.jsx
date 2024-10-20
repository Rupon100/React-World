import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
 

const Countries = () => {
    const [countries, setCountry] = useState([]);
    const [visitCountries, setVisitedCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountry, setfilteredCountry] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            setCountry(data)
            setfilteredCountry(data)
        })
    }, [])

    const hnadleVisitedCountries = (countries) => {
        const newVisitedCountries = [...visitCountries, countries]
        setVisitedCountries(newVisitedCountries)
    }

    const handleSearch = (query) => { 
        setSearchQuery(query);
        if(query === ''){
            setCountry(filteredCountry);
        }else {
            const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
            setCountry(filtered);
        }
    }
   
    return (
        <div>
            <div className='searchBox'>
               <h3>Total {countries.length} Country.</h3>
               
               <input 
                 className='search' 
                 type="text" 
                 placeholder='Find your country'
                 onChange={(e) => handleSearch(e.target.value)}
              />

              <button>See All</button>
            </div>

            <div className='visitedCountry '>
              <h5>Visited COuntry</h5>
              <ol>
                 {
                    visitCountries.map(country => <li>{country.name.common}</li>)
                 }
              </ol>
            </div>
            <div className='countries'>
               {
                 countries.map(country => <Country key={country.cca3} country={country} hnadleVisitedCountries={hnadleVisitedCountries} ></Country>)
               }
            </div>

        </div>
    );
};

export default Countries;