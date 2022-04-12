import React from "react";
import Keyboard from "./Keyboard";
import '../css/Gameboard.css';

class Gameboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          boardValue: [
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""]
            ],
            currRow: 0,
            currColumn: 0
        }
    }

    addLetter = (letter) => {
        var currBoard = this.state.boardValue;
        var row = this.state.currRow;
        var column = this.state.currColumn;

        //Check to make sure letters haven't reached the end
        if (column <= 4){
            currBoard[row][column] = letter;
            this.setState({currColumn: (column + 1)});
        }

        this.setState ({
            boardValue: currBoard
        });
    }

    deleteLetter = () => {
        var currBoard = this.state.boardValue;
        var row = this.state.currRow;
        var column = this.state.currColumn;
        
        if (column > 0){
            currBoard[row][column - 1] = "";
            this.setState({currColumn: (column - 1)});
        }

        this.setState ({
            boardValue: currBoard
        });

        console.log(this.state.boardValue);
    }

    submitWord = () => {
        console.log("submitting");
    }

    render () {
        const board = this.state.boardValue;

        function Box({column, row}){
            var inputLetter = board[row][column];
            return <div className = "box">{inputLetter}</div>
        }

        return (
            <div className = "gameGridContainer">
                <div className="row">
                    <Box column={0} row={0}/>
                    <Box column={1} row={0}/>
                    <Box column={2} row={0}/>
                    <Box column={3} row={0}/>
                    <Box column={4} row={0}/>
                </div>

                <div className="row">
                    <Box column={0} row={1}/>
                    <Box column={1} row={1}/>
                    <Box column={2} row={1}/>
                    <Box column={3} row={1}/>
                    <Box column={4} row={1}/>
                </div>

                <div className="row">
                    <Box column={0} row={2}/>
                    <Box column={1} row={2}/>
                    <Box column={2} row={2}/>
                    <Box column={3} row={2}/>
                    <Box column={4} row={2}/>
                </div>

                <div className="row">
                    <Box column={0} row={3}/>
                    <Box column={1} row={3}/>
                    <Box column={2} row={3}/>
                    <Box column={3} row={3}/>
                    <Box column={4} row={3}/>
                </div>

                <div className="row">
                    <Box column={0} row={4}/>
                    <Box column={1} row={4}/>
                    <Box column={2} row={4}/>
                    <Box column={3} row={4}/>
                    <Box column={4} row={4}/>
                </div>

                <div className="row">
                    <Box column={0} row={5}/>
                    <Box column={1} row={5}/>
                    <Box column={2} row={5}/>
                    <Box column={3} row={5}/>
                    <Box column={4} row={5}/>
                </div>

                <Keyboard addToBoard = {this.addLetter} delete = {this.deleteLetter} submit = {this.submitWord}/>
            </div>
        );
    }
}
export default Gameboard;