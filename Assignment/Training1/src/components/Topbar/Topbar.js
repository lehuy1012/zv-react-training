import React from "react";
import './Topbar.css';
import Logo from "../../assets/Logo/Logo";
import earth from "../../assets/images/earth.png";
import menu from "../../assets/images/menu.png";
import user from "../../assets/images/user.svg";


const Topbar = () => {
    return(

       <div class="navbar-contain">

            <div  class="navbar--logo">
                <Logo/>
            </div>

            
            <div class="navbar--selector">
                <a class = "navbar--select" href="#">
                    Places to stay
                </a>
                <a class = "navbar--select" href="#">
                    Experiences
                </a >
                <a class = "navbar--select" href="#">
                    Online Experiences
                </a>
            </div>

            
            <div class = "navbar--about">
                <a class= "navbar--about__a" href="#">
                    Become a host
                </a>
                
                <img src = {earth} class="navbar--about__image"/>
                
                <div class="navbar--about--user">
                    <img src={menu} class="navbar--about__menu"/>
                    <img src = {user} class="navbar--about__user"/>
                </div>
            </div>



        </div>
    );
}



export default Topbar;