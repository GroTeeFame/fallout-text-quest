import { useContext, useEffect, useState } from "react";

import { GameDataContext } from "../../GameData";
 
import './menuDisplay.scss';

//  creates and displays main menu buttons
export const MenuDisplay = ({startGame, }) => {

    const { saveGameData, loadGameData, deleteSave,} = useContext(GameDataContext);

    const [warningMenu, setWarningMenu] = useState();

    const save = () => {
        saveGameData();
        setWarningMenu();
    }
    
    const load = () => {
        loadGameData();
        setWarningMenu();
    }

    const start = () => {
        startGame();
        setWarningMenu();
    }
    
    const del = () => {
        deleteSave();
        setWarningMenu();
    }

    // confirmation menu of the pressed button
    const warningMenuWindow = (
        <div className="warning-buttons-menu">
            {warningMenu === 'save' ? <span className="warning-text">Do you want to save the game?</span> : null}
            {warningMenu === 'load' ? <span className="warning-text">Do you want to load the game? All unsaved progress will be lost!</span> : null}
            {warningMenu === 'start' ? <span className="warning-text">Do you want to start new game? All progress will be lost!</span> : null}
            {warningMenu === 'del' ? <span className="warning-text">Do you want to delete game save? All saved progress will be lost!</span> : null}
            <div className="buttons-menu">
                {warningMenu === 'start' ? <button className="menu-button conf" onClick={start}>YES</button> : null}
                {warningMenu === 'save' ? <button className="menu-button conf" onClick={save}>YES</button> : null}
                {warningMenu === 'load' ? <button className="menu-button conf" onClick={load}>YES</button> : null}
                {warningMenu === 'del' ? <button className="menu-button conf" onClick={del}>YES</button> : null}
                <button className="menu-button conf" onClick={() => setWarningMenu()}>NO</button>
            </div>
        </div>
    )

    // main menu buttons bar
    const menuWindow = (
        <div className="buttons-menu">
            <button className="menu-button main-button" onClick={() => setWarningMenu('start')}>
                <span className="menu-button-hover-icon">&gt;</span>
                <span className="menu-button-option-text">START NEW GAME</span>
            </button>
            <button className="menu-button main-button" onClick={() => setWarningMenu('save')}>
                <span className="menu-button-hover-icon">&gt;</span>
                <span className="menu-button-option-text">SAVE GAME</span>
            </button>
            <button className="menu-button main-button" onClick={() => setWarningMenu('load')}>
                <span className="menu-button-hover-icon">&gt;</span>
                <span className="menu-button-option-text">LOAD GAME</span>
            </button>
            {/* <button className="menu-button main-button" onClick={() => setWarningMenu('del')}>
                <span className="menu-button-hover-icon">&gt;</span>
                <span className="menu-button-option-text">DELETE SAVE</span>
            </button> */}
        </div>
    )

    return(
        <div className="buttons-menu-wrapper">
            {warningMenu ? warningMenuWindow : menuWindow}
        </div>
    )
}
