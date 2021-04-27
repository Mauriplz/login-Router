import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

export const PerfilScreen = () => {

    const {state} = useContext(LoginContext)
    console.log(state)

    return (
        <div>
            <h1>PerfilScreen</h1>
            {
                JSON.stringify(state)
            }
        </div>
    )
}
