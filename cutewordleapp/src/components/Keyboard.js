import React from "react";
import { ReactDOM } from "react";

class Keyboard extends React.Component {
    render () {
        const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
        const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
        return(
            <div>
                {row1.map(letter => <button>{letter}</button>)}
                <br/>
                {row2.map(letter => <button>{letter}</button>)}
                <br/>
                {row3.map(letter => <button>{letter}</button>)}
            </div>
        );
    }
}

export default Keyboard;