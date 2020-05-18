import React from 'react';
import { itemWithID } from "../atoms";
import { useRecoilState } from "recoil";

const Item = ({ id }) => {

    const [itemState, setItemState] = useRecoilState(itemWithID(id))

    const setSelected = () => {
        setItemState({...itemState, selected: !itemState.selected})
    }

    return (
        <div onClick={setSelected} className="
        border border-2 border-blue-200 hover:bg-black hover:text-white rounded m-2 p-2">
            {id} - Click to Select or unselect
        </div>
    );
};

export default Item;