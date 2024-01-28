import React from "react";
import Carousel from "./Carousel";

export default function Cards() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        {/* <img className="object-cover h-96 w-96" src={src} alt={alt} /> */}
        <Carousel />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Beautiful abodes for your prosperity!</h2>
        <p>View more.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}
