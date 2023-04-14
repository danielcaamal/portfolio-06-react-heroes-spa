import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../auth";

export const Navbar = () => {

    const navigate = useNavigate();
    const { authState, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        await logout();
        navigate('/login', { replace: true });
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex p-2">
            <div className="container-fluid">
                {/* Left bar*/}
                <Link className="navbar-brand" to="/">Associations</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavItem to="/marvel">Marvel</NavItem>
                        <NavItem to="/dc">DC</NavItem>
                        <NavItem to="/search">Search</NavItem>
                    </div>
                </div>

                {/* Right bar */}
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        { 
                            authState.logged && authState.name &&
                            <span 
                                className="nav-item nav-link text-primary"
                                >{authState.name ?? ''} <small>({authState.email ?? ""})</small>
                            </span>
                        }
                        <button 
                            id="logout-button"
                            type="button"
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                            >Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const NavItem = ({ children, to } : {children: any, to:string}) => {
    return (
        <NavLink 
            className={ (args) => `nav-item nav-link ${args.isActive && ('active text-primary') }` }
            to={to}>
            {children}
        </NavLink>
    );
}