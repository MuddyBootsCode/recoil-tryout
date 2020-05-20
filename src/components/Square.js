import React from 'react';
import {useSetRecoilState} from "recoil";
import {itemWithID} from "../atoms";

const Square = ({props}) => {
  const { id, x, y, size, fill } = props;
  console.log(id, x, y, size, fill)
  const setItemState = useSetRecoilState(itemWithID(id))

  return (
    <rect
      id={id}
      x={x}
      y={y}
      height={size}
      width={size}
      fill={fill}
    />
  );
};

export default Square;