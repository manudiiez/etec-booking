import React, { useContext } from 'react'
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from '../../context/AuthContext'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemSubjectListContainer from '../../components/subjectList/ItemSubjectListContainer'
import ItemUserHeaderContainer from '../../components/userHeader/ItemUserHeaderContainer'
import ItemAddSubjectContainer from '../../components/addSubject/ItemAddSubjectContainer'

const User = () => {

    const {user} = useContext(AuthContext)

    return (
        <section>
            <ItemUserHeaderContainer user={user}/>
            <ItemSubjectListContainer userId={user._id}/>
            <ItemAddSubjectContainer user={user}/>
        </section>
    )
}

export default User