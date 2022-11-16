import { useContext, useState, useRef, useEffect } from "react";

import { GameDataContext } from "../../GameData";

import './stepMapDisplay.scss';

export const StepMapDisplay = () => {

    const {stepMap, loadGameByStep} = useContext(GameDataContext);

    const [warningWindow, setWarningWindow] = useState(false);

    const loadStep = (index) => {
        loadGameByStep(index);
        setWarningWindow(false);
    } 

    const lastStep = useRef(null);

    useEffect(() => {
        executeScroll();
    }, [stepMap]);

    const executeScroll = () => {
        if(!lastStep.current) return;
        lastStep.current.scrollIntoView({ behavior: 'smooth' }); 
    }

    // confirmation menu for choosing to load a saved game from a step
    const warningMessage = (
            <div className="warning-stepmap-window">
                <span className="warning-text">You want load {+warningWindow+1} step? All your progress after {+warningWindow+1} step will be lost! </span>
                <div className="buttons-menu">
                    <button className="menu-button conf" onClick={() => {loadStep(warningWindow)}}>YES</button>
                    <button className="menu-button conf" onClick={() => setWarningWindow(false)}>NO</button>
                </div>
            </div>
    )

    // creates buttons for every step user makes in game
    // 'now' buttons its dummy with ref, to keep the last steps in sight
    const showMap = stepMap.map((step, i) => {
        if(stepMap.length !== i + 1) {
            return <button className="map-button step-button" key={i} onClick={() => {setWarningWindow(String(i))}} >{i+1}</button>
        } else {
            return <button className="map-button disabled" key={i} ref={lastStep}>Now</button>
        }
    })

    return(
        <>
            <div className="stepmap-wrapper">
                <div className="stepmap-text">
                    <span>Step counter : </span>
                </div>
                <div className="stepmap-buttons-wrapper">
                    {warningWindow ? warningMessage : showMap}

                </div>
            </div>
        </>
    )
}
