import React from "react";
import '../css/Box.css';

const Box = (props) => {
    const board = props.board;
    const thisID = props.boardChecks;
    const column = props.column;
    const row = props.row;

    return(
        <div className = "box" id={thisID}>
            {board[row][column]}
        </div>
    );
}
export default Box;