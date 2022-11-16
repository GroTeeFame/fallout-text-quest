import { useContext } from "react";
import { GameDataContext } from "./GameData";


export const Player = () => {
    
    const {inventory, radiation, setRadiation} = useContext(GameDataContext);

    const stillAlive = () => {
        return radiation < 100 ? true : false;
    }

    const radPerMove = (r) => {
        inventory.respirator ? setRadiation(radiation => radiation + Math.round(r/2)) : setRadiation(radiation => radiation + r);
    }

    return{stillAlive, radPerMove}
}