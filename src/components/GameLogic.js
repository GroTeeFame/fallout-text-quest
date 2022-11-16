import { useEffect, useContext } from 'react';
 
import { textNodes } from '../data/textNodes';
import { TextDisplay } from './displays/textDisplay/TextDisplay';
import { OptionDisplay } from './displays/optionDisplay/OptionDisplay';
import { InventoryDisplay } from './displays/inventoryDisplay/InventoryDisplay';
import { Player } from './Player';
import { RadiationDisplay } from './displays/radiationDisplay/RadiationDisplay';
import { LocationDisplay } from './displays/locationDisplay/LocationDisplay';
import { StepMapDisplay } from './displays/stepMapDisplay/StepMapDisplay';
import { GameDataContext } from './GameData';
import { TrapDisplay } from './displays/trapDisplay/TrapDisplay';
import { GameOverDisplay } from './displays/gameOverDisplay/GameOverDisplay';
import { MenuDisplay } from './displays/menuDisplay/MenuDisplay';

import './gameLogic.scss';

export const GameLogic = () => {
    
    const {
        inventory, 
        radiation, 
        resetGame,
        loadSessionGame,
        setStepMap,
        setMessages,
        gameOver, 
        setGameOver,
        trap, 
        setTrap,
        setLocation,
        showText, 
        setShowText,
        setShowOptions,
    } = useContext(GameDataContext);
    
    const {stillAlive, radPerMove} = Player()
    
    useEffect(() => {
        if (sessionStorage.getItem("gameSessionSave") === null){
            startGame();
        } else {
            loadSessionGame();
        }
    }, []);

    useEffect(() => {
        gameOverOverseer();
    }, [radiation, inventory]);

    console.log('%c RE-RENDER', 'color: red; font-size: 18px');

    const startGame = () => {
        resetGame();
        showTextNode(0);
    }

    // processes information from textNodes
    const showTextNode = (textNodeIndex) => {
        setShowOptions([]);
        const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);

        if(textNode.trap) {
            setTrap(textNode.trap);
        }

        if (textNode){
            if(textNode.welcome) setMessages(messages => [...messages, textNode.welcome]);
            setMessages(messages => [...messages, textNode.text]);

            setShowText(textNode.text);
            setLocation({
                id : textNode.id,
                location: textNode.location
            });
            setStepMap(stepMap => [...stepMap, [`id : ${textNode.id}`, `location : ${textNode.location}`]]);
            textNode.options.forEach(option => {
                setShowOptions(showOptions => [...showOptions, option]);
            })
            radPerMove(textNode.radiationLevel);
        }
    }

    // win\lose conditions
    const gameOverOverseer = () => {
        if (inventory.radAway) {
            setGameOver('Win');
        } else if (!stillAlive()) {
            setGameOver('Lost')
        }
    }

    // const getUsedLocalStorageSpace = () => { 
    //     console.log(Object.keys(window.localStorage).map(function(key) { return localStorage[key].length;}).reduce(function(a,b) { return a+b;}));
    // }; 

    return (
        <div>
            {/* Element that contain flicker effect */}
            <div class="overlay"></div>
            <div className='content-wrapper'>

                <div className='title-wrapper'>
                    <span className='title'>FALLOUT QUEST</span>
                </div>

                <div className='location-wrapper'>
                    <LocationDisplay/>
                </div>

                <div className='display-wrapper'>
                    <TextDisplay text={showText}/>
                    <OptionDisplay showTextNode={showTextNode}/>
                </div>

                <div className='stat-wrapper'>
                    <RadiationDisplay/> 
                    <InventoryDisplay/>
                </div>

                <StepMapDisplay/>

                {trap ? <TrapDisplay/> : null}
                {gameOver ? <GameOverDisplay startGame={startGame}/> : null}
                <div className='menudisplay-wrapper'>
                    <MenuDisplay startGame={startGame}/>
                </div>
            </div>
        </div>
    );
}

