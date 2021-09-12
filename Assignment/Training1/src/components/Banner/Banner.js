import React from "react";
import './Banner.css';
import Dropdown from "./Dropdowns/Dropdown";

const Banner = () => {

    return (
        <div class= "banner--container">
            
            <div class="dropdown"><Dropdown /></div>
            <h6 class="text-align">Not sure where to go? Perfect.</h6>
            <button class="btn">I'm Flexible</button>
        </div>
    );
}

export default Banner;