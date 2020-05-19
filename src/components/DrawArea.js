import React, { useRef, useEffect, useState } from 'react';
import DrawControls from "./DrawControls";
import { svgCanvas } from "../atoms";
import { useRecoilState } from "recoil";
import { select, scaleBand, scaleLinear, axisBottom, axisRight } from 'd3';
import ResizeObserver from 'resize-observer-polyfill';

const DrawArea = () => {
    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
    const wrapperRef = useRef();

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

    function BarChart() {
        const svgRef = useRef();
        const dimensions = useResizeObserver(wrapperRef);

        // will be called initially and on every data change
        useEffect(() => {
            const svg = select(svgRef.current);

            if (!dimensions) return;

            // scales
            const xScale = scaleBand()
                .domain(data.map((value, index) => index))
                .range([0, dimensions.width]) // change
                .padding(0.5);

            const yScale = scaleLinear()
                .domain([0, 150]) // todo
                .range([dimensions.height, 0]); // change

            const colorScale = scaleLinear()
                .domain([75, 100, 150])
                .range(["green", "orange", "red"])
                .clamp(true);

            // create x-axis
            const xAxis = axisBottom(xScale).ticks(data.length);
            svg
                .select(".x-axis")
                .style("transform", `translateY(${dimensions.height}px)`)
                .call(xAxis);

            // create y-axis
            const yAxis = axisRight(yScale);
            svg
                .select(".y-axis")
                .style("transform", `translateX(${dimensions.width}px)`)
                .call(yAxis);

            // draw the bars
            svg
                .selectAll(".bar")
                .data(data)
                .join("rect")
                .attr("class", "bar")
                .style("transform", "scale(1, -1)")
                .attr("x", (value, index) => xScale(index))
                .attr("y", -dimensions.height)
                .attr("width", xScale.bandwidth())
                .on("mouseenter", (value, index) => {
                    svg
                        .selectAll(".tooltip")
                        .data([value])
                        .join(enter => enter.append("text").attr("y", yScale(value) - 4))
                        .attr("class", "tooltip")
                        .text(value)
                        .attr("x", xScale(index) + xScale.bandwidth() / 2)
                        .attr("text-anchor", "middle")
                        .transition()
                        .attr("y", yScale(value) - 8)
                        .attr("opacity", 1);
                })
                .on("mouseleave", () => svg.select(".tooltip").remove())
                .transition()
                .attr("fill", colorScale)
                .attr("height", value => dimensions.height - yScale(value));
        }, [data, dimensions]);

        return (

                <svg ref={svgRef} viewBox="0 0 100 100">
                    <g className="x-axis" />
                    <g className="y-axis" />
                    <circle cy="150" cx="150" r="30" fill="red" />
                </svg>
        );
    }

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
                <BarChart />
            </div>
            <div className="border border-black border-2 rounded bg-gray-400 shadow mx-2">3</div>
        </div>
    );
};

export default DrawArea;