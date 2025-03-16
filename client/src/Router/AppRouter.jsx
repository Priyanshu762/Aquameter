import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../components/Layout/Layout";
import ScrollToTop from "../components/common/ScrollToTop";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from '../pages/Dashboard/Dashboard'
import ProtectedRoute from "../components/common/ProtectedRoute";
import DashboardLayout from "../components/Layout/DashboardLayout";


const AppRouter = () => {
  return (
    <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<Home />} />
        <Route path="analytics" element={<Home />} />
        <Route path="map-view" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />

        {/* protected route  */}
        <Route 
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Home />} />
            <Route path="map-view" element={<Home />} />
        </Route>
      </Route>
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
