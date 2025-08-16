/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import images from "../../Images/Image";
import Contactusform2 from "../../Shared/Contactusform2";
import Toppages from "../../Shared/Toppages";
import CTA from "../../Components/CTA";

function Contactus() {
  return (
    <>
      <Toppages Title="Contact us" image={images.topimage} />
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px] mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] items-center">
            <div className="xl:w-7/12 lg:w-7/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full xl:!order-2 lg:!order-2 !relative mt-[50px]">
              <figure className="m-0 p-0">
                <img
                  className="w-auto sm:p-12 "
                  src={images.contactimage}
                  alt="image"
                />
              </figure>
            </div>

            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
              <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                Let’s Talk
              </h2>
              <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                Lets make something great together. We are
                <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)] purple">
                  trusted by
                </span>
                over 5000+ clients. Join them by using our services and grow
                your business.
              </p>
              <p>
                We believe every great collaboration starts with a conversation.
                Whether you're exploring IT solutions, need expert advice, or
                are looking for a trusted partner to scale your business, we're
                here to help. Let’s discuss your goals and challenges to create
                tailored solutions that drive success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 lg:!ml-0 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative">
              <div
                className="shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{ top: "-2rem", left: "-1.4rem" }}
              ></div>
              <figure className="!rounded-[.4rem] relative z-[2]">
                <img
                  className="!rounded-[.4rem] w-full max-w-full !h-auto"
                  src={images.About4}
                  alt="image"
                />
              </figure>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320.8 409.6"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/telemarketer.svg"
                className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4"
              >
                <path
                  className="lineal-fill"
                  d="M276.1 367.9v-8.5c0-63.6-52.1-115.7-115.7-115.7s-115.7 52-115.7 115.7v8.5c0 16.6 13.4 30 30 30h171.5c16.5 0 29.9-13.4 29.9-30z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M246.1 409.6H74.6c-23 0-41.7-18.7-41.7-41.7v-8.5c0-70.4 57.1-127.5 127.5-127.5S287.9 289 287.9 359.4v8.5c-.1 23-18.7 41.7-41.8 41.7zm-85.7-154.2c-57.4.1-103.9 46.6-104 104v8.5c0 10.1 8.2 18.2 18.2 18.2h171.5c10.1 0 18.2-8.2 18.2-18.2v-8.5c0-57.5-46.5-104-103.9-104zm145.5-109.9h-23.5c0-67.4-54.6-122-122-122s-122 54.6-122 122H14.9C14.9 65.3 80.2 0 160.4 0s145.5 65.3 145.5 145.5z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M160.4 251.3c-57 0-103.2-46.2-103.2-103.2S103.4 44.9 160.4 44.9s103.2 46.2 103.2 103.2c-.1 57-46.3 103.1-103.2 103.2zm0-182.9c-44 0-79.7 35.7-79.7 79.7s35.7 79.7 79.7 79.7 79.7-35.7 79.7-79.7c-.1-44-35.7-79.6-79.7-79.7z"
                ></path>
                <path
                  className="lineal-fill"
                  d="M68.3 130.4c0-5.6-2.9-10.8-7.6-13.8-15-9.4-34.7-4.9-44.1 10.1-3.2 5.1-4.9 11.1-4.9 17.1v21.5c0 17.7 14.4 32 32.1 32.1 6 0 11.8-1.7 16.9-4.9 4.7-3 7.6-8.2 7.6-13.8v-48.3z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M43.8 209.2C19.6 209.1 0 189.5 0 165.3v-21.5C0 119.6 19.5 100 43.7 100c8.2 0 16.3 2.3 23.3 6.7 8.2 5.1 13.1 14.1 13.1 23.8v48.4c.1 9.7-4.9 18.7-13.1 23.8-6.9 4.2-15 6.5-23.2 6.5zm0-85.8c-11.2 0-20.3 9.1-20.4 20.4v21.5c0 11.2 9.1 20.3 20.4 20.4 3.8 0 7.5-1.1 10.7-3.1 1.3-.9 2.1-2.3 2.1-3.9v-48.3c0-1.6-.8-3-2.1-3.9-3.2-2-6.9-3-10.7-3.1z"
                ></path>
                <path
                  className="lineal-fill"
                  d="M252.4 130.4c0-5.6 2.9-10.8 7.6-13.8 15-9.4 34.7-4.9 44.1 10.1 3.2 5.1 4.9 11.1 4.9 17.1v21.5c0 17.7-14.4 32-32.1 32.1-6 0-11.8-1.7-16.9-4.9-4.7-3-7.6-8.2-7.6-13.8v-48.3z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M276.9 209.2c-8.2 0-16.2-2.3-23.1-6.6-8.2-5.1-13.2-14.1-13.1-23.8v-48.4c-.1-9.7 4.9-18.7 13.1-23.8 20.5-12.8 47.5-6.6 60.3 13.9 4.4 7 6.7 15.1 6.7 23.3v21.5c0 24.2-19.6 43.8-43.9 43.9zm0-85.8c-3.8 0-7.5 1.1-10.7 3.1-1.3.9-2.1 2.3-2.1 3.9v48.4c0 1.6.8 3 2.1 3.9 9.5 5.9 22.1 3 28-6.5 2-3.2 3.1-7 3.1-10.8v-21.5c0-11.3-9.1-20.4-20.4-20.5z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M251.2 195.9h-83.3c-6.5 0-11.7-5.2-11.7-11.7s5.2-11.7 11.7-11.7h83.3c6.5 0 11.7 5.3 11.7 11.7 0 6.5-5.3 11.7-11.7 11.7z"
                ></path>
              </svg>
              <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-8">
                Convinced yet? Lets make something great together.
              </h2>
              <div className="flex flex-row">
                <div>
                  <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                    <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>
                  </div>
                </div>
                <div>
                  <h5 className="!mb-1">Address</h5>
                  <address className=" not-italic leading-[inherit] mb-4">
                    C-20/1 sector 62 Noida
                    <br className="hidden xl:block lg:block md:block" />
                    Uttar Pradesh - 201309
                  </address>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                    <i className="uil uil-phone-volume before:content-['\ec50']"></i>
                  </div>
                </div>
                <div>
                  <h5 className="!mb-1">Phone</h5>
                  <p>+91 73033 92444</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                    <i className="uil uil-envelope before:content-['\eac8']"></i>
                  </div>
                </div>
                <div>
                  <h5 className="!mb-1">E-mail</h5>
                  <p className="!mb-0">
                    <Link
                      to="mailto:Info@brandbell.in"
                      className="text-[#60697b]"
                    >
                      Info@brandbell.in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactusform2 />
      <CTA />
    </>
  );
}

export default Contactus;
