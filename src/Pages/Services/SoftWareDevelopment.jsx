import { MdInventory, MdOutlineInventory } from "react-icons/md";
import images from "../../Images/Image";
import Servicedetails from "../../Shared/Servicedetails";
import Toppages from "../../Shared/Toppages";
import { CgWebsite } from "react-icons/cg";
import { TfiMicrosoft } from "react-icons/tfi";
import PhaseOfdevelopments from "../../Shared/PhaseOfdevelopments";
import { Link } from "react-router-dom";

function SoftWareDevelopment() {
  return (
    <>
      <Toppages Title="SoftWare Development" image={images.softwarebanner} />
      <Servicedetails
        Title="SoftWare Development"
        description={
          " For companies aiming to disrupt markets or enhance portfolios, Brandbell offers end-to-end SaaS solutions. Our consultants create actionable roadmaps, develop scalable and secure software with intuitive UI/UX, and help businesses across industries adopt digital transformation, ensuring maximum ROI, customer satisfaction, and long-term growth."
        }
        subpara1={
          "Brandbell helps companies disrupt markets or enhance portfolios with innovative software"
        }
        subpara2={
          "Our consultants design cost-effective plans, guiding ideas from conception to deployment"
        }
        subpara3={
          "We develop adaptable, secure solutions with intuitive UI/UX for long-term growth"
        }
        subpara4={
          "Supporting industries like finance, healthcare, and retail, we ensure ROI and customer satisfaction"
        }
        image={images.software}
      />
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container  pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-10 xl:!px-10">
                Custom Software Development Services
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
                    <h4>HR & Payroll Management </h4>
                    <p className="!mb-2">
                      Our web development service help you create a website
                      user-friendly <br /> <br />
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                       aria-label="Learn more about HR & Payroll Management"
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
                      viewBox="0 0 512 427.5"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/settings-3.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]"
                    >
                      <path
                        className="lineal-fill"
                        d="M186.9 353.4h138.3V413H186.9z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"
                      ></path>
                    </svg>

                    <h4>CRM and ERP</h4>
                    <p className="!mb-2">
                      We craft custom, mobile apps for IOS and Android,
                      delivering seamless user experiences and functionality..
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                       aria-label="Learn more CRM and ERP Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <MdInventory className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]" />

                    <h4>Inventory Management</h4>
                    <p className="!mb-2">
                      Enhance user engagement with intuitive interfaces and
                      seamless , experiences that keep visitors coming back
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <TfiMicrosoft className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]" />

                    <h4> Management Software</h4>
                    <p className="!mb-2">
                      Our web development service help you create a website
                      user-friendly <br /> <br />
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                       aria-label="Learn more about Management Software Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <MdOutlineInventory className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>Customized Inventory</h4>
                    <p className="!mb-2">
                      We craft custom, mobile apps for IOS and Android,
                      delivering seamless user experiences and functionality..
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                       aria-label="Learn more aboutCustomized  Inventory Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <CgWebsite className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]" />

                    <h4>Web Application</h4>
                    <p className="!mb-2">
                      Enhance user engagement with intuitive interfaces and
                      seamless , experiences that keep visitors coming back
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                       aria-label="Learn more about Web Aplication Solution"
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
                     aria-label="Learn more about Android App Development Solution"
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

export default SoftWareDevelopment;
