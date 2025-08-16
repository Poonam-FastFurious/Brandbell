/* eslint-disable react/no-unescaped-entities */
import { SlSocialDropbox } from "react-icons/sl";
import images from "../../Images/Image";
import PhaseOfdevelopments from "../../Shared/PhaseOfdevelopments";
import Servicedetails from "../../Shared/Servicedetails";
import Toppages from "../../Shared/Toppages";
import { RiVideoAddLine } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

function DigitalMarketing() {
  return (
    <>
      <Toppages Title="Digital Marketing" image={images.digitaldevbanner} />
      <Servicedetails
        Title={"Digital Marketing"}
        description={
          " At Brandbell, our digital marketing agency is dedicated to comprehensively understanding our clients' unique goals and challenges. By combining insightful solutions, data-driven innovative approaches, and cutting-edge technology, we deliver transformative results for startups and established enterprises worldwide. Discover the most suitable digital marketing services at our agency and consult with us to elevate your digital journey."
        }
        subpara1={
          "Customized digital marketing plans aligned with your unique business goals and challenges."
        }
        subpara2={
          "Optimizing strategies using data insights for measurable and impactful outcomes."
        }
        subpara3={
          "Leveraging the latest technology and creative methods to stay ahead of competitors."
        }
        subpara4={
          "Delivering results across diverse industries, for both startups and established businesses worldwide."
        }
        image={images.digtalmarketing}
      />
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container  pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-10 xl:!px-10">
                Best Performance Marketing
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
                      viewBox="0 0 512 511.9"
                      data-inject-url={images.seo}
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]"
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

                    <h4>SEO</h4>
                    <p className="!mb-2">
                      Through ethical SEO methods, we provide a thorough
                      strategy and seamless execution to boost your online
                      presence.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
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
                    <SlSocialDropbox className="con-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>SMO</h4>
                    <p className="!mb-2">
                      Whether a startup or established, Brandbell's SMO services
                      enhance engagement, ROI, and brand loyalty.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                      aria-label="Learn more about SMO Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <RiVideoAddLine className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]" />

                    <h4>DISPLAY ADS</h4>
                    <p className="!mb-2">
                      Brandbell also offers display ads, creating engaging
                      visuals across websites, apps, and social media to promote
                      your business.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                      aria-label="Learn more about Display add Solution"
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
                    <h4>PPC</h4>
                    <p className="!mb-2">
                      Brandbell also offers PPC (Pay-Per-Click) services,
                      driving targeted traffic to your website through paid ads
                      for maximum ROI.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                      aria-label="Learn more about PPC Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <MdMarkEmailRead className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>EMAIL MARKETING</h4>
                    <p className="!mb-2">
                      We also provides email marketing services, helping you
                      engage customers and drive conversions through email
                      campaigns.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                      aria-label="Learn more about EMail Marketing Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="icon btn btn-block btn-lg btn-soft-leaf pointer-events-none mb-5 !w-[2.6rem] !h-[2.6rem]">
                      {" "}
                      <i className="uil uil-swatchbook before:content-['\ed16']"></i>{" "}
                    </div>

                    <h4>GRAPHIC DESIGNING</h4>
                    <p className="!mb-0.5">
                      Our graphic design services offer custom logos, branding,
                      marketing materials, and web designs that clearly convey
                      your brand’s
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                      aria-label="Learn more about GRAPHIC DESIGNING Solution"
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
    </>
  );
}

export default DigitalMarketing;
