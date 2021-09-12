import React, { useRef } from 'react';
import './HomeModal.css';
import Modal from '../Components/Modal/Modal';

function HomeModal1(e){

    const modal = useRef(null);
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Modal</h1>
            <div className = "btn--open__modal" >
                <button  onClick={() => modal.current.open()}>
                    Open Modal
                </button>
            </div>
            <Modal ref={modal}>
                Hello World
            </Modal>
           

        </div>
    );
        
    
}

export default HomeModal1;