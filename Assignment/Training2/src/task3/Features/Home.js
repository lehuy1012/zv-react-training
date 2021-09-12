import React, { useState, useEffect } from 'react';
import CountDown from '../components/countDown/CountDown';
import InputNumber from '../components/inputNumber/InputNumber';
import './Home.css';




function HomeTask3()
{
   
    const [number, setNumber] = useState(0);

    return (
        <div className="container">
           <InputNumber setNumber={setNumber} />
            <CountDown number={number}/>
            
        </div>
    );
}

export default HomeTask3;