import React from 'react';
import { useSetRecoilState } from "recoil";
import {circleList, circleWithID, squareList, squareWithID} from "../atoms";
import shortid from 'shortid'

const AddShapes = () => {
  const setSquareState = useSetRecoilState(squareList)
  const setCircleState = useSetRecoilState(circleList)

  const addSquare = () => {
    setSquareState((oldSquareList) => [
      ...oldSquareList,
      squareWithID(shortid.generate())
    ]);
  };

  const addCircle = () => {
    setCircleState((oldCircleList) => [
      ...oldCircleList,
      circleWithID(shortid.generate())
    ]);
  };

  return (
    <div className="flex flex-col m-2 justify-center font-mono">
      <button
        onClick={addSquare}
        className="border
                   border-black border-2 bg-white rounded
                   w-full my-2 hover:bg-black hover:text-white shadow-lg"
      >
        Add Square
      </button>
      <br/>
      <hr/>
      <br/>
      <button
        onClick={addCircle}
        className="border
                   border-black border-2 bg-white rounded
                   w-full my-2 hover:bg-black hover:text-white shadow-lg"
      >
        Add Circle
      </button>
      <br/>
      <hr/>
    </div>
  );
};

export default AddShapes;