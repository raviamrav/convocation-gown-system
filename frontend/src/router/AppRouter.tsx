import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import GownListPage from "../pages/GownListPage";
import OrderPage from "../pages/OrderPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminGownPage from "../pages/AdminGownPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="gowns" element={<GownListPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admin" element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          } />
          <Route path="admin/gowns" element={
            <ProtectedRoute>
              <AdminGownPage />
            </ProtectedRoute>
          } />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;