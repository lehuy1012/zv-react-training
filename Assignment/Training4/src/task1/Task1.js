import React, { useEffect, useRef, useState } from 'react';
import UseDebounce from '../task2/components/Debounce/Debounce';
import axios from 'axios';
import './Task1.css';



function Task1() {

    const typingTimeoutRef = useRef(null);
    const [clicked, setClicked] = useState();
    const [jokes, setJokes] = useState([]);


    const getClickedDebounce = UseDebounce(clicked, 1000);

    useEffect(() => {
        
        async function fetchData()
        {
            try{
                const requestUrl = `https://github.com/15Dkatz/official_joke_api`;
                const response = await axios(requestUrl);
                const responseJSON = await response.json();
                setJokes(responseJSON);    
            }
            catch(error)
            {
                console.log(error);
            }
        }
        fetchData();
    }, [getClickedDebounce]);

    return (
        <div className="container-task1">
            <div className="container--btn--get--joke">
                <button onClick={(e) => setClicked(e)} className="btn--get--joke">Get more joke</button>
            </div>
        </div>
    );

}

export default Task1;