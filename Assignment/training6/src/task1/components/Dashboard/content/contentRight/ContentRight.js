import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './ContentRight.css';




function ContentRight(Props) {

    const [info, setInfo] = useState('');

    useEffect(() =>{
        setInfo(Props.info);
    });

    console.log('in content right ', info);

    return (
        <div className="container--content--right">
            <h1>{info && info.email}</h1>
            <h1>{info && info.password}</h1>
        </div>
    );
}

export default ContentRight;