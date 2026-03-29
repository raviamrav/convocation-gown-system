import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import GownListPage from "../pages/GownListPage";
import OrderPage from "../pages/OrderPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gowns" element={<GownListPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;