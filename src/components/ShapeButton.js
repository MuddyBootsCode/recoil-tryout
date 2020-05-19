import React from 'react';

const ShapeButton = ({text, shape}) => {
    return (
        <button className="border border-2 border-black
        rounded font-mono m-1 hover:bg-black hover:text-white">{text}</button>
    );
};

export default ShapeButton;