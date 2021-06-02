/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { ContactForm } from "components/ContactForm"

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Access Kit provides easy-to-integrate, modular solutions for media playback accessibility.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Ranging from complete visitor guides to mobile captioning for complex, multi-channel audio visual installations, Access Kit provides the tools needed to create a frictionless and immersive synchronized experience for viewers across a full spectrum of accessibility, captioning and language needs. 
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
          style={{ opacity: 0.6, zIndex: -100 }}
          src="/img/ak.svg"
          alt="Access Kit Letterpress"
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-12/12 md:w-6/12 lg:w-6/12 px-6 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/whitney.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Access Kit at the Shed
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Read a case study of how Access Kit was used to add mobile captioning to a 16 millimeter film at the Shed in June 2021.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Easy Integrations
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We provide integration scripts for a number of common media players, including <strong>BrightSign</strong>, <strong>Raspberry Pi</strong>, and <strong>Mac Mini</strong>: no need to replace your existing infrastructure!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-language"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Multilingual Captions and Audio
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Our CMS makes it easy to manage multiple caption and audio tracks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-bolt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">No-Hassle Connection</h6>
                      <p className="mb-4 text-blueGray-500">
                        Since Access Kit works entirely in the browser, all a visitor needs to connect your custom guide is a mobile phone!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Partners
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Take a look at Access Kit in action at some of New York's premiere cultural institutions, like <a href="https://captioner.theshed.org/"><strong>the Shed</strong></a> and <a href="https://captioner.whitney.org"><strong>the Whitney Museum of American Art</strong></a>.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-toolbox text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                The Best Tools
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Access Kit includes a variety of tools to help your team through the entire production pipeline, from deploying a complex multi-channel, synchronized audiovisual presentation to making your visitor experience accessible to everyone.  Save time and increase your agility in the production phase while also reaching a larger audience!
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Audio Description
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Multilingual Captions
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Multilingual Audio
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Web CMS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Multichannel Syncrhonization
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Custom Scripting
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Embeddable Player
                </span>
              </div>
              {/* <a */}
              {/*   href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index" */}
              {/*   target="_blank" */}
              {/*   className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150" */}
              {/* > */}
              {/*   View All{" "} */}
              {/*   <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i> */}
              {/* </a> */}
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/admin_home.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-340-px left-45-px -top-100-px z-0"
                />
                <img
                  alt="..."
                  src="/img/admin_exhibition.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/admin_work.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-10-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/exhibition_nav.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/home_nav.jpg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-200-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/landscape_caption.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-320-px left-95-px top-5-px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-palette text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Theming, Branding and Beyond
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Access Kit custom themes make it easy to match the display of captions and work metadata
                  to your organization's style guide with just a few clicks. You can upload custom fonts and icons,
                  and if required, re-style the whole site with an external stylesheet for seamless brand intergration.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div className="w-12">
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-chart-line"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Google Analytics
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div className="w-12">
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-images"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic SVGs
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div className="w-12">
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-font"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Rich Text Editing
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block relative z-1 bg-blueGray-800">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Sync a BrightSign
                  </h5>
                  <Link href="/community">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/brightsign-4.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Sync a Rasberry Pi
                  </h5>
                  <Link href="/community">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/pi.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Sync a Projector
                  </h5>
                  <Link href="/community">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/eiki.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 pt-10 bg-blueGray-800">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
