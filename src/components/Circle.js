import React from 'react';
import { useRecoilState } from "recoil";
import { circleWithID } from "../atoms";


const Circle = ({ props }) => {

    const [circleState, setCircleState] = useRecoilState(circleWithID(props.key))

    const { cx, cy, r, fill, id } = circleState;

    const handlePointerDown = e => {
        const el = e.target;
        const bbox = e.target.getBoundingClientRect();
        const x = e.clientX - bbox.left;
        const y = e.clientY - bbox.top;
        el.setPointerCapture(e.pointerId);
        setCircleState({
            ...circleState,
            active: true,
            offset: {
                x,
                y
            }
        });
    };
    const handlePointerMove = e => {
        const bbox = e.target.getBoundingClientRect();
        const x = e.clientX - bbox.left;
        const y = e.clientY - bbox.top;
        if (circleState.active) {
            setCircleState({
                ...circleState,
                cx: circleState.cx - (circleState.offset.x - x),
                cy: circleState.cy - (circleState.offset.y - y)
            });
        }
    };
    const handlePointerUp = e => {
        setCircleState({
            ...circleState,
            active: false
        });
    };

    return (
            <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={circleState.active ? 'blue' : fill}
                id={id}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerMove={handlePointerMove}
            />
    )

};

export default Circle;