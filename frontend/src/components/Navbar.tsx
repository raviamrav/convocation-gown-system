import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          Convocation Gown System
        </h3>

        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/gowns" className="hover:underline">Gowns</Link></li>
          <li><Link to="/order" className="hover:underline">Order</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;