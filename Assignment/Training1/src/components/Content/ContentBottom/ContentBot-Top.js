import React from "react";
import './ContentBot-Top.css';
import PictureContent from "../../../custom-fields/PictureContent/PictureContent";
import Live1 from "../../../assets/images/Live1.jpg";
import Live2 from "../../../assets/images/Live2.jpg";
import Live3 from "../../../assets/images/Live3.jpg";
import Live4 from "../../../assets/images/Live4.jpg";


const ContentBotTop = () =>
{
    return (

        <div class = "content--bottom">
            <div>

                <PictureContent  class = "content--bottom--live" srcImg={Live1} contentImgTop="Outdoor Getaways"/>
            </div>
            <div style={{width:"30px"}}></div>
            <div>

                <PictureContent class = "content--bottom--live" srcImg={Live2} contentImgTop="Unique stays"/>
            </div>
            <div style={{width:"30px"}}></div>
            <div>

                <PictureContent class = "content--bottom--live" srcImg={Live3} contentImgTop="Entire homes"/>
            </div>
            <div style={{width:"30px"}}></div>
            <div class="Live4 content--bottom--live">

                <PictureContent srcImg={Live4} contentImgTop="Pets allowed"/>
            </div>

        </div>

    );
}

export default ContentBotTop;