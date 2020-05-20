import React from 'react';
import {squareList, squareWithID} from "../atoms";
import {useRecoilState, useSetRecoilState} from "recoil";

const SquareCard = ({props}) => {

    const [squareState, setSquareState] = useRecoilState(squareWithID(props.key));

    const setSquares = useSetRecoilState(squareList);

    const { x, y, width, fill, id } = squareState;

    const handleChange = e => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        setSquareState({...squareState, [name]: value})
    }

    const deleteSquare = () => {
        setSquares((oldSquares) => {
            const newList = oldSquares.filter(c => c.key !== props.key)
            return newList;
        })

    }


    return (
        <div className="border border-black border-2 rounded m-2 bg-white font-mono p-2 flex flex-col">
          <h2><b>Square - {id}</b></h2>
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
            <span>Size: </span>
            <input
                type="number"
                value={width}
                name="width"
                placeholder=" width"
                onChange={handleChange}
                className="border border-black border-2 rounded m-0 shadow-lg"
            />
            <span>Color: </span>
            <input type="color"
                   value={fill}
                   name="fill"
                   onChange={handleChange}
            />
            <button
                className="border
                   border-black border-2 bg-white rounded
                   w-full my-2 hover:bg-black hover:text-white shadow-lg"
                onClick={deleteSquare}
            >
                Delete Square
            </button>
        </div>
    );
};

export default SquareCard;