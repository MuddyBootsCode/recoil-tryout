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
    const initialData = [
        {cord:20, color: "green"},
        {cord:25, color: "red"},
        {cord:30, color: "blue"},
        {cord:45, color: "pink"},
        {cord:60, color: "cyan"}];
    const [data, setData] = useState(initialData);
    const wrapperRef = useRef();
    const svgRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    console.log(dimensions)

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
                    height={dimensions.height}
                    width={dimensions.width}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {
                        data.map((c) => {
                            return(
                                <Circle
                                    cx={c.cord * 3}
                                    cy={c.cord * 2}
                                    r={3 + c.cord}
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