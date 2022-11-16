import { useContext } from "react";
import { GameDataContext } from "../../GameData";

import './locationDisplay.scss';

export const LocationDisplay = () => {

    const { location } = useContext(GameDataContext);

    return (
        <div>
            Location: {location.location}
        </div>
    )
}