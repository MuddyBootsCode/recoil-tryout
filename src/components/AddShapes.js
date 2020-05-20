import React, {useState} from 'react';
import { useSetRecoilState } from "recoil";
import {circleList, squareList} from "../atoms";
import shortid from 'shortid'

const AddShapes = () => {
  const setSquareState = useSetRecoilState(squareList)
  const setCircleState = useSetRecoilState(circleList)
  const defaultFormState = {
    id: shortid.generate(),
    x: "",
    cx: "",
    y: "",
    cy: "",
    size: "",
    diameter: "",
    squarefill: "#3942e0",
    circleFill: "#3942e0",
    shape: ''
  }
  const [formState, setFormState] = useState(defaultFormState);
  const {x, y, size, squarefill, cx, cy, diameter, circleFill } = formState;

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    setFormState({...formState, [name]: value})
  }

  const addSquare = () => {
    setSquareState((oldSquareList) => [
      ...oldSquareList,
      {...formState, shape: 'square'}
    ]);
  };

  const addCircle = () => {
    setCircleState((oldTodoList) => [
      ...oldTodoList,
      {...formState, shape: 'circle'}
    ]);
  };

  const submitSquare = () => {
    addSquare()
    setFormState(defaultFormState)
  }

  const submitCircle = () => {
    addCircle()
    setFormState(defaultFormState)
  }

  return (
    <div className="flex flex-col m-2 justify-center font-mono">
      <h2>Square</h2>
      <span>X: </span>
      <input
        type="number"
        value={x}
        name="x"
        placeholder=" x value"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Y: </span>
      <input
        type="number"
        value={y}
        name="y"
        placeholder=" y value"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Dimensions: </span>
      <input
        type="number"
        value={size}
        name="size"
        placeholder=" height & width"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Color: </span>
      <input type="color"
             value={squarefill}
             name="squarefill"
             onChange={handleChange}
      />
      <button
        onClick={submitSquare}
        className="border
                   border-black border-2 bg-white rounded
                   w-full my-2 hover:bg-black hover:text-white shadow-lg"
      >
        Add Square
      </button>
      <br/>
      <hr/>
      <br/>
      <h2>Circle</h2>
      <span>X: </span>
      <input
        type="number"
        value={cx}
        name="cx"
        placeholder=" x value"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Y: </span>
      <input
        type="number"
        value={cy}
        name="cy"
        placeholder=" y value"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Radius: </span>
      <input
        type="number"
        value={diameter}
        name="diameter"
        placeholder=" diameter"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Color: </span>
      <input type="color"
             value={circleFill}
             name="circleFill"
             onChange={handleChange}
      />
      <button
        onClick={submitCircle}
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