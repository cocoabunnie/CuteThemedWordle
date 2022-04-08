import React from "react";

import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";

class Game extends React.Component {

    render () {
        return (
            <div>
                <h1>Wordle</h1>
                <Gameboard/>
                <Keyboard/>
            </div>
        );
    }
}

export default Game;