import React from "react";
import PropTypes from 'prop-types';
import './ModalUser.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

ModalUser.propTypes = {
    modalUser: PropTypes.bool
}

ModalUser.defaultProps = {
    modalUser: false,
}

function ModalUser({modalUser, setModalUser}) {

    console.log('modal user : ', modalUser);
    const email = useSelector((state) => state.loginInfo.email);
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        history.push('/login');
    }

    if(modalUser)
    {
        return (

            <div className="modal--user--container">
                
                <h4>{email}</h4>
                <button onClick={() => handleLogout()}>Logout</button>
            
            </div>
        );
    }
    else
    {
        return null;
    }

    
}


export default ModalUser;