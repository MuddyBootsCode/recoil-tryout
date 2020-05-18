import React from 'react';
import {selectedItems} from "../atoms";
import {useRecoilValue} from "recoil";

const SelectedItems = () => {
    const selected = useRecoilValue(selectedItems)
    return (
        <div style={{border: 'solid black 2px', padding: '10px'}}>
            {
                selected.map(i => <div key={i.id}>{i.id}</div>)
            }
        </div>
    );
};

export default SelectedItems;