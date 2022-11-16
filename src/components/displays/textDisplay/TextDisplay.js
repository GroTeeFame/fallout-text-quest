import {useEffect, useContext, useRef } from "react";

import { GameDataContext } from "../../GameData";

import './textDisplay.scss';

// creates and show text messages
export const TextDisplay = ({text}) => {

    const {messages, setMessages} = useContext(GameDataContext);

    const endChat = useRef(null);

    useEffect(() => {
        updateMessages(text);
    }, [text]);

    useEffect(() => {
        if(endChat) executeScroll();
    }, [messages]);

    const executeScroll = () => {
        if(!endChat.current) return;
        endChat.current.scrollIntoView(); 
    }

    const updateMessages = (text) => {
        if(messages[messages.length - 1] !== text){
            setMessages(messages => [...messages, text]);
        }
    }

    const messageSheet = messages.map((message, i) => {
        return <span className="textdisplay-message" key={i}>{message}</span>
    }); 

    return(
        <div className="textdisplay-wrapper">
            {messageSheet}
            {/* dummy element to keep the last message in sight */}
            <div className="dummy" ref={endChat}></div>
        </div>
    )
}