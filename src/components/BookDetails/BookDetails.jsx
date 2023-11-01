import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const BookDetails = () => {
  const singleBookData = useLoaderData();
  const [fold, setFold] = useState(true);
  const navigation = useNavigation();
  const { image, title, desc, authors, publisher, year, rating, url, price } =
    singleBookData;

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div className="my-container">
      <div className="flex flex-col overflow-hidden max-w-screen-lg bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <p className="badge">Brand new</p>
          <h5 className="mb-3 text-3xl font-lato font-extrabold leading-none sm:text-4xl">
            {title}
          </h5>
          <p className=" text-gray-900 font-lato">
            <span className="font-semibold">Authors: </span>{" "}
            {authors ? authors.substring(0, 50) : "No Data Found"}
          </p>
          <p className=" text-gray-900 font-lato">
            <span className="font-semibold">Publisher: </span>{" "}
            {publisher ? publisher : "No Data Found"}
          </p>
          <p className=" text-gray-900 font-lato">
            <span className="font-semibold">Year: </span>{" "}
            {year ? year : "No Data Found"}
          </p>
          <p className=" text-gray-900 font-lato">
            <span className="font-semibold">Rating: </span>{" "}
            {rating ? rating : "No Data Found"}
          </p>
          <div className="mt-4">
            {fold ? (
              <>
                <span className=" text-gray-500 font-lato">
                  {desc ? desc.substring(0, 50) : "No Data Found"}.....
                </span>
                <span
                  onClick={() => setFold(!fold)}
                  className="cursor-pointer text-blue-600 font-lato"
                >
                  Read More
                </span>
              </>
            ) : (
              <>
                <span className=" text-gray-900">
                  {desc ? desc : "No Data Found!"}.....
                </span>
                <span
                  onClick={() => setFold(!fold)}
                  className="cursor-pointer text-blue-600 font-lato"
                >
                  Read Less
                </span>
              </>
            )}
          </div>
          <div className="flex gap-5 mt-8 items-center">
            <a href={url} target="_blank" className="btn">
              Buy Now
            </a>
            <p className="items-center font-extrabold text-gray-600 ">
              Price: {price ? price : "$00"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
