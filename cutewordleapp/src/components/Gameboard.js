import React from "react";
import Keyboard from "./Keyboard";
import words from '../data/wordData.json'
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
            winnerWord: "",
            winnerRow:["","","","",""],
            currRow: 0,
            currColumn: 0
        }
    }

    componentDidMount = () => {
        var chosenWord = words[Math.floor(Math.random() * words.length)];
        this.setState({winnerWord: chosenWord});
        console.log(chosenWord);
    }

    addLetter = (letter) => {
        var currBoard = this.state.boardValue;
        var row = this.state.currRow;
        var column = this.state.currColumn;

        //To ensure the user hasn't reached the end of the board (vertical)
        if (row <= 5){
            //Check to make sure letters haven't reached the end of a row
            if (column <= 4){
                currBoard[row][column] = letter;
                this.setState({currColumn: (column + 1)});
            }
    
            this.setState ({
                boardValue: currBoard
            });
        }
        
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
        var column = this.state.currColumn;
        var row = this.state.currRow;

        if (column == 5){
            row = row + 1;
            column = 0;
        } else {
            console.log("Finish the word first!");
        }

        this.setState({currRow: row});
        this.setState({currColumn: column});
        console.log(row + " " + column);
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