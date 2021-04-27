import React, { useReducer } from 'react'
import { LoginContext } from './context/LoginContext'
import { useFetchCourses } from './hooks/useFetchCourses'
import { getCourses } from './prueba/getCourses'
import { loginReducer } from './reducer/loginReducer'
import { RouterApp } from './router/RouterApp'

const init = ()=>{
    return {logged:false}
}

export const LoginApp = ()=>{

    const [state, dispatch] = useReducer(loginReducer, {}, init)

    const {data,loading} = useFetchCourses(`https://api.geekshubsacademy.com/courses`)
    console.log(data,loading)

    return (
        <>
            <LoginContext.Provider value={{state, dispatch}}>
                <RouterApp />
            </LoginContext.Provider>  
        </>
    )
}