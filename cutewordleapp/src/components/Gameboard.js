import React from "react";
import Keyboard from "./Keyboard";
import Box from "./Box";
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
            boardChecks: [
                ["empty", "empty", "empty", "empty", "empty"],
                ["empty", "empty", "empty", "empty", "empty"],
                ["empty", "empty", "empty", "empty", "empty"],
                ["empty", "empty", "empty", "empty", "empty"],
                ["empty", "empty", "empty", "empty", "empty"],
                ["empty", "empty", "empty", "empty", "empty"]
            ],
            winnerWord: "",
            winnerRow:[],
            currRow: 0,
            currColumn: 0,
            color: "pink"
        }
    }

    componentDidMount = () => {
        {this.chooseRandomWord()}
    }

    chooseRandomWord = () => {
        var randomNum = Math.floor(Math.random() * words.length);
        var chosenWord = words[randomNum].word.toUpperCase();

        this.setState({winnerWord: chosenWord.toString()});
        setTimeout(function() { //Slight delay to make sure it happens in order....
            this.setState({winnerRow: chosenWord.split('')})
        }.bind(this), 100)
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

        console.log(this.state.winnerRow);
        
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
            {this.checkLetters()}

            row = row + 1;
            column = 0;
        } else {
            console.log("Finish the word first!");
        }

        this.setState({currRow: row});
        this.setState({currColumn: column});
        console.log(row + " " + column);
    }

    checkLetters = () => {
        var winWord = this.state.winnerRow;
        var currBoard = this.state.boardValue;
        var boardColors = this.state.boardChecks;
        var row = this.state.currRow;
        var col = 0;
        for (var i = 0; i < 5; i++) {
            if(currBoard[row][i] == winWord[i]){
                console.log("CORRECT");
                boardColors[row][i] = "correct";
                console.log(boardColors);
            } else {
                console.log("INCORRECT");
                console.log("Correct Letter is: " + winWord[i] + " For position " + row + " , " + i);
            }
        } 

        this.setState({boardColors: {boardColors}});
    }

    render () {
        const board = this.state.boardValue;
        const boardColors = this.state.boardColors;

        return (
            <div className = "gameGridContainer">
                <div className="row">
                    <Box column={0} row={0} board={board} boardChecks={this.state.boardChecks[0][0]}/>
                    <Box column={1} row={0} board={board} boardChecks={this.state.boardChecks[0][1]}/>
                    <Box column={2} row={0} board={board} boardChecks={this.state.boardChecks[0][2]}/>
                    <Box column={3} row={0} board={board} boardChecks={this.state.boardChecks[0][3]}/>
                    <Box column={4} row={0} board={board} boardChecks={this.state.boardChecks[0][4]}/>
                </div>

                <div className="row">
                    <Box column={0} row={1} board={board} boardChecks={this.state.boardChecks[1][0]}/>
                    <Box column={1} row={1} board={board} boardChecks={this.state.boardChecks[1][1]}/>
                    <Box column={2} row={1} board={board} boardChecks={this.state.boardChecks[1][2]}/>
                    <Box column={3} row={1} board={board} boardChecks={this.state.boardChecks[1][3]}/>
                    <Box column={4} row={1} board={board} boardChecks={this.state.boardChecks[1][4]}/>
                </div>

                <div className="row">
                    <Box column={0} row={2} board={board} boardChecks={this.state.boardChecks[2][0]}/>
                    <Box column={1} row={2} board={board} boardChecks={this.state.boardChecks[2][1]}/>
                    <Box column={2} row={2} board={board} boardChecks={this.state.boardChecks[2][2]}/>
                    <Box column={3} row={2} board={board} boardChecks={this.state.boardChecks[2][3]}/>
                    <Box column={4} row={2} board={board} boardChecks={this.state.boardChecks[2][4]}/>
                </div>

                <div className="row">
                    <Box column={0} row={3} board={board} boardChecks={this.state.boardChecks[3][0]}/>
                    <Box column={1} row={3} board={board} boardChecks={this.state.boardChecks[3][1]}/>
                    <Box column={2} row={3} board={board} boardChecks={this.state.boardChecks[3][2]}/>
                    <Box column={3} row={3} board={board} boardChecks={this.state.boardChecks[3][3]}/>
                    <Box column={4} row={3} board={board} boardChecks={this.state.boardChecks[3][4]}/>
                </div>

                <div className="row">
                    <Box column={0} row={4} board={board} boardChecks={this.state.boardChecks[4][0]}/>
                    <Box column={1} row={4} board={board} boardChecks={this.state.boardChecks[4][1]}/>
                    <Box column={2} row={4} board={board} boardChecks={this.state.boardChecks[4][2]}/>
                    <Box column={3} row={4} board={board} boardChecks={this.state.boardChecks[4][3]}/>
                    <Box column={4} row={4} board={board} boardChecks={this.state.boardChecks[4][4]}/>
                </div>

                <div className="row">
                    <Box column={0} row={5} board={board} boardChecks={this.state.boardChecks[5][0]}/>
                    <Box column={1} row={5} board={board} boardChecks={this.state.boardChecks[5][1]}/>
                    <Box column={2} row={5} board={board} boardChecks={this.state.boardChecks[5][2]}/>
                    <Box column={3} row={5} board={board} boardChecks={this.state.boardChecks[5][3]}/>
                    <Box column={4} row={5} board={board} boardChecks={this.state.boardChecks[5][4]}/>
                </div>

                <Keyboard addToBoard = {this.addLetter} delete = {this.deleteLetter} submit = {this.submitWord}/>
            </div>
        );
    }
}
export default Gameboard;