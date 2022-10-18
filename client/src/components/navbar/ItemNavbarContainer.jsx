import React, { useContext } from 'react'
/* --------------------------------- CONTEXT -------------------------------- */
import { themeContext } from "../../context/ThemeContext";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemNavbar from './ItemNavbar'

const ItemNavbarContainer = () => {

    const { themeToggler } = useContext(themeContext);


    return (
        <ItemNavbar themeToggler={themeToggler} />
    )
}

export default ItemNavbarContainer