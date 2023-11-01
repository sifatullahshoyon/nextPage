import React, { useState } from "react";
import {
  Bars3BottomLeftIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex pointer">
            <BoltIcon className="h-6 w-6 text-blue-500" />
            <span className="font-lato font-bold text-xl text-gray-800 tracking-wide ml-2">
              nextPage
            </span>
          </Link>
          {/* Menu Item */}
          <div>
            <ul className="lg:flex hidden items-center font-lato lg:space-x-8 text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            {/* Mobile Navbar Section */}
            <div className="lg:hidden">
              {/* Dropdown Open Button */}
              <button
                aria-label="open menu icon"
                title="open menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Bars3BottomLeftIcon className="h-6 w-6 text-gray-900" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    {/* logo & section */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <Link to="/" className="inline-flex pointer">
                          <BoltIcon className="h-6 w-6 text-blue-500" />
                          <span className="font-lato font-bold text-xl text-gray-800 tracking-wide ml-2">
                            nextPage
                          </span>
                        </Link>
                      </div>
                      {/* Dropdown Close Button */}
                      <div>
                        <button
                          aria-label="close menu icon"
                          title="close menu"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <XMarkIcon className="h-6 w-6 text-gray-900" />
                        </button>
                      </div>
                    </div>
                    {/* Phone nav item */}
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            to="/"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="books"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            Books
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="about"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            About Us
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
