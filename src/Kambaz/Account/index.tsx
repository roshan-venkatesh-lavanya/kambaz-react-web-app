import { Routes, Route, NavLink } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import Navigation from "../Navigation"; // main sidebar

export default function Account() {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* Global Sidebar */}
        <div className="col-2">
          <Navigation />
        </div>

        {/* Account Sidebar */}
        <div className="col-2">
          <div className="list-group">
            <NavLink
              to="/Kambaz/Account/Signin"
              className={({ isActive }) =>
                `list-group-item list-group-item-action fw-semibold ${
                  isActive ? "text-black" : "text-danger"
                }`
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="/Kambaz/Account/Signup"
              className={({ isActive }) =>
                `list-group-item list-group-item-action fw-semibold ${
                  isActive ? "text-black" : "text-danger"
                }`
              }
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/Kambaz/Account/Profile"
              className={({ isActive }) =>
                `list-group-item list-group-item-action fw-semibold ${
                  isActive ? "text-black" : "text-danger"
                }`
              }
            >
              Profile
            </NavLink>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-8 d-flex justify-content-center align-items-center vh-100">
          <Routes>
            <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}
