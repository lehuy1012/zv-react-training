import React, {useRef, useState} from 'react';
import Modal from '../../../components/Modal/Modal';
import './Home.css';


const Home = () => {

    const [valueEventInput, setValueEventInput] = useState('');
    const [eventLister, setEventListener] = useState(false);

    const handlerListener = () =>
    {
        setEventListener(listener => {return !listener});
    }

    console.log("print value of event ", eventLister);

    const modal = useRef(null);

    return ( 
                
        <div  className="container--btn--open--modal">
            <div className="text--header">Training3</div>
            <div className = "btn--open__modal" >
            <button className="btn--open--modal" onClick={() => {modal.current.open()} }>
                Open Modal
            </button>
            </div>
            <Modal ref={modal}>
                <div className="modal--container">
                    <input  type="text"  />
                </div>
            </Modal>
            
        </div>
    );
}

export default Home;