import React from "react";
import '../css/Box.css';

const Box = (props) => {
    const board = props.board;
    const boardChecks = props.boardChecks;
    const thisID = boardChecks;
    const column = props.column;
    const row = props.row;
    const checkIfCorrect = "empty";

    return(
        <div className = "box" id={thisID}>
            {board[row][column]}
        </div>
    );
}
export default Box;