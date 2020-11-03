import React from 'react';
import Row from './Row';

const Board = (props) => {

    let rows = [];
    for (let i = 5 ; i >= 0; i --) {
        rows.push(<Row key={i}  row = {props.row} col={i} handleClick={props.handleClick}/>)
    }

    return(
        <div className="board">
            {rows}
        </div>
    )
}

export default Board;