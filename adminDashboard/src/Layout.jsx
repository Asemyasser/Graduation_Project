// import React, { useState } from "react";
// import "./Layout.css";
// import Navs from "./Components/Nav/Navs";
// import { Outlet } from "react-router-dom";
// import Login from "./Components/Login/login";
// import Register from "./Components/Register/Register";

// function Layout() {
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <>
//       <Navs collapsed={collapsed} setCollapsed={setCollapsed} />
//       <div className={`section ${collapsed ? "collapsed" : ""}`}>
//         <Outlet />
//       </div>
//       {/* <Login />
//       <Register /> */}
//     </>
//   );
// }

// export default Layout;

import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navs from "./Components/Nav/Navs";
import "./Layout.css";

function Layout() {
  const [collapsed, setCollapsed] = useState(true);

  // Use `useLocation` to get the current route
  const location = useLocation();

  // Define routes where `Navs` and `section` class should not be displayed
  const excludedRoutes = ["/login", "/register"];

  // Check if the current route is excluded
  const isExcludedRoute = excludedRoutes.includes(location.pathname);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setCollapsed(true); // Close sidebar
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setCollapsed]);

  return (
    <>
      {/* Render `Navs` only if the route is not excluded */}
      {!isExcludedRoute && (
        <Navs collapsed={collapsed} setCollapsed={setCollapsed} />
      )}

      {/* Conditionally apply `section` class */}
      <div
        className={
          isExcludedRoute ? "" : `section ${collapsed ? "collapsed" : ""}`
        }
      >
        {/* Render the nested routes */}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
