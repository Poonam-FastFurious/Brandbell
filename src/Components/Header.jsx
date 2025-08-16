import { Link } from "react-router-dom";
import logo from "../assets/img/brandbell.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleRouteClick = () => {
    setIsOpen(false);
  };
  const toggleServicesMenu = () => {
    setIsServicesOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className=" wrapper  bg-[#262b32] opacity-100 sticky  top-0 z-50">
        <nav className="navbar navbar-expand-lg center-nav transparent navbar-dark">
          <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
            <div className="navbar-brand w-full">
              <Link to="/">
                <img
                  className="logo-light "
                  src={logo}
                  srcSet={logo}
                  alt="image"
                  width="200" // Replace with the actual width of your logo
                  height="50"
                />
              </Link>
            </div>
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                  BrandBell
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown dropdown-mega">
                    <Link
                      className="nav-link  !text-[.85rem] !tracking-[normal]"
                      to="/"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <Link
                      className="nav-link  !text-[.85rem] !tracking-[normal]"
                      to="/About-us"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <Link
                      className="nav-link  !text-[.85rem] !tracking-[normal]"
                      to="https://granoopixr.com/"
                      target="_blank"
                    >
                      AR & VR
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle !text-[.85rem] !tracking-[normal]"
                      to="/Services"
                    >
                      SERVICES
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          className="dropdown-item hover:!text-[#54a8c7]"
                          to="/E-commerce"
                        >
                          E-Commerce Website
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item hover:!text-[#54a8c7]"
                          to="/website-development"
                        >
                          Web Development / UI & UX
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item hover:!text-[#54a8c7]"
                          to="/App-development"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item hover:!text-[#54a8c7]"
                          to="/Craetive-Service"
                        >
                          Creative Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item hover:!text-[#54a8c7]"
                          to="/Digital-marketing"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item hover:!text-[#54a8c7]"
                          to="/Software-Development"
                        >
                          Software Development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item hover:!text-[#54a8c7]"
                          to="/whatsapp-chatbot-development"
                        >
                          Whatsapp chatbot
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  !text-[.85rem] !tracking-[normal]"
                      to="/Blogs"
                    >
                      BLOGS
                    </Link>
                  </li>

                  <li className="nav-item dropdown dropdown-mega">
                    <Link
                      className="nav-link  !text-[.85rem] !tracking-[normal]"
                      to="/contact"
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="navbar-other w-full !flex !ml-auto">
              <ul className="navbar-nav !flex-row !items-center !ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-search"
                    href="/"
                    data-discover="true"
                    aria-label="Search the site"
                  >
                    <i className="uil uil-search before:content-['\eca5'] !text-[1.1rem]"></i>
                  </Link>
                </li>
                <li className="nav-item hidden xl:block lg:block md:block">
                  <Link
                    className="btn btn-sm btn-aqua text-white !bg-[#35778d] border-[#35778d] hover:text-white hover:bg-[#285d6f] hover:border-[#285d6f] focus:shadow-[rgba(79,152,181,1)] active:text-white active:bg-[#285d6f] active:border-[#285d6f] disabled:text-gray-400 disabled:bg-gray-300 disabled:border-gray-300 !text-[.85rem] !rounded-[.4rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                    to="#"
                  >
                    GET A QUOTE
                  </Link>
                </li>

                <li className="nav-item xl:hidden lg:hidden">
                  <button
                    aria-labelledby="menu-label"
                    className="hamburger offcanvas-nav-btn"
                    onClick={toggleDrawer}
                  >
                    <span id="menu-label" className="sr-only">
                      Open menu
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="offcanvas offcanvas-top !bg-[#ffffff] "
          id="offcanvas-search"
          data-bs-scroll="true"
        >
          <div className="container flex !flex-row py-6">
            <form className=" search-form relative before:content-['\eca5'] before:block before:absolute before:-translate-y-2/4 before:text-[1rem] before:text-[#343f52] before:z-[1] before:right-auto before:top-2/4 before:font-Unicons w-full before:left-0 focus:!outline-offset-0 focus:outline-0">
              <input
                id="search-form1"
                type="text"
                className="form-control text-[0.8rem] !shadow-none pl-[1.75rem] !pr-[.75rem] border-0 bg-inherit m-0 block w-full font-medium leading-[1.7] text-[#60697b] px-4 py-[0.6rem] rounded-[0.4rem] focus:!outline-offset-0 focus:outline-0"
                placeholder="Type keyword and hit enter"
              />
            </form>
            <button
              type="button"
              className="btn-close leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out p-0 border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(0,0,0,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=" w-40"
      >
        <aside
          id="sidebar-multi-level-sidebar"
          className=" z-40 w-full h-screen transition-transform"
          aria-label="Sidebar"
        >
          <div className="h-full  py-4 overflow-y-auto bg-gray-50 ">
            <ul className="space-y-2 font-semibold">
              <li>
                <Link
                  to="/"
                  onClick={handleRouteClick}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <span className="ms-3">Home</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={toggleServicesMenu}
                  className="flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                >
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Services
                  </span>
                  {isServicesOpen ? (
                    <FaAngleUp className="w-3 h-3" />
                  ) : (
                    <FaAngleDown className="w-3 h-3" />
                  )}
                </button>
                <ul
                  id="dropdown-example"
                  className={` transition-all duration-300 ease-in-out overflow-hidden ${
                    isServicesOpen ? "block  trasac" : "hidden"
                  } py-2 space-y-2`}
                >
                  <li>
                    <Link
                      onClick={handleRouteClick}
                      to="/website-development"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 "
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleRouteClick}
                      to="/App-development"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                    >
                      Mobile App
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleRouteClick}
                      to="/Craetive-Service"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                    >
                      Craetive Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleRouteClick}
                      to="/Digital-marketing"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleRouteClick}
                      to="/Software-Development"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleRouteClick}
                      to="/whatsapp-chatbot-development"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                    >
                      Whatsapp chatbot
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/About-us"
                  onClick={handleRouteClick}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    About_Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://granoopixr.com/"
                  target="_blank"
                  onClick={handleRouteClick}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Ar & Vr</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Blogs"
                  onClick={handleRouteClick}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Blogs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleRouteClick}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </Drawer>
    </>
  );
}

export default Header;
