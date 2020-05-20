import React from 'react';
import { squareWithID } from "../atoms";
import { useRecoilState } from "recoil";

const SquareCard = ({props}) => {

    const [squareState, setSquareState] = useRecoilState(squareWithID(props.key));


    const { x, y, width, fill, id } = squareState;

    const handleChange = e => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        setSquareState({...squareState, [name]: value})
    }


    return (
        <div className="border border-black border-2 rounded m-2 bg-white font-mono p-2 flex flex-col">
            <h2>Circle {id}</h2>
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
        </div>
    );
};

export default SquareCard;