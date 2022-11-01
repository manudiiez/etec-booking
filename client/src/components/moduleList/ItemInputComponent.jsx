import React, { useEffect, useState } from 'react'

const ItemInputComponent = ({ item, isAvalible, handleSelect, alldates }) => {

    const [state, setState] = useState(false);

    useEffect(() => {
        const func = async() => {
            setState(await isAvalible(item))
        }

        func()
    }, [alldates])

    return (
        <input type="checkbox" value={item._id} name={item.name} disabled={state} onChange={handleSelect} />
    )
}

export default ItemInputComponent