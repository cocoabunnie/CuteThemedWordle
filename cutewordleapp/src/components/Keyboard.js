import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import '../css/Keyboard.css';
import { ReactDOM } from "react";

class Keyboard extends React.Component {

    addLetterToBoard = (event) => {
        const getLetter = event.target.value;

        if(getLetter == "DELETE"){
            this.props.delete();
        } else if (getLetter == "SUBMIT"){
            this.props.submit();
        } else {
            this.props.addToBoard(getLetter);
        }
    }

    render () {
        const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
        const row3 = ['DELETE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'SUBMIT'];

        return(
            <div className = "keyboard">
                {row1.map(letter => <button onClick={this.addLetterToBoard} value={letter}>{letter}</button>)}
                <br/>
                {row2.map(letter => <button onClick={this.addLetterToBoard} value={letter}>{letter}</button>)}
                <br/>
                {row3.map(letter => <button onClick={this.addLetterToBoard} value={letter}>{letter}</button>)}
            </div>
        );
    }
}

export default Keyboard;