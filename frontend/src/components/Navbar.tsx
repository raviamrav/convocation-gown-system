import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h3>Convocation Gown System</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gowns">Gowns</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;