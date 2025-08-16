import { Link } from "react-router-dom";
import images from "../../Images/Image";
import PhaseOfdevelopments from "../../Shared/PhaseOfdevelopments";
import Servicedetails from "../../Shared/Servicedetails";
import Toppages from "../../Shared/Toppages";

function CreativeService() {
  return (
    <>
      <Toppages Title="Creative Services" image={images.creativebanner} />
      <Servicedetails
        Title="Creative Services"
        description={
          " We specialize in providing a comprehensive range of creative services tailored to help individuals, businesses, and organizations effectively communicate their message, engage their audience, and establish a memorable brand presence. Combining artistic vision with technical expertise, we deliver exceptional solutions designed to meet the unique needs of clients across diverse industries."
        }
        subpara1={
          "We provide custom creative services, including branding, design, content creation, and digital marketing, to meet your unique needs"
        }
        subpara2={
          "Our services help establish strong connections with your audience through compelling designs and strategic, relevant messaging."
        }
        subpara3={
          "We create consistent, distinctive brand identities that reflect your values and differentiate you from competitors."
        }
        subpara4={
          "Our experience spans various industries, allowing us to deliver creative solutions that address sector-specific challenges effectively"
        }
        image={images.creativeservicebanner}
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
                    <div className="icon btn btn-block btn-lg btn-soft-leaf pointer-events-none mb-5 !w-[2.6rem] !h-[2.6rem]">
                      <i className="uil uil-swatchbook before:content-['\ed16']"></i>
                    </div>

                    <h4> Graphic Design </h4>
                    <p className="!mb-0.5">
                      Our graphic design services provide unique logos,
                      branding, marketing materials, and web designs that
                      effectively communicate your brand’s identity
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                      aria-label="Learn more about GRAPHIC DESIGNING Solution"
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
                      viewBox="0 0 409.6 332"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/video-editing.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]"
                    >
                      <path
                        className="lineal-stroke"
                        d="M318 0H53.9C24.2.1.1 24.2 0 53.9v210.8c0 29.8 24.2 53.9 53.9 53.9H318c29.8 0 54-24.1 54-53.9V53.9C371.9 24.1 347.8 0 318 0zm31.3 264.7c0 17.3-14 31.3-31.3 31.3H54c-17.3 0-31.3-14-31.3-31.3V53.9c0-17.3 13.9-31.3 31.2-31.3H318c17.3 0 31.3 14 31.3 31.3v210.8z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M152.5 189.9v-65.7c0-3.8 3-6.8 6.8-6.8 1.2 0 2.3.3 3.3.9l57.9 32.8c3.3 1.9 4.4 6 2.6 9.3-.6 1.1-1.5 1.9-2.6 2.6l-57.9 32.8c-3.3 1.9-7.4.7-9.3-2.6-.5-1-.8-2.1-.8-3.3z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M159.3 208c-10 0-18.1-8.1-18.1-18.1v-65.7c0-10 8.1-18.1 18.1-18.1 3.1 0 6.2.8 8.9 2.3l57.9 32.9c8.7 4.9 11.8 16 6.8 24.7-1.6 2.9-4 5.2-6.8 6.8l-57.9 32.8c-2.7 1.6-5.8 2.4-8.9 2.4zm4.5-76v50.1L208 157l-44.2-25z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M186 261.2c-56.3 0-101.9-45.7-101.9-101.9.2-6.3 5.4-11.2 11.7-11 6 .2 10.8 5 11 11 0 43.8 35.5 79.3 79.3 79.3s79.3-35.5 79.3-79.3S229.8 80 186 80c-6.3-.2-11.2-5.4-11-11.7.2-6 5-10.8 11-11 56.3.6 101.5 46.6 100.9 102.9-.5 55.6-45.4 100.5-100.9 101z"
                      ></path>
                      <path
                        className="lineal-fill"
                        d="M201.7 314.2l-30.6 6.3c-2.2.5-4.3-1-4.8-3.2-.1-.5-.1-1.1 0-1.6l6.3-30.6c.4-1.9 1.3-3.6 2.7-5L362.2 93.2c6.2-6.2 16.3-6.2 22.5 0l8.9 8.9c6.2 6.2 6.2 16.3 0 22.5L206.7 311.5c-1.3 1.4-3.1 2.3-5 2.7z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M401.6 94.1l-8.9-8.9c-10.6-10.6-27.9-10.6-38.5 0l-20.5 20.5c-.8.5-1.6 1.1-2.3 1.9-.5.6-1 1.2-1.4 1.8L167.3 272.2c-3 2.9-5 6.6-5.8 10.7l-6.3 30.6c-.2 1-.3 2.1-.3 3.1 0 8.5 6.9 15.4 15.4 15.4 1 0 2.1-.1 3.1-.4l30.6-6.3c4-.9 7.8-2.9 10.7-5.8l163.8-163.8c.3-.2.5-.4.8-.7s.6-.6.8-.9l21.5-21.5c10.6-10.6 10.6-27.9 0-38.5zM199.1 303.3l-19.4 4 4-19.4L340 131.7l15.4 15.4-156.3 156.2zm186.6-186.6L371.3 131 356 115.7l14.4-14.4c.8-.8 2-1.3 3.2-1.3s2.3.4 3.2 1.3l8.9 8.9c1.8 1.8 1.8 4.7 0 6.5z"
                      ></path>
                    </svg>

                    <h4>Motion Graphics </h4>
                    <p className="!mb-2">
                      Our motion graphics services provide engaging animations,
                      including explainer videos, logo animations, and
                      promotional content to enhance brand communication.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                      aria-label="Learn more about MOTION GRAPHIC DESIGNING Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="icon btn btn-block btn-lg btn-soft-green pointer-events-none mb-5 !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green ">
                      {" "}
                      <i className="uil uil-presentation-play before:content-['\ec6b']"></i>{" "}
                    </div>

                    <h4> Animated Video – 2D</h4>
                    <p className="!mb-0">
                      Our 2D animated video services Provide engaging, vibrant
                      animations to simplify concepts and promote your brand.
                      <br /> <br />
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
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="icon btn btn-block btn-lg btn-soft-red pointer-events-none mb-5 !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green ">
                      {" "}
                      <i className="uil uil-presentation-play before:content-['\ec6b']"></i>{" "}
                    </div>

                    <h4> Animated Video – 3D</h4>
                    <p className="!mb-0">
                      Our 3D animated video services Provide immersive,
                      high-quality animations to bring your ideas and products
                      to life.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                       aria-label="Learn more about Animated Video Solution"
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
                      viewBox="0 0 507.4 512"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/puzzle-2.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#54a8c7]  !mb-3 m-[0_auto]"
                    >
                      <path
                        className="lineal-fill"
                        d="M257.9 15.2v65.1c-28.7-15.6-64.7-5-80.3 23.8s-5 64.7 23.8 80.3c17.6 9.6 38.9 9.6 56.6 0v65.1h59.9c-8.4-31.6 10.5-64 42.1-72.4 31.6-8.4 64 10.5 72.4 42.1 2.6 9.9 2.6 20.4 0 30.3h59.9V70.7c0-30.7-24.9-55.5-55.5-55.5H257.9z"
                      ></path>
                      <path
                        className="lineal-stroke"
                        d="M436.7 0h-366C31.7 0 0 31.7 0 70.7v370.6c0 39 31.7 70.7 70.7 70.7h188.1c8.4 0 15.2-6.8 15.2-15.1V453c5.5 1 11.2 1.3 16.8 1 17.5-.9 34.2-7.9 47.1-19.9 30.1-28 31.7-75.1 3.7-105.2-23.2-24.8-60.2-30.8-90-14.6-7.3 4-10.1 13.2-6.1 20.6 4 7.4 13.2 10.1 20.6 6.1 7.4-4 15.7-5.8 24.1-5.2 24.3 1.7 42.6 22.8 40.9 47-1.5 21.8-19.8 39.8-41.7 40.8-8.1.4-16.1-1.4-23.2-5.3-2.2-1.2-4.7-1.8-7.3-1.8-8.4 0-15.2 6.8-15.2 15.2v49.9h-173c-22.3 0-40.3-18.1-40.3-40.3V264.6h28.7c-.5 2.6-.8 5.2-1 7.8-2.9 41 28 76.6 69 79.5 1.8.1 3.6.2 5.3.2 18.8.1 37-7.1 50.7-20 24.8-23.2 30.8-60.1 14.6-89.9-.1-.2-.2-.3-.3-.5-4.1-7.3-13.4-9.9-20.7-5.7-7.3 4.1-9.9 13.4-5.7 20.7 4 7.4 5.8 15.8 5.2 24.2-1.7 24.3-22.8 42.5-47.1 40.8-21.8-1.5-39.8-19.8-40.8-41.7-.4-8.1 1.4-16.1 5.2-23.3 1.2-2.2 1.9-4.7 1.9-7.3 0-8.4-6.8-15.2-15.2-15.2H30.4V70.7c0-22.3 18.1-40.3 40.3-40.3h172v28.7c-8.7-1.6-17.6-1.6-26.2 0-40.5 7.2-67.4 45.9-60.1 86.4s45.9 67.4 86.4 60.1v43.9c0 8.4 6.8 15.2 15.2 15.2h59.9c1.6 0 3.2-.3 4.7-.7 8-2.6 12.3-11.2 9.7-19.2-.6-2.5-1-5.1-1.2-7.7-1.5-24.3 16.9-45.2 41.2-46.7.9-.1 1.8-.1 2.7-.1 3.8 0 7.6.5 11.3 1.5 23.5 6.2 37.5 30.4 31.3 53.9-.3 1.3-.5 2.6-.5 3.9 0 8.4 6.8 15.2 15.2 15.2h59.9c8.4 0 15.2-6.8 15.2-15.2V70.7c-.1-39-31.7-70.7-70.7-70.7zM477 234.2h-27.5c0-41.1-33.3-74.4-74.4-74.4-1.5 0-3 0-4.6.1-36 2.2-65.9 30.9-69.5 66.8-.2 2.5-.4 5-.4 7.5h-27.5v-49.9c0-2.5-.6-5-1.8-7.3-4-7.4-13.2-10.1-20.6-6.1-7.4 4-15.7 5.8-24.1 5.2-24.3-1.7-42.6-22.8-40.9-47 1.5-21.8 19.8-39.8 41.7-40.8 8.1-.4 16.1 1.4 23.2 5.3 2.2 1.2 4.7 1.8 7.3 1.8 8.4 0 15.2-6.8 15.2-15.2V30.4h163.6c22.3 0 40.3 18.1 40.3 40.3v163.5z"
                      ></path>
                    </svg>

                    <h4> Logo Design</h4>
                    <p className="!mb-2">
                      Our logo design services create unique, memorable logos
                      that effectively represent your brands identity and
                      values.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                       aria-label="Learn more about Logo DESIGNING Solution"
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
                      viewBox="0 0 512 454.6"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/chat-2.svg"
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
                    <h4>Brochure Design</h4>
                    <p className="!mb-2">
                      Our brochure design services Provide visually appealing,
                      informative brochures that effectively showcase your
                      services.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                       aria-label="Learn more about Brochure DESIGNING Solution"
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

export default CreativeService;
