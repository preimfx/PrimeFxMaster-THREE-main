// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import { Home } from "./Components/Home";
import Faqs from "./Components/Faqs";
import HowItWorks from "./Components/HowItWorks";
import About from "./Components/About";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { MyContextProvider, useMyContext } from "./Components/Mycontext";
import { auth } from "./config/firebase";
import Nav2 from "./Components/Nav2";
import DashBoard from "./Components/Nav/DashBoard";
import Chart from "./Components/Chart";
import VerifyData from "./debuging/Verify";
import Admin from "./Components/Admin";
import ChartReal from "./Components/ChartReal";
import Withdrawal from "./Components/Withdraw";
import ScrollToTop from "./Components/ScrollToTop";
import TermsAndConditions from "./Components/TermAndConditions";
import Donate from "./Page/Donate";
import TradingAccount from "./Components/TradingAccount";
import CreateAccount from "./Components/CreateAccount";
import Promotions from "./Components/Promotions";
import RandomUser from "./Components/RandomUser";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoutes"; // Import PrivateRoute

function App() {
  return (
    <MyContextProvider>
      <AppContent />
    </MyContextProvider>
  );
}

function AppContent() {
  const { isNavbarVisible } = useMyContext();
  const [visible, setVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Convert user object to boolean
    });

    return () => unsubscribe();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className={`all ${isLoggedIn ? "flex overflow-hidden" : ""}`}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <DashBoard /> : <Home />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/workings" element={<HowItWorks />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Private Routes */}
            <Route
              path="/tradingAcc"
              element={
                <PrivateRoute>
                  <TradingAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="/CreateAccount"
              element={
                <PrivateRoute>
                  <CreateAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="/promo"
              element={
                <PrivateRoute>
                  <Promotions />
                </PrivateRoute>
              }
            />
            <Route
              path="/CopyTrading"
              element={
                <PrivateRoute>
                  <RandomUser />
                </PrivateRoute>
              }
            />
            <Route
              path="/trade"
              element={
                <PrivateRoute>
                  <Chart />
                </PrivateRoute>
              }
            />
            <Route
              path="/realTrade"
              element={
                <PrivateRoute>
                  <ChartReal />
                </PrivateRoute>
              }
            />
            <Route
              path="/Admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
            <Route
              path="/v"
              element={
                <PrivateRoute>
                  <Withdrawal />
                </PrivateRoute>
              }
            />
            <Route
              path="/donate"
              element={
                <PrivateRoute>
                  <Donate />
                </PrivateRoute>
              }
            />
            <Route
              path="/TermsAndCondition"
              element={
                <PrivateRoute>
                  <TermsAndConditions />
                </PrivateRoute>
              }
            />
          </Routes>
          {isLoggedIn ? (
            <Nav2 />
          ) : (
            visible == false && <Nav scrollToSection={scrollToSection} />
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
