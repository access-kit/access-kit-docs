import React, { Component } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { ContactForm } from "components/ContactForm"

export default class Error404 extends Component {
  render() {
    return (
      <>
        <IndexNavbar fixed />
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-blueGray-600">
                  AccessKit Community Edition
                </h2>
                <h3 className="font-semibold text-4xl text-blueGray-500">
                  Coming soon.
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  We're working on a free, web-based tool that will allow
                  arts organizations, musueums, and other non-profits to easily set up 
                  mobile captioning for video installations. Please sign up for the waiting list or
                  contact us if you'd like to be a part of our beta.
                </p>
                <div className="mt-12">
                  <a
                    href="mailto:info@accesskit.media"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    target="_blank"
                  >
                    Join Waiting List
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
            src="/img/ak.svg"
            alt="..."
          />
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <ContactForm />
        </section>
        <Footer />
      </>
    );
  }
}
