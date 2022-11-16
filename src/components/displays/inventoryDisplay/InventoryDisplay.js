import { useContext } from "react";

import { GameDataContext } from "../../GameData";

import './inventoryDisplay.scss';

export const InventoryDisplay = () => {

    const { inventory } = useContext(GameDataContext);

    let items = [];

    for (const [key, value] of Object.entries(inventory)) {
        if(value) {
            items.push(<div className="inventory-item" key={key}>{key}</div>);
        }
    }

    return (
        <div className="inventory-wrapper">
            <div className="inventory-display">
                {items}
            </div>
        </div>
    )
}