import React from "react";
import Search from "@/components/Search";
import MainSearch from "@/components/MainSearch";
import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function index() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <img
          className="absolute object-cover top-0 h-3/4 w-screen"
          src="/house-placeholder1.jpg"
          alt="house placeholder1"
        />
        <div className="absolute h-screen w-screen top-0 bg-gradient-to-b from-transparent via-70% via-fuchsia-500 to-white"></div>
        <MainSearch Component={Search} />
      </div>
      <div className="absolute bottom-0 h-48">
        <Cards />
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
