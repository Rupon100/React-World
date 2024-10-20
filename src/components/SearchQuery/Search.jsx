import { useEffect, useState } from "react";

 

const Search = ( countries ) => {
    //console.log(countries)
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountry, setfilteredCountry] = useState([]);

    

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = countries.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
        setfilteredCountry(filtered);
    }

    return (
        <div>
            <input 
               className='search' 
               type="text" 
               placeholder='Enter any search'
               onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;