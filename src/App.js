import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/Login/Signup.js";
import Payment from "./Components/Payment/Payment";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./Components/StateProvider.js";
import auth from "./Components/Login/firebase.js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("This user mail is >>>>", authUser.email);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header /> <Home />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header /> <Checkout />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/payment"
              element={
                <>
                  <Header /> <Payment />
                </>
              }
            />
            <Route path="/user" element={<h1>{user} </h1>} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </div>
  );
}

export default App;
