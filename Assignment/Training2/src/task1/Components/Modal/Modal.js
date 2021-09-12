import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalElement = document.getElementById('root');

export function Modal({children, fade = false, defaultOpen = false}, ref) {

    const [isOpen, setIsOpen] = useState(defaultOpen);

    const close = useCallback(() => setIsOpen(false),[]);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close
    }), [close]);


    const handleEscape = useCallback( event => {
        if(event.keyCode === 27) close()
    },[])


    useEffect(() => {
        if(isOpen) document.addEventListener('keydown', handleEscape, false);
        return () =>{
            document.removeEventListener('keydown', handleEscape, false);
        }
    }, [handleEscape, isOpen]);


    return createPortal(
        isOpen ? (
            <div className={`modal ${fade ? 'modal-fade' : ''}`}>
            <div className="modal-overlay" onClick={close} />
            <span role="button" className="modal-close" aria-label="close" onClick={close}>
              x
            </span>
            <div className="modal-body">{children}</div>
          </div>
        ) : null,
        modalElement
    );

}

export default forwardRef(Modal);