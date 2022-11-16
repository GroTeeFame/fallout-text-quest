import { useContext, useState, useEffect } from "react";

import { GameDataContext } from "../../GameData";

import './trapDisplay.scss';

// processes and displays trap from textNodes
export const TrapDisplay = () => {

    const {trap, setTrap} = useContext(GameDataContext);

    const {setRadiation,inventory, setInventory} = useContext(GameDataContext);

    const [trapMessage, setTrapMessage] = useState([]);

    const [displayOptions, setDisplayOptions] = useState([]);

    useEffect(() => {
        initialize();
    }, []);

    // checks if option can be displayed
    const optionVisible = (option) => {
        const res = option.map((item, i) => {
            for (const [key, value] of Object.entries(inventory)) {
                if (String(key) === item[0]){
                    if(String(value) === item[1]){
                        return true;
                    }
                    return false;
                }
            }
        });
        if(res.indexOf(false) >= 0) return false;
        return true;
    };

    // makes changes to the inventory
    const optionSetInventory = (option) => {
        let obj = {};
        option.forEach((item, i) => {
            obj[item[0]] = JSON.parse(item[1]);
        });
        setInventory(inventory => ({...inventory, ...obj}));
    };

    // shows consequence of user choices, and creates button to leave trap
    const displayMessage = (option) => {
        setDisplayOptions([<button className="option-button neutral" key={'close'} onClick={() => setTrap()}>
                                <span className="option-button-hover-icon">&gt;</span>
                                <span className="option-button-option-text">Close</span>
                                <span className="option-button-option-icon">&#128099;</span>
                            </button> ]);
        setTrapMessage(trapMessage => [...trapMessage, messageWrapper(option.afterText)]);
        if(option.setInventory) optionSetInventory(option.setInventory);
        if(option.setRadiation) setRadiation(radiation => radiation + option.setRadiation);
    }

    // shows trap message, creates options button
    const initialize = () => {
        setTrapMessage(trapMessage => [...trapMessage, messageWrapper(trap.text)]);

        let temp = trap.options.map((option, i) => {
            if( option.visible ){
                return optionVisible(option.visible) ? 
                <button className="option-button positive" key={i} onClick={() => displayMessage(option)}>
                    <span className="option-button-hover-icon">&gt;</span>
                    <span className="option-button-option-text">{option.text}</span>
                    <span className="option-button-option-icon">&#129779;</span>
                </button> 
                : null;
            }
            return <button className="option-button negative" key={i} onClick={() => displayMessage(option)}>
                        <span className="option-button-hover-icon">&gt;</span>
                        <span className="option-button-option-text">{option.text}</span>
                        <span className="option-button-option-icon">&#128511;</span>
                    </button> 
        });
        setDisplayOptions(temp);
    }

    const messageWrapper = (message) => {
        return <span className="warning-text">{message}</span>
    }

    return (
        <div className="trap-wrapper">
            <div className="trap-window">
                <span className="title">You got in trap</span>
                <span className="title">blest you saint ATOM</span>
                <div className="trap-message-window">    
                    {trapMessage}
                </div>
                {displayOptions}
            </div>
        </div>
    )
}
