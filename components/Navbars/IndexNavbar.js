import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm backdrop-grayscale">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-grow justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <img className="h-5 cursor-pointer mt-1 md:mt-0" src="/img/access-kit.svg" alt="AccessKit logo." />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border-transparent rounded-sm bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs font-bold font-lede"
                  href="https://accesskit.cc/docs"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                  href="https://github.com/access-kit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">GitHub</span>
                </a>
              </li>

              <li className="flex items-center">
                <Link href="/community">
                  <button
                    className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold px-4 py-2 rounded-sm shadow hover:shadow-lg outline-none font-lede focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
