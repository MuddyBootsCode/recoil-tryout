import {atom, selector} from 'recoil';


export const itemWithID = id => {
    return(
        atom({
            key: `item${id}`,
            default: {}
        })
    )
}

export const circleWithID = (id) => {
    return (
        atom({
            key: `item${id}`,
            default: {
                id,
                cx: 50,
                cy: 50,
                r: 15,
                fill: "#3942e0",
                offset: {

                }
            }

        })
    )
}

export const squareWithID = (id) => {
    return (
        atom({
            key: `item${id}`,
            default: {
                id,
                x: 50,
                y: 50,
                height: 15,
                width: 15,
                fill: "#3942e0",
                offset: {

                }
            }

        })
    )
}

export const getItem = (id) => selector({
    key: 'getItem',
    get: ({get}) => get(itemWithID(id))
})

export const selectedItems = selector({
    key: 'selectedItems',
    get: ({get}) => {
        const items = get(itemList).map(i  => get(itemWithID(i)))
        return items.filter((item) => item.selected)
    }
});

export const itemList = atom({
    key: 'itemList',
    default: []
});

export const squareList = atom({
    key: 'squares',
    default: []
});

export const circleList = atom({
    key: 'circles',
    default: []
});
