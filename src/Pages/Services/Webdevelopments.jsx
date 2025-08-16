/* eslint-disable react/no-unescaped-entities */
import images from "../../Images/Image";

import Toppages from "../../Shared/Toppages";
import PhaseOfdevelopments from "../../Shared/PhaseOfdevelopments";
import Servicedetails from "../../Shared/Servicedetails";

import { CgWebsite } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { Link } from "react-router-dom";

function Webdevelopments() {
  return (
    <>
      <Toppages Title="Web Developments" image={images.websitebanner} />
      <Servicedetails
        Title={"Website development"}
        description={
          " Looking for web application development in Delhi NCR? Boost your online presence with our comprehensive e-commerce and marketing solutions, crafted specifically to meet your business needs. From cutting-edge web development to impactful digital marketing strategies, we empower your brand to excel and grow in the digital landscape."
        }
        subpara1={
          "We deliver integrated digital and advertising solutions designed for the fast-paced nature of today’s market"
        }
        subpara2={
          "Our strategies are crafted to enhance your brand’s presence and drive consistent growth"
        }
        subpara3={
          "Focused on achieving tangible results that boost brand awareness, sales, and visibility."
        }
        subpara4={
          "Our solutions produce measurable and meaningful outcomes, ensuring sustained business success  "
        }
        image={images.websitedevservice}
      />

      <section className="wrapper !bg-[#ffffff] ">
        <div className="container  pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-10 xl:!px-10">
                Website Development Services
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
                    <h4>Custom Design</h4>
                    <p className="!mb-2">
                      Our custom design services provide unique, innovative
                      designs tailored to your needs. We ensure each project
                      blends aesthetics and functionality seamlessly, leaving a
                      lasting impression.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                      aria-label="Learn more about Custom Design"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <CgWebsite className=" !w-[4.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>Responsive Development</h4>
                    <p className="!mb-2">
                      Our services ensure your websites and apps adapt perfectly
                      across all devices, providing an optimal user experience
                      with engaging, functional, and visually appealing
                      solutions. <br /> <br />
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758] "
                      aria-label="Learn more about Responsive Development"
                    >
                      Learn More
                    </Link>
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
                    <h4>SEO Integration</h4>
                    <p className="!mb-2">
                      Boost your website's visibility and drive organic traffic
                      with our SEO integration services. We optimize content and
                      structure to improve search engine rankings and enhance
                      user engagement
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                      aria-label="Learn more about SEO Integration"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <MdOutlineSecurity className="!w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]" />

                    <h4>Content Management System (CMS)</h4>
                    <p className="!mb-2">
                      Our CMS services make website management simple. Easily
                      create, edit, and organize content with an intuitive
                      interface, ensuring consistency and enhancing user
                      experience without technical hassle.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                      aria-label="Learn more about Content Management System"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <SiGoogleanalytics className=" icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>Analytics & Tracking</h4>
                    <p className="!mb-2">
                      Our analytics and tracking services provide comprehensive
                      insights into user behavior, engagement, and traffic
                      sources, enabling data-driven decisions to optimize your
                      online presence and performance.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                      aria-label="Learn more about Analytics & Tracking"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <CgWebsite className=" icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]" />

                    <h4>E- commerce Solution</h4>
                    <p className="!mb-2">
                      Our e-commerce solutions enhance online presence with
                      seamless product management, secure payments, and
                      personalized customer experiences to drive sales
                      effectively.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                      aria-label="Learn more about E-commerce Solution"
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
      <PhaseOfdevelopments />
      <section className="wrapper !bg-[#ffffff]">
        <div className="container ">
          <div className="flex flex-wrap mx-[-15px] items-center mb-10">
            <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
              <h2 className="text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:text-[2.2rem]  !mb-0">
                Check out some of Our latest projects with creative ideas.
              </h2>
            </div>
          </div>

          <div className="card !bg-[#f6f3f9] mb-10">
            <div className="card-body p-14 pb-0">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full pb-14 self-center">
                  <div className="uppercase tracking-[0.02rem] text-[0.75rem] font-semibold mb-3 text-[#a07cc5]">
                    Web Design
                  </div>
                  <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                    FUSIONNET
                  </h3>
                  <p>
                    Maecenas faucibus mollis interdum sed posuere consectetur
                    est at lobortis. Scelerisque id ligula porta felis euismod
                    semper. Fusce dapibus tellus cursus.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-sm btn-violet text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:border-[#a07cc5] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  btn-icon btn-icon-end mb-0 !text-[0.75rem]"
                  >
                    See Project{" "}
                    <i className="uil uil-arrow-up-right before:content-['\e950']"></i>
                  </Link>
                </div>

                <div className="xl:w-7/12 xl:!ml-[8.33333333%] lg:w-7/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full !self-end">
                  <figure className="m-0 p-0">
                    <img
                      className="max-w-full h-auto"
                      src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/f1.png"
                      alt="image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="card !bg-[#edf2fc] mb-10">
            <div className="card-body p-14">
              <div className="flex flex-wrap mx-[-15px] mt-[-50px] items-center">
                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 xl:!ml-[8.33333333%] lg:!order-2 lg:!ml-[8.33333333%] mt-[50px]">
                  <div className="uppercase tracking-[0.02rem] text-[0.75rem] font-semibold mb-3 text-[#3f78e0]">
                    Web Design
                  </div>
                  <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                    CHARANSPARSH
                  </h3>
                  <p>
                    Maecenas faucibus mollis interdum sed posuere consectetur
                    est at lobortis. Scelerisque id ligula porta felis euismod
                    semper. Fusce dapibus tellus cursus.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-sm btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] btn-icon btn-icon-end mb-0 !text-[0.75rem]"
                  >
                    See Project{" "}
                    <i className="uil uil-arrow-up-right before:content-['\e950']"></i>
                  </Link>
                </div>

                <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[50px]">
                  <figure className="m-0 p-0">
                    <img
                      className="max-w-full h-auto"
                      src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/f2.png"
                      alt="image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-25px] mb-10">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full">
              <div className="card !bg-[#f3f8f5] mb-10 lg:!mb-0">
                <div className="card-body p-14 pb-0">
                  <div className="uppercase tracking-[0.02rem] text-[0.75rem] font-semibold mb-3 text-[#7cb798]">
                    Web Design
                  </div>
                  <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                    Missio Theme
                  </h3>
                  <p>
                    Maecenas faucibus mollis interdum sed posuere porta
                    consectetur cursus porta lobortis. Scelerisque id ligula
                    felis.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-sm btn-leaf text-white !bg-[#7cb798] border-[#7cb798] hover:text-white hover:bg-[#7cb798] hover:border-[#7cb798] focus:shadow-[rgba(113,165,142,1)] active:text-white active:bg-[#7cb798] active:border-[#7cb798] disabled:text-white disabled:bg-[#7cb798] disabled:border-[#7cb798] btn-icon btn-icon-end !text-[0.75rem] mb-10"
                  >
                    See Project{" "}
                    <i className="uil uil-arrow-up-right before:content-['\e950']"></i>
                  </Link>
                </div>

                <img
                  className="card-img-bottom"
                  src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/f3.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full">
              <div className="card !bg-[#fbf1f4] xl:!mb-0 lg:!mb-0">
                <div className="card-body p-14 pb-0">
                  <div className="uppercase tracking-[0.02rem] text-[0.75rem] font-semibold mb-3 text-[#d16b86]">
                    Web Design
                  </div>
                  <h3 className="h1 post-title !mb-3 !leading-[1.3]">
                    Storage App
                  </h3>
                  <p>
                    Maecenas faucibus mollis interdum sed posuere consectetur
                    est at lobortis. Scelerisque id ligula porta felis euismod
                    semper.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-sm btn-pink text-white !bg-[#d16b86] border-[#d16b86] hover:text-white hover:bg-[#d16b86] hover:border-[#d16b86] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#d16b86] active:border-[#d16b86] disabled:text-white disabled:bg-[#d16b86] disabled:border-[#d16b86] btn-icon btn-icon-end !text-[0.75rem] mb-10"
                  >
                    See Project{" "}
                    <i className="uil uil-arrow-up-right before:content-['\e950']"></i>
                  </Link>
                </div>

                <img
                  className="card-img-bottom"
                  src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/f4.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Webdevelopments;
