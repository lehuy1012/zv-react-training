import React, { useState } from 'react';
import './HomeModal.css';
import Modal from '../Components/Modal/Modal';

function HomeModal2(e){
    
    const [open, setOpen] = useState(false);

    function openModal(e){
        e.preventDefault();
        setOpen(!open);
        console.log(open);
    };
    
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Modal</h1>
            <div className = "btn--open__modal">
                <button  onClick={openModal}>
                    Open Modal
                </button>
            </div>
            <Modal open={open} setOpen={setOpen} />

        </div>
    );
}

export default HomeModal2;