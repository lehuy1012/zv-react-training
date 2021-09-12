import React from "react";
import './ContentBot-Bot.css';
import PictureContent from "../../../custom-fields/PictureContent/PictureContent";
import Discover1 from "../../../assets/images/Discover1.jpg";
import Discover2 from "../../../assets/images/Discover2.jpg";
import Discover3 from "../../../assets/images/Discover3.jpg";



const ContentBotBot = () =>
{
    return (

        <div class = "content--bot--bot">
            <PictureContent  class = "content--bottom--discover" srcImg={Discover1} contentImgTop="Experiences" contentImgBot="Find unforgettable activities near you."/>
            <div style={{width:"30px"}}></div>
            <PictureContent class = "content--bottom--discover" srcImg={Discover2} contentImgTop="Online Experiences" contentImgBot="Live, interactive activities led by Hosts."/>
            <div style={{width:"30px"}}></div>
            <PictureContent class = "content--bottom--discover" srcImg={Discover3} contentImgTop="Olympians & Paralympians" contentImgBot="Online activities hosted by athletes."/>

        </div>

    );
}

export default ContentBotBot;