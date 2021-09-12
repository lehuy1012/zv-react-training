import React, { useEffect, useRef, useState } from 'react';
import SearchCountry from '../../components/searchCountry/searchCountry';
import CountryList from '../../components/countryList/countryList';

function Task2() {
    const [filter, setFilter] = useState('');
    const [listCountry, setListCountry] = useState([]);

    useEffect(() => {
        async function fetchData()
        {
            try{
                const requestUrl = `https://restcountries.eu/rest/v2/name/${filter}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log('get data:', responseJSON);
                setListCountry(responseJSON);
                
            }
            catch(error)
            {

            }
        }
        fetchData();
    }, [filter]);

    const handleSubmit = (newFilter) => {
        setFilter(newFilter.search);
    }

    return (
        
        <div>
            <SearchCountry onSubmit={handleSubmit}/>
            <CountryList countrys={listCountry}/>
        </div>

    );
}

export default Task2;