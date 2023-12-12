import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./card";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import FittingRoom from "./fittingRoom";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <SideBar />
        {/* <Link to="/otherpage">Go to Other Page</Link> */}
        <div className="flex flex-row flex-wrap items-start justify-evenly">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <FittingRoom/>
      </div>
    </>
  );
}

export default HomePage;
