import { useContext } from "react";
import { GameDataContext } from "../../GameData";

import './gameOverDisplay.scss';

// end of game, shows win|lost window
export const GameOverDisplay = ({startGame}) => {

    const {gameOver} = useContext(GameDataContext);

    let gameOverWindow;

    if(gameOver === 'Lost') {
        gameOverWindow =
            <div className="warning-gameover-menu">
                <span className="warning-text">GAME OVER</span>
                <span className="warning-text">You lose, try again</span>
                <div className="buttons-menu">
                    <button className="menu-button conf" onClick={() => startGame()}>
                        <span className="menu-button-hover-icon">&gt;</span>
                        <span className="menu-button-option-text">START NEW GAME</span>
                    </button>
                </div>
            </div>
    }

    if(gameOver === 'Win') {
        gameOverWindow =
            <div className="warning-gameover-menu">
                <span className="warning-text">YOU WON</span>
                <span className="warning-text">Congradulation, you survive one more day...</span>
                <div className="buttons-menu">
                    <button className="menu-button conf" onClick={() => startGame()}>
                        <span className="menu-button-hover-icon">&gt;</span>
                        <span className="menu-button-option-text">START NEW GAME</span>
                    </button>
                </div>
            </div> 
    }

    return(
        <div className="gameover-wrapper">
            {gameOverWindow}
        </div>
    )
}