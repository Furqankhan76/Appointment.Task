import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollTop/scrolltop";

function Layout() {
  const location = useLocation();

  // Define the list of routes where you want to hide the Footer
  const hideFooterRoutes = [
    "/app",
    "/furqan",
    "/book-appointment",
    "/some-other-route",
  ];

  // Check if the current route is in the hideFooterRoutes array
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="bg-gray-100 mx-auto dark:bg-gray-800 min-h-screen">
      <ScrollToTop/>
      <Header />
      <Outlet />
      {/* Conditionally render Footer */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default Layout;
