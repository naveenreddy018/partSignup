import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// UserDashboard with button
const UserDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        onClick={() => alert("User button clicked!")}
      >
        User Action
      </button>
    </div>
  );
};

// AdminDashboard with button
const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={() => alert("Admin button clicked!")}
      >
        Admin Action
      </button>
    </div>
  );
};

// MainDashboard that redirects automatically on userRole change
const MainDashboard = ({ userRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === null || userRole === undefined) return; // guard for loading state

    if (userRole > 0) {
      navigate("/user-dashboard");
    } else if (userRole === 1) {
      navigate("/admin-dashboard");
    } else {
      navigate("/login"); // fallback
    }
  }, [userRole, navigate]);

  return (
    <div className="p-6">
      <h2 className="text-xl">Checking role and redirecting...</h2>
    </div>
  );
};

export { UserDashboard, AdminDashboard, MainDashboard };
