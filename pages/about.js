/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                About Us
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                We (Sam Wolk and Patrick Steadman) started accesskit because we believe that the experience of art and media should be accessible across all sensory modalities conveniently and without restrictions. So, as artists, designers, and programmers ourselves, we were looking for ways to expand the reach of art and media presented at cultural institutions. We felt that solving the challenges of providing synchronized, accessible, real-time captions and audio was a great way to do this! In doing so, we realized that there was also a major need for affordable, reliable tools for producing complex multimedia experiences. And so, accesskit was born out of the idea that these two problems could be solved through unified solutions.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Patrick is a software engineer and writer, while Sam is a technology consultant for artists and galleries. Together, they've worked on projects for organizations like the Shed, the Whitney Museum of American Art, MoMA, ArtForum, Frieze London, Frieze New York, Oda, Giphy, VidVox, Bortolami Gallery, Theta Gallery, Bodega Gallery, Andrew Kreps Gallery, the DiMenna Center, and more.
              </p>
              <div className="mt-12">
                <a
                  href="mailto:info@accesskit.media"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Contact Us
                </a>
                <Link href="/community">
                  <button
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute z-0 top-0 sm:top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          style={{ zIndex: -100 }}
          src="/img/ak.svg"
          alt="Accesskit Letterpress"
        />
      </section>
      <Footer />
    </>
  );
}
