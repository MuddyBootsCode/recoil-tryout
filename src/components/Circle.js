import React from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {circleList, circleWithID, itemWithID} from "../atoms";


const Circle = ({ props }) => {

    const [circle, setCircle] = useRecoilState(circleWithID(props.key))
    // const setCircle = useSetRecoilState(circleList)
    console.log(circle)

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