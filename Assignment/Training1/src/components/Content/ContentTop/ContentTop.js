import React from "react";
import ItemLocation from "../../../custom-fields/ItemLocation/ItemLocation";
import './ContentTop.css';
import HoChiMinh from "../../../assets/images/HoChiMinh.jpg";
import NhaTrang from "../../../assets/images/NhaTrang.jpg";
import VungTau from "../../../assets/images/VungTau.png";
import PhuQuoc from "../../../assets/images/PhuQuoc.png";
import CanTho from "../../../assets/images/CanTho.png";
import TuyHoa from "../../../assets/images/TuyHoa.jpg";
import BienHoa from "../../../assets/images/BienHoa.png";
import ThuanAn from "../../../assets/images/ThuanAn.jpg";

const ContentTop = () =>
{
    return (

        <div>

            <div class="contentTop--container">
                <div class="item--Content">
                    <ItemLocation srcImg = {HoChiMinh} city={"Ho Chi Minh City"} time={"6 hour"} />
                </div>
                <div class="item--Content">
                    <ItemLocation  srcImg = {NhaTrang} city={"Nha Trang "} time={"6.5 hour"} />
                </div>
                <div class="item--Content item1">
                    <ItemLocation  srcImg = {VungTau} city={"Vung Tau City"} time={"2 hour"} />
                </div>
            
                <div class="item--Content item2">
                    <ItemLocation  srcImg = {PhuQuoc} city={"Phu Quoc"} time={""} />

                </div>
            </div>
            
            <div class="contentTop--container">
                <div class="item--Content">
                    <ItemLocation  srcImg = {CanTho} city={"Can Tho City"} time={"3 hour"} />

                </div>
                <div class="item--Content">
                    <ItemLocation  srcImg = {TuyHoa} city={"Tuy Hòa"} time={"7.5 hour"} />

                </div>
                <div class="item--Content item1">
                <ItemLocation  srcImg = {BienHoa} city={"Bien Hoa City"} time={"4.5 minute"} />

                </div>
                <div class="item--Content item2">

                    <ItemLocation  srcImg = {ThuanAn} city={"Thuan An Town"} time={"30 minute"} />
                </div>
            
            </div>
        </div>
    );
}

export default ContentTop;