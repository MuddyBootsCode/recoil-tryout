import React from 'react';


const Circle = ({cx, cy, r, fill}) => {
    return (
            <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={fill}
            />
    )

};

export default Circle;