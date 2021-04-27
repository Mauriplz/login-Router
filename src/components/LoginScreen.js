import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

export const LoginScreen = () => {

    const {dispatch} = useContext(LoginContext)

    const handleLogin = () =>{
        dispatch({
            type:'login',
            payload: 'Mauricio Plaza'
        })
    }

    return (
        <div>
            <button className="btn btn-danger"
                    onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
