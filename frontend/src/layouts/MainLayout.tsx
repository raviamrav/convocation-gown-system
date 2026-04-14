import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} <strong>Convocation Gown System</strong> | 
            Developed by <strong>Ravivarma Singaravelu</strong>
          </p>
          
          <div className="text-gray-500 text-xs mt-2 space-y-1">
            <p>
              <strong>Legal Notice:</strong> Residential address withheld for privacy; 
              available upon request for verification. | <strong>Location:</strong> 01589 Riesa, Sachsen, Germany
            </p>
            <p>
              <strong>Contact:</strong> raviamrav@yahoo.com | <strong>Privacy:</strong> GDPR Compliant
            </p>
            <p className="italic pt-2">
              This project is a non-commercial portfolio piece used to demonstrate 
              Full-Stack Engineering skills.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;