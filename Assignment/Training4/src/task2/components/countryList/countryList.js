import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './countryList.css';

CountryList.propTypes = {
    countrys: PropTypes.array 
}

CountryList.defaultProps = {
    countrys: []
}


function CountryList(props){

    const {countrys} = props;

    console.log('list country ', countrys);
    return (

        <div className="container--countrys">
            <ul>
                {
                countrys.map(country => (
                    <li className="country" key={country.id}>{country.name}</li>
                ))}
            </ul>
        </div>
    );

}

export default CountryList;