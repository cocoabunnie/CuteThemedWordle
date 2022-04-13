import React from "react";
import '../css/Box.css';

const Box = (props) => {
    const board = props.board;
    const column = props.column;
    const row = props.row;
    return(
        <div className = "box">
            {board[row][column]}
        </div>
    );
}
export default Box;