import { useContext } from "react";

import { GameDataContext } from "../../GameData";

import './optionDisplay.scss';
 
export const OptionDisplay = ({showTextNode}) => {

    const {showOptions, inventory, setInventory, setMessages} = useContext(GameDataContext);

    // checks if dialog otion can be displayed
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


    const optionSetInventory = (option) => {
        let obj = {};
        option.forEach((item, i) => {
            obj[item[0]] = JSON.parse(item[1]);
        });
        setInventory(inventory => ({...inventory, ...obj}));
    };


    const displayMessage = (option) => {
        setMessages(messages => [...messages, option.afterText]);
        optionSetInventory(option.setInventory);
    }

    // generates buttons for options
    let displayOptions = showOptions.map((option, i) => {
        if( option.afterText ){
            return optionVisible(option.visible) ? 
            <button className="option-button" key={i} onClick={() => displayMessage(option)}>
                <span className="hover-icon">&gt;</span>
                <span className="option-text">{option.text}</span>
                <span className="option-icon">&#129779;</span>
            </button> 
            : null;
        }
        return <button className="option-button" key={i} onClick={() => showTextNode(option.nextText)}>
                    <span className="hover-icon">&gt;</span>
                    <span className="option-text">{option.text}</span>
                    <span className="option-icon">&#128099;</span>
                </button> 

    });

    return (  
        <div className="option-buttons-wrapper">
            {displayOptions}
        </div>
    )
}

