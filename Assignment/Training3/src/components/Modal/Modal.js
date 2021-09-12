import React, {useState, useEffect, useCallback, forwardRef, useImperativeHandle, useMemo} from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { createPortal } from 'react-dom';


const modalElement = document.getElementById('root');

function Modal({children, fade = false, defaultOpen = false}, ref) {

    const [isOpen, setIsOpen] = useState(defaultOpen);

    const keyPressListener = ({ code }) => {
        console.log('key press:', code);
    };

    const handleKeyDown = useMemo(() => keyPressListener, []);

    useEffect(() => {

        if(isOpen === true) {
            window.addEventListener('keydown', handleKeyDown);
        }
        else
        {
            window.removeEventListener('keydown', handleKeyDown);
        }

    },[isOpen], [handleKeyDown])


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