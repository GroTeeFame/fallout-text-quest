import { useContext } from "react";

import { GameDataContext } from "../../GameData";

import './radiationDisplay.scss';

export const RadiationDisplay = () => {

    const { radiation } = useContext(GameDataContext);

    return (
        <div className="radiation-wrapper">
            <div className="radiation-display">
                <span className="radiation-text">Radiation:</span>
                <span className="radiation-text">{radiation}/100</span>
            </div>
        </div>
    )
}