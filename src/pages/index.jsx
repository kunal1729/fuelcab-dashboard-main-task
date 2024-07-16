import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import Products from "./Products";
import Product from "./Product";
import PageNotFound from "./PageNotFound";
import Booking from "./Booking";
import PrivacyPolicy from "./PolicyPages/PrivacyPolicy";
import ShipPolicy from "./PolicyPages/ShipPolicy";
import ReturnPolicy from "./PolicyPages/ReturnPolicy";
import Partnership from "./Partnership/Partnership";
import TermPolicy from "./PolicyPages/TermPolicy";
import Blog from "./Blog";
import Blogs from "./Blogs";
import FAQ from "./FAQ";

import Dashboard from "./Dashboard";
import Settings from "./Dashboard/Settings";
import Profile from "./Dashboard/Settings/Profile";
import Teams from "./Dashboard/Settings/Teams";
import Payment from "./Dashboard/Settings/Payment";
import Orders from "./Dashboard/Orders";
import Payments from "./Dashboard/Payments";
import RFQs from "./Dashboard/RFQs";

// dashboards
// import Dispatches from "./Dashboard/Dispatches";
// import Dispatches_completed from "./Dashboard/Dispatches_completed";
// import Dispatches_ongoing from "./Dashboard/Dispatches_ongoing";
// import Dashboard from "./Dashboard/Dashboard";
// import Payments from "./Dashboard/Payments";
// import Payments_completed from "./Dashboard/Payments_completed";
// import Payments_upcoming from "./Dashboard/Payments_upcoming";
// import ManageTeam from "./Dashboard/ManageTeam";
// import Account from "./Dashboard/Account";
// import SustainabilityReport from "./Dashboard/SustainabilityReport";
// import Stats from "./Dashboard/Stats";
// import Orders from "./Dashboard/Order";
// import OrderDetail from "./Dashboard/OrderDetail";
// import RFQ from "./Dashboard/RFQ";
// import Listing from "./Dashboard/Listing";

function RootRoute() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="booking" element={<Booking />} />
      <Route path="our-team" element={<OurTeam />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="blogs/:id" element={<Blog />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="products" element={<Products />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="ship-policy" element={<ShipPolicy />} />
      <Route path="return-policy" element={<ReturnPolicy />} />
      <Route path="term-policy" element={<TermPolicy />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="partnership" element={<Partnership />} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route path="settings" element={<Settings />}>
          <Route path="profile" element={<Profile />} />
          <Route path="teams" element={<Teams />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="orders" element={<Orders />} />
        <Route path="payments" element={<Payments />} />
        <Route path="rfqs" element={<RFQs />} />
      </Route>

      {/* dashboard route */}
      {/* <Route path="dashboard" element={<Dashboard />}>
        <Route path="" element={<Stats />} />
        <Route path="Listing" element={<Listing />} />
        <Route path="rfq" element={<RFQ />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:orderId" element={<OrderDetail />} />
        <Route path="dispatches" element={<Dispatches />}>
          <Route path="ongoing-dispatches" element={<Dispatches_ongoing />} />
          <Route
            path="completed-dispatches"
            element={<Dispatches_completed />}
          />
        </Route>
        <Route path="payments" element={<Payments />}>
          <Route path="upcoming-payments" element={<Payments_upcoming />} />
          <Route path="completed-payments" element={<Payments_completed />} />
        </Route>
        <Route
          path="sustainability-report"
          element={<SustainabilityReport />}
        />
        <Route path="my-account" element={<Account />} />
        <Route path="my-team" element={<ManageTeam />} />
      </Route> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RootRoute;
