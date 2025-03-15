import React from "react";
import "./App.css";
import "./components/script";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1000} />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
