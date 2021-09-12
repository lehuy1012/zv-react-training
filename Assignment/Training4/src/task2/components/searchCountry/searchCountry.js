import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UseDebounce from '../Debounce/Debounce';
import './searchCountry.css';



SearchCountry.propTypes = {
    onSubmit: PropTypes.func,
}

SearchCountry.defaultProps = {
    onSubmit: null,
}


function SearchCountry(props) {


    const [valueSearch, setValueSearch] = useState('');

    const debouncedSearchTerm = UseDebounce(valueSearch, 1000);

    console.log('value search debounce : ', debouncedSearchTerm);

   
    return (
        <form>
            <div className="container-task1">
                <div className="container--input--search--country">
                    <input type="text" value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} className="input--search--country"/>
                </div>
            </div>
        
        </form>

    );

}

export default SearchCountry;