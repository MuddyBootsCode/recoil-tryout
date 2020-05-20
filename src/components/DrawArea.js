import React from 'react';
import DrawControls from "./DrawControls";
import Circle from "./Circle";
import { squareList, circleList } from "../atoms";
import {useRecoilValue} from "recoil";
import Square from "./Square";
import CircleCard from "./CircleCard";

const DrawArea = () => {
    const squares = useRecoilValue(squareList);
    const circles = useRecoilValue(circleList);

    const shapes = [...squares, ...circles];

    console.log(shapes)

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
                        shapes.map((c) => {
                          console.log(c)
                          if (c.shape === "square"){
                            return(
                              <Square
                                props={c}
                                key={c.id}
                              />
                            )
                          }
                          else {
                            return(
                              <Circle
                                props={c}
                                key={c.id}
                              />
                            )
                          }
                        })
                    }
                </svg>
            </div>
            <div className="border border-black border-2 rounded bg-gray-400 shadow mx-2">
              {
                circles.map((c) => {
                  return (
                    <CircleCard props={c} key={c.id}/>
                    )

                })
              }
            </div>
        </div>
    );
};

export default DrawArea;