import React, {useState} from 'react';
import './InputNumber.css';


function InputNumber({setNumber})
{
    const [alert, setAlert] = useState('');
    const [inputNumber, setInputNumber] = useState('');

    const checkNumber = (input) =>
    {
        if(isNaN(input))return String;
        
        return Number;
    }

    const handleChangeNumber = (e) => {
        setInputNumber(e.target.value);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        
        if(inputNumber.length === 0) {
            setAlert("Please input a number!");
        }
        else
        {
            const type = checkNumber(inputNumber);

            if(type === Number) {
                if(inputNumber < 0)
                {
                    setAlert("Number must be greater than 0");
                }
                else
                {
                    setNumber(inputNumber);   
                    setInputNumber('');      
                } 
            }
            else
            {
                setAlert("invalid input. Must be a number!");
            }
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="container--input">
                <input className = "input--content" value={inputNumber} onChange={(e) => handleChangeNumber(e)} />
                <button className="submit--content" type="submit" >Start</button>
            </div>
            <div className="alert">
                {alert ? <p>{alert}</p> : null} 
            </div>
        </form>
    );
}

export default InputNumber;