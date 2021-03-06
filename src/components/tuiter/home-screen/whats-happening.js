import React, {useState} from "react";
import {useDispatch} from "react-redux";
import './index.css';
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    return (
        <>
            <div className="d-flex flex-row justify-content-around">
                <img src="../../../images/elmo.jpg" className="wd-avatar-image"/>
                <textarea
                    className="wd-text-box col-11"
                    placeholder={"What's happening?"}
                    value={whatsHappening}
                    onChange={(e) => {
                        setWhatsHappening(e.target.value)
                        setNewTuit({...newTuit,
                            tuit: e.target.value})}}>
                </textarea>
            </div><br/>

            <div className="d-flex justify-content-between">
                <span className='wd-icons'>
                    <i className="fas fa-image pe-2"></i>
                    <i className="fas fa-chart-line pe-2"></i>
                    <i className="fas fa-smile pe-2"></i>
                    <i className="fas fa-calendar"></i>
                </span>

                <button className="btn btn-block btn-primary rounded-pill" onClick={() =>
                    createTuit(dispatch, newTuit)}>
                    Tuit
                </button>
            </div><br/>
        </>
    );
}
export default WhatsHappening;