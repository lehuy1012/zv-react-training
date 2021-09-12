import React from 'react';
import './NavigationBar.css';

const NavigationBar = () =>
{
    return (
        <div className="container--navigationBar">
            <div className="navigation--left">
                <img src="../../assets/icon/TodoIcon.png"/>
            </div>
            <div className="navigation--center">
                TODO
            </div>
            <div className="navigation--right">
                <div className="navigation--right--user"> 
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;