import React, { useRef, useEffect, useState } from 'react';
import DrawControls from "./DrawControls";
import { svgCanvas } from "../atoms";
import { useRecoilState } from "recoil";
import { select } from 'd3';
import ResizeObserver from 'resize-observer-polyfill';
import Circle from "./Circle";

const useResizeObserver = ref => {
    const [dimensions, setDimensions] = useRecoilState(svgCanvas)
    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                setDimensions(entry.contentRect)
            })
        })
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget);
        }
    }, [ref])
    return dimensions;
}

const DrawArea = () => {
    const wrapperRef = useRef();
    const svgRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const tryWidth = dimensions.width /2;
    const tryHeight = dimensions.height /2;
    const initialData = [
        {x:10, y:10, r:10, color: "green"},
        {x:30, y:30, r:15, color: "red"},
        {x:55, y:55, r:15, color: "blue"},
        {x:100, y:100, r:15, color: "teal"},
        {x:200, y:200, r:15, color: "grey"},
        {x:300, y:300, r:15, color: "pink"},
        {x:300, y:600, r:15, color: "purple"},
        {x:300, y:800, r:15, color: "black"},
        {x:320, y:1000, r:15, color: "salmon"},
        {x:320, y:500, r:15, color: "orange"},
        ];
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const svg = select(svgRef.current);
        svg
            .selectAll(".circle")
            .data(data)
            .join("circle")
            .attr("class", "new")
    }, [data]);

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
            <div className="border border-black border-2 rounded" ref={wrapperRef}>
                <svg
                    ref={svgRef}
                    viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                    preserveAspectRatio="xMidYMid meet"
                    height={dimensions.height}
                >
                    {
                        data.map((c) => {
                            return(
                                <Circle
                                    cx={c.x}
                                    cy={c.y}
                                    r={c.r}
                                    fill={c.color}
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