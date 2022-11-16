import { useState, createContext, useEffect } from "react";
import { textNodes } from "../data/textNodes";

import { GameLogic } from "./GameLogic";

export const GameDataContext = createContext();

// create and manage data for game
export const GameData = () => {

    // states for Player 
    const [inventory, setInventory] = useState({
        plastic: false,
        water: false,
        antiseptic: false,
        mushroom: false,
        respirator: false,
        radAway: false,
        medicine: false,
    });

    const [radiation, setRadiation] = useState(0);

    // states for TextDisplay 
    const [messages, setMessages] = useState([]);

    // states for GameLogic
    const [location, setLocation] = useState({
        id: textNodes[0].id,
        location: textNodes[0].location,
    });
    const [showText, setShowText] = useState('');
    const [showOptions, setShowOptions] = useState([]);
    
    const [stepMap, setStepMap] = useState([]);

    const [savedGameDataByStep, setSavedGameDataByStep] = useState([]);

    const [trap, setTrap] = useState();

    const [gameOver, setGameOver] = useState();

    useEffect(() => {
        saveSessionGame();
    }, [inventory, radiation, messages, location, showText, showOptions, stepMap, trap, gameOver,]);

    useEffect(() => {
        saveGameByStep();
    }, [stepMap]);

    // set all state to default values
    const resetGame = () => {
        setInventory({
            plastic: false,
            water: false,
            antiseptic: false,
            mushroom: false,
            respirator: false,
            radAway: false,
            medicine: false,
        });
        setRadiation(0);
        setMessages([]);
        setLocation({        
            id: textNodes[0].id,
            location: textNodes[0].location,
        });
        setShowText('');
        setShowOptions([]);
        setStepMap([]);
        setSavedGameDataByStep([]);
        setGameOver();
        setTrap();

        deleteSessionSave();
    }

    // save game to SessionStorage
    const saveSessionGame = () => {
        const save = {
            'inventory' : inventory,
            'radiation': radiation,
            'messages': messages,
            'location': location,
            'showText': showText,
            'showOptions': showOptions,
            'stepMap': stepMap,
            'trap': trap,
            'gameOver': gameOver,
        }
        const serializedSave = JSON.stringify(save);
        sessionStorage.setItem('gameSessionSave', serializedSave);
        const serializedSaveStepData = JSON.stringify(savedGameDataByStep);
        sessionStorage.setItem('savedGameDataByStep', serializedSaveStepData);
    }

    // loading game from SessionStorage
    const loadSessionGame = () => {
        const loadedData = JSON.parse(sessionStorage.getItem('gameSessionSave'));
        if(!loadedData){
            return;
        };
        setInventory(loadedData.inventory);
        setRadiation(loadedData.radiation);
        setMessages(loadedData.messages);
        setLocation(loadedData.location);
        setShowText(loadedData.showText);
        setShowOptions(loadedData.showOptions);
        setStepMap(loadedData.stepMap);
        setSavedGameDataByStep(loadedData.savedGameDataByStep);
        setTrap(loadedData.trap);
        setGameOver(loadedData.gameOver);
        const loadedSavedGameDataByStep = JSON.parse(sessionStorage.getItem('savedGameDataByStep'));
        setSavedGameDataByStep(loadedSavedGameDataByStep);
    }

    const deleteSessionSave = () => {
        sessionStorage.clear();
    }

    // save game to LocalStorage
    const saveGameData = () => {
        const save = {
            'inventory' : inventory,
            'radiation': radiation,
            'messages': messages,
            'location': location,
            'showText': showText,
            'showOptions': showOptions,
            'stepMap': stepMap,
            'gameOver': gameOver,
        }
        const serializedSave = JSON.stringify(save);
        localStorage.setItem('gameSave', serializedSave);
        const serializedSaveStepData = JSON.stringify(savedGameDataByStep);
        localStorage.setItem('savedGameDataByStep', serializedSaveStepData);
    }

    // loading game from LocalStorage
    const loadGameData = () => {
        const loadedData = JSON.parse(localStorage.getItem('gameSave'));
        if(!loadedData) return;
        setInventory(loadedData.inventory);
        setRadiation(loadedData.radiation);
        setMessages(loadedData.messages);
        setLocation(loadedData.location);
        setShowText(loadedData.showText);
        setShowOptions(loadedData.showOptions);
        setStepMap(loadedData.stepMap);
        setGameOver(loadedData.gameOver);
        const loadedSavedGameDataByStep = JSON.parse(localStorage.getItem('savedGameDataByStep'));
        setSavedGameDataByStep(loadedSavedGameDataByStep);
    }

    const deleteSave = () => {
        localStorage.clear();
    }

    // save game for stepMap to be able to go back any turn
    const saveGameByStep = () => {
        const save = {
            'inventory' : inventory,
            'radiation': radiation,
            'messages': messages,
            'location': location,
            'showText': showText,
            'showOptions': showOptions,
            'stepMap': stepMap,
            'gameOver': gameOver,
        }
        const serializedSave = JSON.stringify(save);
        setSavedGameDataByStep([...savedGameDataByStep, serializedSave]);
    }

    // loading save from particular turn
    const loadGameByStep = (index) => {
        const loadedData = JSON.parse(savedGameDataByStep[index]);

        setInventory(loadedData.inventory);
        setRadiation(loadedData.radiation);
        setMessages(loadedData.messages);
        setLocation(loadedData.location);
        setShowText(loadedData.showText);
        setShowOptions(loadedData.showOptions);
        setStepMap(loadedData.stepMap);
        setGameOver(loadedData.gameOver);
        setSavedGameDataByStep(savedGameDataByStep.slice(0, index));
    }

    return (
        <GameDataContext.Provider value={{
            textNodes, 
            resetGame,
            trap, setTrap,
            stepMap, setStepMap,
            messages, setMessages,
            location, setLocation,
            showText, setShowText,
            gameOver, setGameOver,
            radiation, setRadiation,
            inventory, setInventory, 
            showOptions, setShowOptions,
            saveGameData, loadGameData, deleteSave,
            saveSessionGame, loadSessionGame, deleteSessionSave,
            savedGameDataByStep, setSavedGameDataByStep, saveGameByStep, loadGameByStep,
        }}>
            <GameLogic/>

        </GameDataContext.Provider>
    )
}