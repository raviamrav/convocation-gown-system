import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to Convocation Gown System 🎓
      </h1>

      <p className="text-gray-600">
        Manage gown orders, view available gowns, and handle convocation logistics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/gowns">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Browse Gowns</h2>
            <p className="text-gray-500">View all available gowns.</p>
          </div>
        </Link>

        <Link to="/order">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Place Order</h2>
            <p className="text-gray-500">Reserve your gown easily.</p>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Track Status</h2>
          <p className="text-gray-500">Check your order status anytime.</p>
        </div>

        <br />
        <Link to="/about">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">About this project</h2>
            <p className="text-gray-500">Project development details.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;