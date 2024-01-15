import { Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            
            <br />
            
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/filter">Filter</Link></li>
                <li><Link to="/login">Login</Link></li>
               
            </ul>
        </>
    )
}

export default NavBar;