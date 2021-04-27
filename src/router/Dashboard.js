import React from 'react'
import {
    Switch,
    Route,
    Redirect

} from 'react-router-dom'
import { AboutScreen } from '../components/AboutScreen'
import { InicioScreen } from '../components/InicioScreen'
import { NavBar } from '../components/NavBar'
import { PerfilScreen } from '../components/PerfilScreen'

export const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path='/inicio' component={InicioScreen} />
                    <Route exact path='/perfil' component={PerfilScreen} />
                    <Route exact path='/about' component={AboutScreen} />

                    <Redirect to='/inicio' />
                </Switch>
            </div>
            
        </>
    )
}
