import {Link, useNavigate} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const token = sessionStorage.getItem("authToken");
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          Convocation Gown System
        </h3>
        <div className="flex justify-between items-center gap-24">
          <ul className="flex items-center space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/gowns" className="hover:underline">Gowns</Link></li>
            <li><Link to="/order" className="hover:underline">Order</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
          <ul className="flex items-center space-x-6">
            <li>
              {
                token ? (
                  <div className="flex items-center gap-4">
                    <Link 
                      to="/admin"
                      className="hover:underline"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login"
                    className="hover:underline"
                  >
                    Admin
                  </Link>
                )
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;