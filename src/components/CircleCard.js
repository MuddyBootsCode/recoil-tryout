import React from 'react';
import {itemWithID} from "../atoms";
import {useRecoilState} from "recoil";

const CircleCard = ({props}) => {

  const { id, cx, cy, circleFill, diameter } = props;

  const [item, setItemState] = useRecoilState(itemWithID(id))


  return (
    <div className="border border-black border-2 rounded m-2">
      X: { cx }
      <br/>
      Y: { cy }
      <br/>
      D: { diameter}
      <br/>
      Color: { circleFill }
    </div>
  );
};

export default CircleCard;