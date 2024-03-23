import { Link , NavLink } from "react-router-dom"



export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <ul className="navbar-nav">
                        
                        <NavLink className="nav-link " to="/" >Home</NavLink>
                        <NavLink className="nav-link" to="/about" >About</NavLink>
                        <NavLink className="nav-link" to="/login" >Login</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
