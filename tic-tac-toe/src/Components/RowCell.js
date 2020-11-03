import React from "react";
import Circle from "./Circle";

const RowCell = (props) => {
  return (
    <div className="rowCell" onClick={props.handleClick(props.row, props.col)}>
      <Circle cell={props.cell}/>
    </div>
  );
};

export default RowCell;
