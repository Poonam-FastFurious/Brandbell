import { CgWebsite } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import images from "../../Images/Image";
import image from "../../assets/Newimages/bg4.jpg";
import image1 from "../../assets/Newimages/about21.jpg";
import image2 from "../../assets/Newimages/about21@2x.jpg";
import image3 from "../../assets/Newimages/3d8.png";
import image4 from "../../assets/Newimages/3d8@2x.png";
import image5 from "../../assets/Newimages/3d5.png";
import logo from "../../assets/img/brandbell.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Contactusform2 from "../../Shared/Contactusform2";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PiStrategyDuotone } from "react-icons/pi";
import Faq from "../../Shared/Faq";
function Ecomercepage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v8xww9j", "template_cot7jpf", form.current, {
        publicKey: "sbkFJ3SGMzbAVcPrw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Form submitted successfully!", {
            autoClose: 2000, // Toast will auto-close after 2 seconds
            onClose: () => {
              // Redirect after toast closes
              navigate("/Thank-you"); // Change the URL as needed
            },
          });
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email: " + error.text);
        }
      );
  };
  return (
    <>
      <ToastContainer />
      <header className="relative wrapper bg-gray ! bg-[rgba(246,247,249,1)] ">
        <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
          <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
            <div className="navbar-brand w-full">
              <a href="index.htm">
                <img src={logo} srcSet={images.logo} alt="image" />
              </a>
            </div>
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                  Sandbox
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
                  <li className="nav-item">
                    <a className="nav-link scroll active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#process">
                      Process
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#testimonials">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="offcanvas-footer xl:hidden lg:hidden">
                  <div>
                    <a
                      href="mailto:first.last@email.com"
                      className="link-inverse"
                    >
                      info@email.com
                    </a>
                    <br /> 00 (123) 456 78 90 <br />
                    <nav className="nav social social-white mt-4">
                      <a
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                      </a>
                      <a
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                      </a>
                      <a
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                      </a>
                      <a
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                      </a>
                      <a
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-other w-full !flex !ml-auto">
              <ul className="navbar-nav !flex-row !items-center !ml-auto">
                <li className="nav-item hidden xl:block lg:block md:block">
                  <a
                    className="btn btn-sm btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                    href="contact.html"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item xl:hidden lg:hidden">
                  <button className="hamburger offcanvas-nav-btn">
                    <span></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section
        id="Home"
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className="container pt-32 pb-24"
          style={{ zIndex: "5", position: "relative" }}
        >
          <div className="flex flex-wrap mx-0 mt-[-70px] items-center">
            <div className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 xl:!ml-0 xl:w-6/12 w-full flex-[0_0_auto] max-w-full content text-center lg:text-left xl:text-left mt-[70px]">
              <h1 className="xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.25] mb-5 text-white">
                Boost Sales with Expert eCommerce Solutions!
              </h1>
              <p className="lead text-[1.05rem] !leading-[1.5] font-medium mb-7 xl:pr-10">
                We’re a creative company that focuses on establishing long-term
                relationships with customers.
              </p>
              <div className="flex justify-center lg:!justify-start xl:!justify-start">
                <span>
                  <button
                    onClick={() => setIsOpen(true)}
                    to="/contact"
                    className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
                  >
                    Get a Quote
                  </button>
                </span>
              </div>
            </div>

            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] mt-[70px]">
              <div
                className="swiper-container dots-over !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] relative z-10"
                data-margin="5"
                data-nav="true"
                data-dots="true"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src={image1}
                        srcSet={image2}
                        className="rounded-[.4rem] w-full h-auto"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#edf2fc]">
        <div className="container py-[2rem] xl:!py-12 lg:!py-12 md:!py-12">
          <div className="flex flex-wrap mx-[-15px] !mb-8">
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
              <h2 className="text-[0.8rem] uppercase text-[#3f78e0] !mb-3 !leading-[1.35]">
                Responsive
              </h2>
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[15.8rem] leading-[1.3]  !mb-0">
                Web Development
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-floating input-group relative">
                  <input
                    type="text"
                    className="form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                    placeholder="Enter Website URL"
                    id="analyze"
                    name="number"
                    required
                    onInput={(e) => {
                      // Remove non-numeric characters
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      // Truncate to 10 digits
                      if (e.target.value.length > 10) {
                        e.target.value = e.target.value.slice(0, 10);
                      }
                    }}
                  />
                  <label
                    className="inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    htmlFor="analyze"
                  >
                    Enter your Number
                  </label>
                  <button
                    className="text-white bg-[#2fbd25] border-[#36DF29] hover:bg-[#2EBF24] hover:border-[#2EBF24] focus:shadow-[rgba(46,191,36,0.5)] active:bg-[#28A620] active:border-[#28A620] disabled:bg-[#36DF29] disabled:border-[#36DF29] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] rounded-full px-4 py-2"
                    type="submit"
                  >
                    Request a Callback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#ffffff]  mt-4">
        <div className="container  pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3]">
                Our eCommerce Development Services
              </h3>
              <p className=" mb-12">
                We can create any custom or universal features needed for smooth
                customer journeys. No matter what business or technology model
                you have, our team has just the right resources to do the job.
                eCommerce web services created and maintained by us are quick,
                reliable and secure.
              </p>
            </div>
          </div>

          <div className="!relative">
            <div
              className="shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[6rem] !h-[6rem] !absolute z-[1]"
              data-rellax-speed="1"
              style={{ bottom: "-0.5rem", right: "-2.2rem", zIndex: "0" }}
            ></div>
            <div
              className="shape bg-dot yellow rellax !w-[6rem] !h-[7rem] !absolute opacity-50"
              data-rellax-speed="1"
              style={{ top: "-0.5rem", left: "-2.5rem", zIndex: "0" }}
            ></div>
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] !text-center">
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 442.8"
                      data-inject-url={images.webbrowser}
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]"
                    >
                      <path
                        className="lineal-stroke"
                        d="M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M112.8 268.5h286.4v63.6H112.8z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z"
                      ></path>
                    </svg>
                    <h4>eCommerce Consulting</h4>
                    <p className="!mb-2">
                      Improve your operational efficiency and user experience
                      with our expert’s advice on business, technology and
                      operational aspects. <br /> <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <CgWebsite className=" !w-[4.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>eCommerce Implementation</h4>
                    <p className="!mb-2">
                      Get cloud platforms, payment gateways, POS systems, and
                      CRMs implemented to your eCommerce web stores and mobile
                      applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 511.9"
                      data-inject-url={images.seo}
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]"
                    >
                      <path
                        className="lineal-stroke"
                        d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"
                      ></path>
                      <circle
                        className="lineal-fill"
                        cx="297.1"
                        cy="214.9"
                        r="111.1"
                      ></circle>
                      <path
                        className="lineal-stroke"
                        d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"
                      ></path>
                    </svg>
                    <h4>eCommerce Marketing</h4>
                    <p className="!mb-2">
                      Stay ahead of the competition with our eCommerce marketing
                      team, which consists of SEO, PPC, and social media
                      experts. <br /> <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <MdOutlineSecurity className="!w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]" />

                    <h4>eCommerce Web Design</h4>
                    <p className="!mb-2">
                      Our eCommerce web designers enable you sell online using
                      responsive designs that look great on desktop and mobile
                      devices. <br /> <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <SiGoogleanalytics className=" icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>eCommerce Migration</h4>
                    <p className="!mb-2">
                      Our team ensures your eCommerce platforms are continuously
                      performing and secure, with proactive support and
                      strategic updates to meet business evolution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <CgWebsite className=" icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]" />

                    <h4>Maintenance & Management</h4>
                    <p className="!mb-2">
                      Our team ensures your eCommerce platforms are continuously
                      performing and secure, with proactive support and
                      strategic updates to meet business evolution. <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-[100%] z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-4 relative">
            <button
              className=" flex flex-end justify-end w-full"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className="my-8 text-center">
              <h4 className="text-3xl text-gray-800 font-extrabold">
                Contact Us
              </h4>
              <p className="text-sm text-gray-500 mt-4">
                Share your information and we will contact you soon.
              </p>
            </div>

            <form
              className="contact-form needs-validation"
              method="post"
              action="../../assets/php/contact.php"
              noValidate
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="messages"></div>
              <div className="flex flex-wrap mx-[-10px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_name1"
                      type="text"
                      name="user_name"
                      className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                      placeholder="Jane"
                      required
                      onInput={(e) => {
                        // Remove any characters that are not letters or spaces
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    />
                    <label
                      htmlFor="form_name1"
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      First Name *
                    </label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback">
                      Please enter your first name.
                    </div>
                  </div>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_lastname"
                      type="text"
                      name="user_lastname"
                      className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                      placeholder="Doe"
                      required
                      onInput={(e) => {
                        // Remove any characters that are not letters or spaces
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    />
                    <label
                      htmlFor="form_lastname"
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Last Name *
                    </label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback">
                      Please enter your last name.
                    </div>
                  </div>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_email1"
                      type="email"
                      name="user_email"
                      className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                      placeholder="jane.doe@example.com"
                      required
                      onInput={(e) => {
                        // Allow only letters, numbers, @, and .
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z0-9@.]/g,
                          ""
                        );
                      }}
                    />
                    <label
                      htmlFor="form_email1"
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Email *
                    </label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_email1"
                      type="text"
                      name="number"
                      className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                      placeholder="jane.doe@example.com"
                      required
                      onInput={(e) => {
                        // Remove non-numeric characters
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        // Truncate to 10 digits
                        if (e.target.value.length > 10) {
                          e.target.value = e.target.value.slice(0, 10);
                        }
                      }}
                    />
                    <label
                      htmlFor="form_email1"
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Number *
                    </label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                </div>

                <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <textarea
                      id="form_message1"
                      name="message"
                      className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                      placeholder="Your message"
                      style={{ height: "80px" }}
                      required
                      onInput={(e) => {
                        // Remove any characters that are not letters or spaces
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    ></textarea>
                    <label
                      htmlFor="form_message1"
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Message *
                    </label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback">
                      Please enter your messsage.
                    </div>
                  </div>
                </div>

                <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <section className="wrapper bg-[rgba(255,255,255)] opacity-100 mb-4">
        <div className="container pt-20 ">
          <div className="flex flex-wrap mx-[-7.5px] mt-[-50px] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full px-[7.5px] mt-[50px]">
              <figure className="m-0 p-0">
                <img
                  className="w-auto"
                  src={image3}
                  srcSet={image4}
                  alt="image"
                />
              </figure>
            </div>

            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full ml-auto px-[7.5px] mt-[50px]">
              <h2 className="text-[0.8rem] uppercase text-[#605dba] !mb-3 !leading-[1.35 tracking-[0.02rem]">
                Why Choose Us?
              </h2>
              <h3 className="xl:text-[1.9rem] text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-8">
                So here a few reasons why our valued customers choose us.
              </h3>
              <div className="flex flex-wrap mx-[-15px] mt-[-30px]">
                <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 409.6 332.7"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#fab758] text-yellow !mr-4"
                      >
                        <path
                          className="lineal-stroke"
                          d="M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z"
                        ></path>
                        <path
                          className="lineal-fill"
                          d="M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z"
                        ></path>
                        <path
                          className="lineal-fill"
                          d="M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z"
                        ></path>
                        <path
                          className="lineal-fill"
                          d="M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="!mb-1">Creativity</h4>
                      <p className="!mb-0">
                        We bring fresh, unique ideas to every project, making
                        your brand stand out.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <PiStrategyDuotone className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#54a8c7] text-aqua mr-5" />
                    </div>
                    <div>
                      <h4 className="!mb-1">Innovative Thinking</h4>
                      <p className="!mb-0">
                        We use cutting-edge technology and bold ideas to keep
                        you ahead in the market.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 408.1 409.6"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#45c4a0] text-green !mr-4"
                      >
                        <path
                          className="lineal-stroke"
                          d="M396.3 192.3h-33.4c-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6h19.7C363.2 71.1 268.1 7.3 170.1 26.6c-4.2.8-8.4 1.8-12.6 2.9L235.1 169h72c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6h-78.9c-4.2 0-8.1-2.3-10.1-6l-87.9-158c-3.1-5.6-1.1-12.6 4.5-15.7.7-.4 1.5-.7 2.3-1l8.1-2.5c107.8-33.1 222 27.4 255.1 135.2 2.7 8.7 4.8 17.6 6.3 26.6l1.3 8c1.1 6.3-3.2 12.3-9.5 13.3-.7.2-1.3.2-2 .2zM204.6 409.6c-20.4-.1-40.6-3.2-60.1-9.2l-8.1-2.5c-6.1-1.9-9.6-8.4-7.7-14.5.2-.8.6-1.5 1-2.2l88.4-158.3c2.1-3.7 5.9-5.9 10.1-5.9h33.2c6.4.2 11.4 5.5 11.2 11.9-.2 6.1-5.1 11.1-11.2 11.2H235l-78 139.8c96.8 26.3 196.6-30.9 222.9-127.8 1.1-4 2-8 2.8-12h-65.4c-6.4.2-11.7-4.8-11.9-11.2-.2-6.4 4.8-11.7 11.2-11.9h79.8c6.4 0 11.6 5.2 11.6 11.6 0 .6-.1 1.3-.2 1.9l-1.3 7.9C390 337 304.7 409.4 204.6 409.6z"
                        ></path>
                        <path
                          className="lineal-fill"
                          d="M93 361.8C6 300.1-14.5 179.6 47.1 92.6c12.7-17.9 28.4-33.5 46.3-46.2l6.2-4.4 90 161.7-90.4 162.5-6.2-4.4z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M99.2 377.8c-2.4 0-4.7-.7-6.7-2.1l-6.2-4.4C-5.9 305.9-27.7 178.2 37.7 86c13.5-19 30-35.5 49.1-48.9l6.2-4.4c5.2-3.7 12.4-2.4 16.1 2.8.2.3.5.7.7 1.1l90 161.7c1.9 3.5 1.9 7.8 0 11.3L109.4 372c-1.6 2.9-4.3 4.9-7.6 5.7-.8 0-1.7.1-2.6.1zM95.8 59C15.6 119.1-.7 232.9 59.4 313.1c10.2 13.7 22.4 25.8 36 36.1l81-145.4L95.8 59z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="!mb-1">Rapid Solutions</h4>
                      <p className="!mb-0">
                        We provide fast, effective solutions to meet your
                        business needs quickly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 321.7 409.6"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#3f78e0] !mr-4"
                      >
                        <path
                          className="lineal-fill"
                          d="M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z"
                        ></path>
                        <path
                          className="lineal-fill"
                          d="M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z"
                        ></path>
                        <path
                          className="lineal-stroke"
                          d="M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="!mb-1">Top-Notch Support</h4>
                      <p className="!mb-0">
                        Our dedicated support team is here to assist you every
                        step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-7.5px] mt-[-50px] xl:mt-0 lg:mt-0  items-center">
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full !mx-auto xl:!order-2 lg:!order-2 px-[7.5px] mt-[50px] xl:mt-0 lg:mt-0">
              <figure className="m-0 p-0">
                <img
                  className="w-auto"
                  src={image5}
                  srcSet={image5}
                  alt="image"
                />
              </figure>
            </div>

            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full mr-auto px-[7.5px] mt-[50px] xl:mt-0 lg:mt-0">
              <h2 className="text-[0.8rem] uppercase text-[#605dba] !mb-3 !leading-[1.35 tracking-[0.02rem] !mb-3">
                Our Solutions
              </h2>
              <h3 className="xl:text-[1.9rem] text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-5 xxl:pr-5">
                Just sit & relax while we take care of your business needs.
              </h3>
              <p className="!mb-6">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus. Maecenas sed
                diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna.
              </p>
              <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <h3 className="counter counter-lg text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none xl:text-[2.2rem] !mb-1">
                    99.7%
                  </h3>
                  <h6 className="text-[0.85rem] !mb-1">
                    Customer Satisfaction
                  </h6>
                  <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <h3 className="counter counter-lg text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none xl:text-[2.2rem] !mb-1">
                    4x
                  </h3>
                  <h6 className="text-[0.85rem] !mb-1">New Visitors</h6>
                  <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactusform2 />
      <Faq />
      <div
        onClick={() => setIsOpen(true)}
        className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e9d9'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#2FBD25] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons active-progress"
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#2FBD25] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: 20.8658,
            }}
          />
        </svg>
      </div>
    </>
  );
}

export default Ecomercepage;
