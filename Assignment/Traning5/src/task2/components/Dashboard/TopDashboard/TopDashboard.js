import React, {useState} from 'react';
import logoZigvy from '../../../assets/logo/logo_zigvy.png';
import ModalUser from "../../Modal/ModalUser/ModalUser"
import './TopDashboard.css';


const TopDashboard = () =>
{
    const [modalUser, setModalUser] = useState(false);

    const userLogged = localStorage.getItem('token');

    const handleModalUser = () => {
        setModalUser(prevSate => {return !prevSate});
    }

    return (
        <div className="TopDashboard--container">
            <img src={logoZigvy}/>
            <div>
                <div className="TopDashboard--btn--container">

                    <button className="btn--info--user" onClick= {() => handleModalUser()}>{userLogged[0]}</button>
                </div>
                <ModalUser modalUser={modalUser} setModalUser={setModalUser}/>
            </div>

        </div>
    );
}

export default TopDashboard;
