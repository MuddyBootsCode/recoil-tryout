import React from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import {itemWithID, squareWithID} from "../atoms";

const Square = ({props}) => {

  const square = useRecoilValue(squareWithID(props.key))
  console.log(square, ' square')

  const { x, y, width, fill, id } = square;

  const setItemState = useRecoilState(itemWithID(id))

  return (
    <rect
      id={id}
      x={x}
      y={y}
      height={width}
      width={width}
      fill={fill}
    />
  );
};

export default Square;