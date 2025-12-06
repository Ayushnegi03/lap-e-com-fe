import { Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";

// This function returns all dashboard routes
export const getDashboardRoutes = (user) => {
  return (
    <>
      {/* User Dashboard */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute role="user">
            <DashboardLayout userRole="user" username={user?.username} />
          </ProtectedRoute>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="orders" element={<div>My Orders</div>} />
        <Route path="profile" element={<div>Profile Page</div>} />
      </Route>
{console.log("User in routes:", user)}
      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard/*"
        element={
          <ProtectedRoute role="admin">
            <DashboardLayout userRole="admin" username={user?.username} />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<div>Products Management</div>} />
        <Route path="orders" element={<div>Orders Management</div>} />
        <Route path="users" element={<div>Users Management</div>} />
      </Route>
    </>
  );
};
