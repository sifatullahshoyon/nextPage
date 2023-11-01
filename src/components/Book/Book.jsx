import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    
//   const {isbn13, image, price, title, subtitle } = book;
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
        <img
          src={book.image}
          alt="book cover"
          className="object-cover w-full h-full md:h-full xl:h-80"
        />
        <div className="bg-black absolute px-6 py-4 inset-0 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200 font-lato text-white flex flex-col">
          <h4 className="font-bold text-xl">{book.title}</h4>
          <br />
          <br />
          <p>{book.subtitle ? book.subtitle.substring(0, 45) : "No Data Found"}...</p>
          <br />
          <p className="mt-auto">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
