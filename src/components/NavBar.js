import React, { useContext } from 'react'
import {
    Link,
    NavLink

} from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

export const NavBar = () => {

    const {state, dispatch} = useContext(LoginContext)

    const handleLogOut = () =>{
        dispatch({
            type:'logout'
        })
    }

    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-item nav-link" exact to="/inicio" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink className="nav-item nav-link" exact to="/about" activeClassName="active">
                            About
                        </NavLink>
                        <NavLink className="nav-item nav-link" exact to="/perfil" activeClassName="active">
                            Perfil
                        </NavLink>
                    </ul>
                </div>
                <label>
                    {state.nombre}
                </label>
                <button className="btn btn-danger"
                    onClick={handleLogOut}
                >
                    LogOut
                </button>
            </div>
        </nav>
       
    )
}
