import React, { useContext } from 'react'
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from '../../context/AuthContext'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemUserHeader from '../../components/ItemUserHeader'
import ItemSubjectListContainer from '../../components/subjectList/ItemSubjectListContainer'

const User = () => {

    const {user} = useContext(AuthContext)

    return (
        <section>
            <ItemUserHeader user={user}/>
            <ItemSubjectListContainer userId={user._id}/>
        </section>
    )
}

export default User