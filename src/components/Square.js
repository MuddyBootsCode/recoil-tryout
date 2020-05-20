import React from 'react';
import { useSetRecoilState } from "recoil";
import { itemWithID } from "../atoms";

const Square = ({props}) => {
  const { id, x, y, size, squarefill } = props;
  const setItemState = useSetRecoilState(itemWithID(id))

  return (
    <rect
      id={id}
      x={x}
      y={y}
      height={size}
      width={size}
      fill={squarefill}
    />
  );
};

export default Square;