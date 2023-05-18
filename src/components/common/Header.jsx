import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-slate-50 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-5 md:block">
            <div className="logo w-14 h-12">
              <Link to="/">
                <img
                  src="https://i.ibb.co/hghyqpM/TinyZoo3.png"
                  alt="TinyZoo"
                />
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-bold">
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-indigo-700" : " "
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-indigo-700" : " "
                  }
                  to="/alltoy"
                >
                  All toy
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-indigo-700" : " "
                  }
                  to="/mytoy"
                >
                  My toy
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-indigo-700" : " "
                  }
                  to="/addatoy"
                >
                  Add a toy
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-indigo-700" : " "
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Link
                to="/login"
                className="inline-block w-full px-4 py-2 text-center text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l"
              >
                Login
              </Link>
              <Link
                to="/registr"
                className="inline-block w-full px-4 py-2 text-center text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link
            to="/login"
            className="px-4 py-2 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
