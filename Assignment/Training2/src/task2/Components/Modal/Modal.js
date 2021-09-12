import React, { Component } from 'react';
import './Modal.css';

function Modal({open, setOpen}) {

    function onClose(e){
        setOpen(false);     
    };

    return (<>{
        open ? 
        <div>
            <section className="modal-container" id="modal">
                <div className="modal-content">
                    <h1 style={{textAlign: 'center'}}>Notify Me</h1>
                    <div className="modal__btnClose">

                        <button onClick={onClose}>Close Modal</button>
                    </div>
                </div>
         </section>

        </div> : null
    }</>);

}

export default Modal;