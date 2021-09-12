import React from 'react';
import ContentTop from "./ContentTop/ContentTop";
import ContentBottom from "./ContentBottom/ContentBot-Top";
import ContentBotBot from "./ContentBottom/ContentBot-Bot";
import './Content.css';

const Content = () => {

    return (

        <div class="Content--container">

            <h3 class="text-live">Explore nearby</h3>
            <div class="ContentTop">

                <ContentTop />
            </div>

            <div class="top-content">

                <p class="text-live">Live anywhere</p>

                <div class="Content--Bottom">

                    <ContentBottom />
                </div>

            </div>

            <div class="middle-content">
                <div class="middle-content--info">
                    <h1 class="middle-content--info--top">Try hosting</h1>
                    <h5 class="middle-content--info--bot">Earn extra income and unlock new opportunities by sharing your space</h5>
                    <button class="middle-content--info--btn">Learn more</button>
                </div>
            </div>

            <div class="bot-content">

                <p class="text-live">Discover things to do</p>

                <div class="Content--Bottom">
                    <ContentBotBot />
                </div>

            </div>

        </div>
    );
}

export default Content;