import React, { useEffect, useState } from 'react';
import './CountDown.css';


function CountDown({number}) {
    const [numberCount, setNumberCount] = useState(0);
    const [loop, setLoop] = useState();
    let interval;

    useEffect(() => {
        setNumberCount(number);
    }, [number]);

    useEffect(() => {

        if(numberCount === 0) {
            clearInterval(interval);
        }
        else
        {
            interval  = setInterval(() =>{
                setNumberCount((number) => { return number - 1 });   
            }, 1000);

        }
        
        return () => {
            clearInterval(interval);
        }

    }, [numberCount]);



    const handleStopCount = () => {
        clearInterval(interval);
    }

    const handlePlayCount = () => {
        
        interval = setInterval(() =>{
                setNumberCount((countDown) => { return countDown - 1 });   
        }, 1000)
        
    }

    

    return (

        <div className="container--count">
            <h1 className="count--down">{numberCount}</h1>
            <button className="stop--countDown" type="submit" onClick={() => handleStopCount()} >Stop</button>
            <button className="stop--countDown" type="submit" onClick={() => handlePlayCount()} >Play</button>
        </div>

    );
}

export default CountDown;