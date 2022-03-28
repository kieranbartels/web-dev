import React, {useState} from "react";
import {useDispatch}
    from "react-redux";
import './index.css';

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <span>
                <img src="../../../images/elmo.jpg" className="wd-avatar-image"/>
                <textarea value={whatsHappening}
                          onChange={(event) =>
                              setWhatsHappening(event.target.value)}
                          className="wd-text-box col-11">
                </textarea>
            </span>

            <span className='wd-icons'>
                <i className="fas fa-image pe-2"></i>
                <i className="fas fa-chart-line pe-2"></i>
                <i className="fas fa-smile pe-2"></i>
                <i className="fas fa-calendar"></i>
            </span>

            <button onClick={tuitClickHandler} className="btn btn-primary btn-block rounded-pill">
                Tuit
            </button>
        </>
    );
}
export default WhatsHappening;