import React from "react";
import '../css/Game.css';
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";

class Game extends React.Component {
    render () {
        return (
            <div className="game">
                <h1>Wordle</h1>
                <Gameboard/>
            </div>
        );
    }
}
export default Game;