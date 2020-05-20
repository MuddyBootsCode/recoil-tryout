import React from 'react';
import DrawControls from "./DrawControls";
import Circle from "./Circle";
import { squareList, circleList } from "../atoms";
import {useRecoilValue} from "recoil";
import Square from "./Square";
import CircleCard from "./CircleCard";
import SquareCard from "./SquareCard";

const DrawArea = () => {
    const squares = useRecoilValue(squareList);
    const circles = useRecoilValue(circleList);

    const shapes = [...squares.map(s => ({...s, shape: "square"})), ...circles.map(c => ({ ...c, shape: "circle"}))];

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
                    viewBox={'0 0 640 640'}
                >
                    {
                        shapes.map((c) => {
                          if (c.shape === "square"){
                            return(
                              <Square
                                props={c}
                                key={c.key}
                              />
                            )
                          }
                          else {
                            return(
                              <Circle
                                props={c}
                                key={c.key}
                              />
                            )
                          }
                        })
                    }
                </svg>
            </div>
            <div className="border border-black border-2 rounded bg-gray-400 shadow mx-2">
              {
                shapes.map((c) => {
                    if( c.shape === "circle"){
                        return (
                            <CircleCard props={c} key={c.id}/>
                        )
                    }
                    if (c.shape === "square"){
                        return (
                            <SquareCard props={c} key={c.id} />
                            )
                    }

                })
              }
            </div>
        </div>
    );
};

export default DrawArea;