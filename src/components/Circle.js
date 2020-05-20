import React from 'react';
import {useSetRecoilState} from "recoil";
import {itemWithID} from "../atoms";


const Circle = ({ props }) => {

    const { cx, cy, diameter, circleFill, id } = props;

    const setItemState = useSetRecoilState(itemWithID(id))

    return (
            <circle
                cx={cx}
                cy={cy}
                r={diameter}
                fill={circleFill}
                id={id}
            />
    )

};

export default Circle;