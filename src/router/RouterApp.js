import React, { useContext } from 'react'
import {
BrowserRouter as Router,
Switch

} from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'
import { LoginContext } from '../context/LoginContext'
import { Dashboard } from './Dashboard'
import { PrivareRoute } from './PrivareRoute'
import { PublicRoute } from './PublicRoute'

export const RouterApp = () => {

    const {state} = useContext(LoginContext)
    console.log(state)
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path='/login' component={LoginScreen} isAuthenticate={state.logged}/>
                    <PrivareRoute path='/' component={Dashboard} isAuthenticate={state.logged}/>
                </Switch>
            </div>
        </Router>
    )
}
