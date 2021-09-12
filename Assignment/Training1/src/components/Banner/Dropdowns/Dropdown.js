import React from 'react';
import './Dropdown.css';
import searchItem from "../../../assets/images/search.png";

const Dropdown = () => {
    return(
        <div class="container--dropdown">
            <div class="dropdown--item">
                <p class="dropdown--item--top" >Location</p>
                <p class="dropdown--item--bot">Where are you going?</p> 
            </div> 
                <div class="line"></div>
            <div class="dropdown--item">
                <p class="dropdown--item--top">Check in</p>
                <p class="dropdown--item--bot">Add dates</p>
            </div>
            <div class="line"></div>
            <div class="dropdown--item">
                <p class="dropdown--item--top">Check out</p>
                <p class="dropdown--item--bot">Add dates</p>
            </div>
            <div class="line"></div>
            <div class="dropdown--item">
                <p class="dropdown--item--top">Guests</p>
                <p class="dropdown--item--bot">Add Guests</p>
            </div>
            <div class="search--item">
                <img class="icon--search" src ={searchItem} />
            </div>
        </div>
    );
}

export default Dropdown;