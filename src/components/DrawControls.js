import React from 'react';
import ShapeButton from "./ShapeButton";

const DrawControls = () => {
    return (
        <div className="flex flex-col">
            <ShapeButton text={"Add Circle"}/>
            <ShapeButton text={"Add Square"}/>
        </div>
    );
};

export default DrawControls;