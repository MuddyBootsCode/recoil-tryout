import React from 'react';
import {selectedItems} from "../atoms";
import {useRecoilValue} from "recoil";

const SelectedItems = () => {
    const selected = useRecoilValue(selectedItems)
    return (
        <div className="flex flex-col justify-center border border-black border-2 rounded w-full p-4">
            {
                selected.map(i => <div className="text-center" key={i.id}>{i.id}</div>)
            }
        </div>
    );
};

export default SelectedItems;