import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivareRoute = ({
    isAuthenticate,
    component : Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component = {(props)=>(
                (isAuthenticate)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )} 
        />
    )
}
