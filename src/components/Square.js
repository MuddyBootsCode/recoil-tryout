import React from 'react';
import { useRecoilState } from "recoil";
import { squareWithID } from "../atoms";

const Square = ({props}) => {
  
  const [squareState, setSquareState] = useRecoilState(squareWithID(props.key))

  const { x, y, width, fill, active, id } = squareState;

  const handlePointerDown = e => {
    const el = e.target;
    const bbox = e.target.getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;
    el.setPointerCapture(e.pointerId);
    setSquareState({
      ...squareState,
      active: true,
      offset: {
        x,
        y
      }
    });
  };
  const handlePointerMove = e => {
    const bbox = e.target.getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;
    if (squareState.active) {
      setSquareState({
        ...squareState,
        x: squareState.x - (squareState.offset.x - x),
        y: squareState.y - (squareState.offset.y - y)
      });
    }
  };
  const handlePointerUp = e => {
    setSquareState({
      ...squareState,
      active: false
    });
  };


  return (
    <rect
      id={id}
      x={x}
      y={y}
      height={width}
      width={width}
      fill={active ? "blue" : fill}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  );
};

export default Square;