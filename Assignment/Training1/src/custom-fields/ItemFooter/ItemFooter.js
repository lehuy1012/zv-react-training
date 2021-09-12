import React from "react";
import PropTypes from "prop-types";
import './ItemFooter.css';

ItemFooter.PropTypes = {
    textTop: PropTypes.string,
    textBot: PropTypes.string,
}

ItemFooter.defaultProps = {
    textTop: "",
    textBot: "",
}


function ItemFooter(props) {
    const {textTop, textBot} = props;
    return (
        <div className="ItemFooter">
            <p class="ItemFooter--top">{textTop}</p>
            <p class="ItemFooter--bot">{textBot}</p>
        </div>
    );
}

export default ItemFooter;