import { Link } from "react-router-dom";

import { FaCreativeCommonsRemix, FaVrCardboard } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Service() {
  return (
    <>
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-10 xl:pt-12 lg:pt-12 md:pt-12 pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h2 className="!text-[.75rem] uppercase  !mb-3 tracking-[0.02rem] leading-[1.35]">
                Our Services?
              </h2>
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-10 xl:!px-10">
                The service we offer is specifically designed to meet your
                needs.
              </h3>
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
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] !text-center text-black">
              <div className="  md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className=" card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className=" card-body flex-[1_1_auto] p-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 442.8"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#300a0d] text-red !mb-3 m-[0_auto]"
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
                    <h4>Web Design</h4>
                    <p className="!mb-2">
                      Our web development service help you create a website
                      user-friendly <br /> <br />
                    </p>
                    <Link
                      to="/website-development"
                      aria-label="Learn more about website development services offered by Brandbell"
                      className="more hover text-black"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 327.4 512"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#aa7224] text-yellow !mb-3 m-[0_auto]"
                    >
                      <path
                        className="lineal-fill"
                        d="M313.7 72.3V47c0-18.4-14.9-33.2-33.2-33.2H47c-18.4 0-33.2 14.9-33.2 33.2v25.3h299.9zM13.8 398.4V465c0 18.4 14.9 33.2 33.2 33.2h233.4c18.4 0 33.2-14.9 33.2-33.2v-66.6H13.8z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M280.4 0H47C21.1 0 0 21.1 0 47v418c0 25.9 21.1 47 47 47h233.4c25.9 0 47-21.1 47-47V352.3c0-7.6-6.2-13.8-13.8-13.7-7.6 0-13.7 6.2-13.7 13.7v32.3H27.5V86.1h272.4V256c0 7.6 6.1 13.8 13.7 13.8s13.8-6.1 13.8-13.7V47c0-25.9-21-47-47-47zm19.5 412.1V465c0 10.8-8.7 19.5-19.5 19.5H47c-10.8 0-19.5-8.7-19.5-19.5v-52.9h272.4zM27.5 58.6V47c0-10.8 8.7-19.5 19.5-19.5h233.4c10.8 0 19.5 8.7 19.5 19.5v11.6H27.5z"
                      ></path>
                      <circle cx="163.7" cy="448.3" r="9.4"></circle>
                      <path
                        className="lineal-stroke"
                        d="M163.7 471.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2-10.4 23.2-23.2 23.2zm-25.4-248.1H69.5c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.8 6.2 13.8 13.8s-6.2 13.8-13.8 13.8h-55v32.1h55c7.6 0 13.8 6.2 13.8 13.8-.1 7.5-6.2 13.7-13.8 13.7z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M189.2 150H258v59.6h-68.8z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M258 223.4h-68.8c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.6-6.1 13.8-13.7 13.8zm-55-27.5h41.3v-32.1h-41.4l.1 32.1z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M69.5 265.6h68.8v59.6H69.5z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M138.3 339H69.5c-7.6 0-13.8-6.2-13.8-13.8v-59.7c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.7-6.1 13.9-13.7 13.9zm-55-27.5h41.2v-32.1H83.2l.1 32.1zM258 339h-68.8c-7.6 0-13.8-6.2-13.7-13.8 0-7.6 6.2-13.7 13.7-13.7h55v-32.1h-55c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.8 6.2 13.8 13.8v59.6c0 7.6-6.2 13.8-13.8 13.8z"
                      ></path>
                    </svg>

                    <h4>App Development </h4>
                    <p className="!mb-2">
                      We craft custom, mobile apps for IOS and Android,
                      delivering seamless user experiences and functionality..
                    </p>
                    <Link
                      to="/App-development"
                      aria-label="Learn more about app development services offered by Brandbell"
                      className="more hover  text-black"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 454.6"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]"
                    >
                      <path
                        className="lineal-fill"
                        d="M131.5 126.8h249V15.2H15.2v256.3h116.3z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M496.8 194.4c-8.4 0-15.2 6.8-15.2 15.2v158.3h-29.7c-8.4 0-15.2 6.8-15.2 15.2 0 .5 0 1.1.1 1.6l2.8 27.2-75.7-42.1c-2.3-1.3-4.8-1.9-7.4-1.9H146.7V142h233.8c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2H15.2C6.8 0 0 6.8 0 15.2v256.3c0 8.4 6.8 15.2 15.2 15.2h101v96.4c0 8.4 6.8 15.2 15.2 15.2h221l97.8 54.3c7.3 4.1 16.6 1.4 20.7-5.9 1.5-2.7 2.2-5.9 1.8-9l-4.1-39.5h28.1c8.4 0 15.2-6.8 15.2-15.2V209.6c.1-8.4-6.7-15.2-15.1-15.2zM30.4 256.3V30.4h334.8v81.2H131.5c-8.4 0-15.2 6.8-15.2 15.2v129.5H30.4z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M413.8 223.6H214.4c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.2-15.2 15.2zm0 85.9H214.4c-8.4 0-15.2-6.8-15.2-15.2S206 279 214.4 279h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.3-15.2 15.3z"
                      ></path>
                    </svg>
                    <h4>UI & UX Design</h4>
                    <p className="!mb-2">
                      Enhance user engagement with intuitive interfaces and
                      seamless , experiences that keep visitors coming back
                    </p>
                    <Link
                      to="/website-development"
                      aria-label="Learn more about website development services offered by Brandbell"
                      className="more hover text-black"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <FaVrCardboard className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3  m-[0_auto]" />

                    <h4>Ar & VR</h4>
                    <p className="!mb-2">
                      Elevate your digital presence with our Augmented and
                      Virtual Reality services, experiences and innovation.
                    </p>
                    <Link
                      to="/Ar-vr"
                      aria-label="Learn more about AR and VR services offered by Brandbell"
                      className="more hover text-black"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 511.9"
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
                    <h4>SEO Services</h4>
                    <p className="!mb-2">
                      Our SEO service will help you improve your websites
                      ranking in search engine results pages <br /> <br />
                    </p>
                    <Link
                      to="#"
                      aria-label="Learn more about SEO Services  offered by Brandbell"
                      className="more hover text-black "
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 362.5"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3  m-[0_auto]"
                    >
                      <path
                        className="lineal-stroke"
                        d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
                      ></path>
                    </svg>
                    <h4>Digital Marketing</h4>
                    <p className="!mb-2">
                      Our expert team specializes in PPC, SMM, Email Marketing,
                      and Content Marketing to help grow your business
                    </p>
                    <Link
                      to="/Digital-marketing"
                      className="more hover text-black"
                      aria-label="Learn more about digital marketing services offered by Brandbell"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <FaCreativeCommonsRemix className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3  m-[0_auto]" />

                    <h4>Creative Service </h4>
                    <p className="!mb-2">
                      Our experts use innovation to create experiences that will
                      stay with your customers <br /> <br />
                    </p>
                    <Link
                      to="/Craetive-Service"
                      className="more hover text-black"
                      aria-label="Learn more about creative services offered by Brandbell"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <CgWebsite className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]" />

                    <h4>Software Development</h4>
                    <p className="!mb-2">
                      Enhance user engagement with intuitive interfaces and
                      seamless , experiences that keep visitors coming back
                    </p>
                    <Link
                      to="/Software-Development"
                      className="more hover text-black"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
