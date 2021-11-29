import React, { useContext } from "react"
import "../styles/NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { NavItem, Navbar, Nav } from "reactstrap"
import Context from "./Context"

const NavBar = () => {
    const {logout, currentUser} = useContext(Context)

    if (currentUser) {
        return (
            <div>
                <Navbar expand="md">
                    <NavLink exact to="/" className="navbar-brand">
                        Jobly
                    </NavLink>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/companies">Companies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/jobs">Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to="/" onClick={logout}>Log Out</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    } else {
        return <div>
            <Navbar expand="md">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </Navbar>
        </div>
    }
    
}

export default NavBar