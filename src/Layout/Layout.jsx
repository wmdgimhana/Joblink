import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Routers from "../Routes/Routers";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
