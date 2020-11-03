import React from "react";
import RowCell from "./RowCell";

const Row = () => {
  let cells = [];

  for (let i = 0; i < 7; i++) {
    cells.push(<RowCell />);
  }

  return <div className="row">{cells}</div>;
};

export default Row;
