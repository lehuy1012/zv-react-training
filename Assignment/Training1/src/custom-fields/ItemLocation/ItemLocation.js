import React from "react";
import './ItemLocation.css';
import PropTypes from 'prop-types';


ItemLocation.propTypes = {
    srcImg: PropTypes.string,
    city: PropTypes.string,
    time: PropTypes.string,
}

ItemLocation.defaultProps = {
    srcImg: '', 
    city: '', 
    time: '', 
}


function ItemLocation(props){

    const {srcImg, city, time} = props;
    return (
        <div class="ItemLocation">
            <img class="ItemLocation__img"  src={srcImg}/>
            <div class="itemLcation--info">
                <p class="info--city">{city}</p>
                <p class="info--time" >{time} drive</p>
            </div>
        </div>
    );
}


export default ItemLocation;