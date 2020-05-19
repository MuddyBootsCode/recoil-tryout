import React from 'react';
import Item from "./Item";
import {useRecoilState} from "recoil";
import {itemList} from "../atoms";

const ItemList = () => {

    const [items, setItems] = useRecoilState(itemList)

    const addItem = () => {
        setItems([...items, getId()])
    }

    function getId() {
        return Math.floor(Math.random() * Math.floor(3000));
    }
    return (
        <div className="flex flex-col justify-center text-center">
            <div>
                <button onClick={addItem} className="
                border border-2 border-black rounded text-center p-2">Add Item</button>
            </div>
            <div>
                {
                    items.map((item) => {
                        return(
                            <Item key={item} id={item}/>
                        )
                    })
                }
            </div>
            <h2>Selected Items</h2>
        </div>
    );
};

export default ItemList;