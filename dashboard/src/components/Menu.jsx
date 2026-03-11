import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";

const Menu = () => {
  const location = useLocation();
  const profileRef = useRef(null);

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [showProfile, setShowProfile] = useState(false);

  // ✅ Sync menu with route
  useEffect(() => {
    const pathMap = {
      "/": 0,
      "/orders": 1,
      "/holdings": 2,
      "/positions": 3,
      "/funds": 4,
      "/apps": 5,
    };
    setSelectedMenu(pathMap[location.pathname] ?? 0);
  }, [location.pathname]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

  const handleLogout = async () => {
    await fetch(`${BASE_URL}/api/auth/logout`, {
      credentials: "include",
    });
    window.location.href = "http://localhost:5173/userlogin";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </Link>

      <div className="menus mt-4">
        <ul>
          {[
            { path: "/", label: "Dashboard" },
            { path: "/orders", label: "Orders" },
            { path: "/holdings", label: "Holdings" },
            { path: "/positions", label: "Positions" },
            { path: "/funds", label: "Funds" },
            { path: "/apps", label: "Apps" },
          ].map((item, index) => (
            <li key={item.path}>
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <p
                  className={
                    selectedMenu === index ? activeMenuClass : menuClass
                  }
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        {/* PROFILE */}
        <div ref={profileRef} className="position-relative">
          <div
            className="profile d-flex align-items-center gap-2 px-3 py-2 rounded mb-4"
            style={{ cursor: "pointer" }}
            onClick={() => setShowProfile((prev) => !prev)}
          >
            <div className="avatar">SK</div>
            <p className="username mb-0">USERID</p>
          </div>

          {showProfile && (
            <div
              className="dropdown-menu show mt-2 shadow"
              style={{ right: 0 }}
            >
              <button className="dropdown-item">My Profile</button>
              <button className="dropdown-item">Settings</button>
              <div className="dropdown-divider"></div>
              <button
                className="dropdown-item text-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
