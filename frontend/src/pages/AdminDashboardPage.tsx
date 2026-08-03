import {Link} from "react-router-dom";

function AdminDashboardPage() {
return (
    <div className="max-w-4xl mx-auto px-4 py-10">

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                🎓 Admin Dashboard
            </h1>

            <p className="text-gray-600 text-center mb-8">
                Welcome to the admin dashboard. Here you can manage gowns,
                orders, and other administrative tasks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <Link
                    to="/admin/gowns"
                    className="bg-blue-500 text-white rounded-lg px-6 py-4 text-center font-semibold hover:bg-blue-600 transition"
                >
                    ⚙️ Manage Gowns
                </Link>

                {/* Future features */}

                {/* 
                <Link
                    to="/admin/orders"
                    className="bg-green-500 text-white rounded-lg px-6 py-4 text-center font-semibold hover:bg-green-600 transition"
                >
                    📦 Manage Orders
                </Link>

                <Link
                    to="/admin/reports"
                    className="bg-purple-500 text-white rounded-lg px-6 py-4 text-center font-semibold hover:bg-purple-600 transition"
                >
                    📊 Reports
                </Link>
                */}


            </div>

        </div>

    </div>
);
 }

 export default AdminDashboardPage;