import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import Banner from "./Banner";
import Rows from "./Rows";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Rows />
    </div>
  );
}
