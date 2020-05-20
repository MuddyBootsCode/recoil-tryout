import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {circleWithID, itemWithID} from "../atoms";


const Circle = ({ props }) => {

    const circle = useRecoilValue(circleWithID(props.key))

    const { cx, cy, r, fill, id } = circle;

    const setItemState = useRecoilState(itemWithID(id))

    return (
            <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={fill}
                id={id}
            />
    )

};

export default Circle;