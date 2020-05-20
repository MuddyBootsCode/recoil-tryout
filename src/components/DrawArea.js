import React, { useRef, useState } from 'react';
import DrawControls from "./DrawControls";
import Circle from "./Circle";
import {squareList} from "../atoms";
import {useRecoilValue} from "recoil";
import Square from "./Square";

const DrawArea = () => {
    const squares = useRecoilValue(squareList);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            columnGap: '.75rem',
            marginTop: '.75rem',
            height: '100vh'
        }}>
            <div className="border border-black border-2 rounded bg-gray-400 shadow mx-2">
                <DrawControls />
            </div>
            <div className="border border-black border-2 rounded">
                <svg
                    viewBox={'0 0 200 200'}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {
                        squares.map((c) => {
                            console.log(c, ' Inside draw area')
                            return(
                                <Square
                                    props={c}
                                    key={c.id}
                                />
                            )
                        })
                    }
                </svg>
            </div>
            <div className="border border-black border-2 rounded bg-gray-400 shadow mx-2">3</div>
        </div>
    );
};

export default DrawArea;