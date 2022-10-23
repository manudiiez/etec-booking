import React from 'react'
import ItemSidebarContainer from '../sidebar/ItemSidebarContainer'

const DefaultContainer = ({ children }) => {
    return (
        <>
            <ItemSidebarContainer />
            {children}
        </>
    )
}

export default DefaultContainer