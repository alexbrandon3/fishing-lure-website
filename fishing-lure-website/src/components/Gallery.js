import React from "react";
import Placeholder from "./images/products/placeholder.png";

export default function Gallery() {
  const buttons = [
    {
      id: 1,
      name: "Image 1",
      //   href: "https://still-chamber-55192.herokuapp.com/?id=61b9271823b6fd00165104e2",
      src: Placeholder,
      alt: "Description of 1",
    },
    {
      id: 2,
      name: "Image 2",
      //   href: "https://infinite-cove-15007.herokuapp.com/",
      src: Placeholder,
      alt: "Description of 2",
    },
    {
      id: 3,
      name: "Image 3",
      //   href: "https://github.com/alexbrandon3/e-commerce_backend",
      src: Placeholder,
      alt: "Description of 3",
    },
    {
      id: 4,
      name: "Image 4",
      //   href: "https://github.com/alexbrandon3/employee-tracker",
      src: Placeholder,
      alt: "Description of 4",
    },
    {
      id: 5,
      name: "Image 5",
      //   href: "https://alex-brandon-note-taker.herokuapp.com/",
      src: Placeholder,
      alt: "Description of 5",
    },
    {
      id: 6,
      name: "Image 6",
      //   href: "https://alexbrandon3.github.io/weather-dashboard/",
      src: Placeholder,
      alt: "Description of 6",
    },
  ];
  //
  return (
    <div className="container mx auto flex place-content-center flex-wrap">
      {buttons.map((item) => (
        <div
          className={`w-1/3 h-72 rounded m-2 hover:bg-gray-300 bg-cover bg-video z-50 items-center justify-center cursor-pointer`}
        >
          <div
            className={`w-1/3 h-72 rounded hover:bg-opacity-75 hover:bg-gray-300 bg-cover bg-video z-50 absolute flex my-auto`}
          >
            <div
              className={`w-full h-full rounded opacity-0 flex hover:opacity-100 items-center justify-center my-auto`}
            >
              <h1 className="items-center justify-center">{item.name}</h1>
            </div>
          </div>
          <a>
            {/* <a href={item.href}> */}
            <img
              src={item.src}
              alt={item.alt}
              className="min-w-full min-h-full max-h-full rounded"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
