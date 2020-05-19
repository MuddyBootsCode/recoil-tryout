import React from 'react';
import { itemWithID } from "../atoms";
import { useSetRecoilState } from "recoil";

const Item = ({ id }) => {

    const setItemState = useSetRecoilState(itemWithID(id))

    const setSelected = () => {
        setItemState((oldItemState) =>({...oldItemState, selected: !oldItemState.selected}))
    }

    return (
        <div onClick={setSelected} className="
        border border-2 border-blue-200 hover:bg-black hover:text-white rounded m-2 p-2">
            {id} - Click to Select or unselect
        </div>
    );
};

export default Item;