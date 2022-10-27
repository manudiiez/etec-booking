import React, { useContext } from 'react'
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from '../../context/AuthContext'
import ItemNavbar from './ItemNavbar'

const ItemNavbarContainer = () => {

    const {user} = useContext(AuthContext)

    return (
        <ItemNavbar user={user}/>
    )
}

export default ItemNavbarContainer