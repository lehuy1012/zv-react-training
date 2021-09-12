import React from "react";
import ItemFooter from "../../custom-fields/ItemFooter/ItemFooter";
import './Footer.css';


const Footer = () => {

    return (
        <div className="Footer--container">
            <h3 style={{fontSize: "30px", "margin-bottom": "0px" }}>Inspiration for future getaways</h3>
            <div class="text-top">
                <a style={{ "margin-top": "10px", "cursor": "pointer"}}>Destinations for arts & culture</a>
                <a class="text-top-item">Destinations for outdoor adventure</a>
                <a class="text-top-item">Mountain cabins</a>
                <a class="text-top-item">Beach destinations</a>
                <a class="text-top-item">Popular destinations</a>
                <a class="text-top-item">Unique Stays</a>
            </div>
        </div>
    );
}


export default Footer;
