import "./App.css";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {NavLink, Link, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
