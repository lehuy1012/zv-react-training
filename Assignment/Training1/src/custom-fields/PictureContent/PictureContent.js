import React from 'react';
import PropTypes from 'prop-types';
import './PictureContent.css';


PictureContent.propTypes = {
    widthProp: PropTypes.string,
    heightProp: PropTypes.string,
    srcImg: PropTypes.string,
    contentImgTop: PropTypes.string,
    contentImgBot: PropTypes.string,
}

PictureContent.Default = {
    widthProp: '',
    heightProp: '',
    srcImg: '',
    contentImgTop: '',
    contentImgBot: '',
}

function PictureContent(props) {

    const {srcImg, contentImgTop, contentImgBot} = props;

        return (

            <div class="PictureContent">
                <img  class = "imgContent"  src ={srcImg} />
                <p class="text__img--top" >{contentImgTop}</p>
                <p class="text__img--bot">{contentImgBot}</p>
            </div>
        );
}

export default PictureContent;