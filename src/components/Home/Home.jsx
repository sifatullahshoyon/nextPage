import React from "react";
import Lottie from "lottie-react";
import education from "../../assets/educationAnimation.json";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-container flex flex-col lg:flex-row justify-between items-center">
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <div>
            <p className="badge">ON SALE!</p>
          </div>
          <h2 className="font-lato max-w-lg mb-6 text-3xl font-bold tracking-tight lg:leading-tight text-gray-900 sm:text-4xl sm:leading-none">
            A reader lives a <br className=' md:block' />
            thousand lives {''}
            <span className="inline-block text-blue-400">before he dies</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg font-lato">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/books' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3 font-lato'>Visit Store</p>
              <ShoppingCartIcon className='w-5 text-gray-100' />
            </div>
          </Link>
          <Link
            to='/about'
            className='inline-flex items-center font-lato font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700 underline hover:underline-offset-0'
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className=' lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={education} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
