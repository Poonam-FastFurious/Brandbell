import { useState } from "react";
import images from "../../Images/Image";
import { Link } from "react-router-dom";

function MainService() {
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container pb-20 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem]">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mb-[4.5rem] mt-[-9rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-mono text-[#e668b3] text-fuchsia !mb-3"
                  >
                    <path
                      className="fill-primary"
                      d="M152 0H29.33A29.32 29.32 0 000 29.33v165.33A29.32 29.32 0 0029.33 224h78.72l2.35-13.12a29.71 29.71 0 018.11-15.68l62.83-62.72V29.33A29.33 29.33 0 00152 0zM42.67 42.67h42.67a10.67 10.67 0 110 21.33H42.66a10.67 10.67 0 010-21.33zM96 149.33H42.67a10.67 10.67 0 110-21.33H96a10.67 10.67 0 110 21.33zm42.67-42.66h-96a10.67 10.67 0 010-21.34h96a10.67 10.67 0 110 21.34z"
                    ></path>
                    <path
                      className="fill-secondary"
                      d="M133.63 256a8 8 0 01-7.89-9.38l5.67-32.06a8 8 0 012.22-4.27l79.2-79.2c9.73-9.75 19.28-7.12 24.51-1.89l13.2 13.2a18.69 18.69 0 010 26.4l-79.2 79.2a7.83 7.83 0 01-4.27 2.22l-32 5.67a10.71 10.71 0 01-1.44.11zm32.05-13.65z"
                    ></path>
                  </svg>
                  <h4> AR & VR</h4>
                  <p className="!mb-2  text-[#333]">
                    Brandbell pioneers AR & VR solutions, transforming how
                    businesses and individuals engage with the digital and
                    physical worlds
                  </p>
                  <Link
                    to="#"
                    className="more hover  text-black"
                    aria-label="Learn more about AR & VR solutions by Brandbell"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.98 256"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-mono text-[#a07cc5] text-violet !mb-3"
                  >
                    <circle
                      className="fill-primary"
                      cx="128"
                      cy="26.67"
                      r="26.67"
                    ></circle>
                    <circle
                      className="fill-primary"
                      cx="202.67"
                      cy="176"
                      r="26.67"
                    ></circle>
                    <circle
                      className="fill-primary"
                      cx="53.33"
                      cy="176"
                      r="26.67"
                    ></circle>
                    <path
                      className="fill-primary"
                      d="M173.33 106.67H82.66a8 8 0 01-8-8v-5.33A29.35 29.35 0 01104 64h48a29.35 29.35 0 0129.33 29.32v5.33a8 8 0 01-8 8.02zM248 256h-90.67a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48A29.36 29.36 0 01256 242.67V248a8 8 0 01-8 8zm-149.33 0H8a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48a29.37 29.37 0 0129.33 29.33V248a8 8 0 01-8 8z"
                    ></path>
                    <path
                      className="fill-secondary"
                      d="M29.33 136.13a8 8 0 01-8-8 107.1 107.1 0 0161.73-96.77 8 8 0 116.73 14.51 91 91 0 00-52.48 82.26 8 8 0 01-7.98 8zm197.34 0a8 8 0 01-8-8 91 91 0 00-52.48-82.26 8 8 0 116.74-14.51 107.09 107.09 0 0161.73 96.77 8 8 0 01-8 8zM128 234.8a105.08 105.08 0 01-11.15-.58 8 8 0 011.66-15.9 93.73 93.73 0 0019.6-.06 8 8 0 011.76 15.9 110.68 110.68 0 01-11.87.64z"
                    ></path>
                  </svg>
                  <h4> Software Development </h4>
                  <p className="!mb-2 text-[#333]">
                    At Brandbell, we provide end-to-end development services,
                    from business analysis to software delivery maintenance and
                    support
                  </p>
                  <Link
                    to="/SoftWare-Development"
                    className="more hover text-black"
                    aria-label="Learn more about software development services offered by Brandbell"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-mono text-[#f78b77] text-orange !mb-3"
                  >
                    <path
                      className="fill-secondary"
                      d="M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z"
                    ></path>
                    <path
                      className="fill-primary"
                      d="M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z"
                    ></path>
                    <path
                      className="fill-secondary"
                      d="M95.25 208H96a1.8 1.8 0 00-.75.11z"
                    ></path>
                    <path
                      className="fill-primary"
                      d="M160.53 208v.11a.93.93 0 00-.53-.11z"
                    ></path>
                  </svg>
                  <h4>Digital Marketing</h4>
                  <p className="!mb-2 text-black">
                    Experience Brandbell’s digital marketing services in India,
                    where success meets revenue. By harnessing SEO, social media
                    and compelling content
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

            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-mono text-[#45c4a0] text-green !mb-3"
                  >
                    <path
                      className="fill-secondary"
                      d="M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"
                    ></path>
                    <path
                      className="fill-primary"
                      d="M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"
                    ></path>
                  </svg>
                  <h4>Creative Service</h4>
                  <p className="!mb-2 text-black">
                    Brandbell, Creative Services Provider, brings your brand to
                    life with innovative designs . From impactful logos and
                    brochures to stand out flyers
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
          </div>

          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
              <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase  !mb-3 !leading-[1.35]">
                Why Choose Brandbell?
              </h2>
              <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold mb-10 xl:!px-10 xxl:!px-20">
                Here are a few
                <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4  style-2 yellow mx-1">
                  reasons
                </span>
                why our customers choose Brandbell.
              </h3>
            </div>
          </div>

          <ul className="nav nav-tabs nav-tabs-bg flex justify-between nav-justified xl:flex-row lg:flex-row flex-col">
            <li className="nav-item mb-[20px]">
              <Link
                onClick={() => handleTabClick("tab1")}
                className={`nav-link  !flex flex-row ${
                  activeTab === "tab1" ? "active bg-gray-600" : ""
                }`}
                data-bs-toggle="tab"
                to="#tab2-1"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 255.98"
                    className="svg-inject icon-svg icon-svg-md !w-[2.2rem] !h-[2.2rem] solid-mono text-[#fab758] text-fuchsia !mr-4"
                  >
                    <circle
                      className="fill-primary"
                      cx="58.67"
                      cy="149.31"
                      r="32"
                    ></circle>
                    <path
                      className="fill-primary"
                      d="M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z"
                    ></path>
                    <circle
                      className="fill-primary"
                      cx="197.33"
                      cy="149.31"
                      r="32"
                    ></circle>
                    <path
                      className="fill-primary"
                      d="M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z"
                    ></path>
                    <path
                      className="fill-secondary"
                      d="M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4>Collect Ideas</h4>
                  <p className="  text-black">
                    First, we conduct research to understand what you need
                  </p>
                </div>
              </Link>
            </li>
            <li className="nav-item mb-[20px]">
              <Link
                onClick={() => handleTabClick("tab2")}
                className={`nav-link !flex flex-row ${
                  activeTab === "tab2" ? "active" : ""
                }`}
                data-bs-toggle="tab"
                to="#tab2-2"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="svg-inject icon-svg icon-svg-md !w-[2.2rem] !h-[2.2rem] solid-mono text-[#45c4a0] text-violet !mr-4"
                  >
                    <path
                      className="fill-primary"
                      d="M123.22 148.5A8 8 0 00116 144H19.36a8 8 0 00-8 8c0 57.34 46.94 104 104.66 104a104.67 104.67 0 0045.45-10.29 8 8 0 003.76-10.71z"
                    ></path>
                    <path
                      className="fill-secondary"
                      d="M152 19a8 8 0 00-8 8v95.39a7.93 7.93 0 00.8 3.49l41.73 85.95a8 8 0 0010.65 3.73c36.29-17.48 58.82-53.19 58.82-93.19C256 65.36 209.34 19 152 19z"
                    ></path>
                    <path
                      className="fill-primary"
                      d="M112 104V8a8 8 0 00-8-8A104.13 104.13 0 000 104a8 8 0 008 8h96a8 8 0 008-8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4>Data Analysis</h4>
                  <p>
                    After that, we analyze the data and deliver the required
                    content.
                  </p>
                </div>
              </Link>
            </li>
            <li className="nav-item mb-[20px]">
              <Link
                onClick={() => handleTabClick("tab3")}
                className={`nav-link !flex flex-row ${
                  activeTab === "tab3" ? "active" : ""
                }`}
                data-bs-toggle="tab"
                to="#tab2-3"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="svg-inject icon-svg icon-svg-md !w-[2.2rem] !h-[2.2rem] solid-mono text-[#e2626b] text-green !mr-4"
                  >
                    <path
                      className="fill-secondary"
                      d="M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"
                    ></path>
                    <path
                      className="fill-primary"
                      d="M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4>Finalize Product</h4>
                  <p>
                    We finalize the product based on the insights to ensure it
                    meets your needs.
                  </p>
                </div>
              </Link>
            </li>
          </ul>

          <div className="tab-content mt-6 xl:!mt-8 lg:!mt-8">
            <div
              className={`tab-pane fade ${
                activeTab === "tab1" ? "show active" : ""
              }`}
              id="tab2-1"
            >
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full">
                  <figure className="!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <img
                      className="!rounded-[.4rem]"
                      src={images.CollectIdeas}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full text-black">
                  <h2 className="!mb-3 !leading-[1.35]">Collect Ideas</h2>
                  <p className=" ">
                    We start by understanding your vision and requirements.
                    Through a collaborative process, we collect your ideas and
                    goals, ensuring that we fully comprehend the scope of your
                    project. Whether it’s a new product or a marketing strategy,
                    we take the time to listen, ask the right questions, and
                    define the best path forward
                  </p>
                  <ul className="pl-0 list-none bullet-bg bullet-soft-fuchsia">
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#fbe4f1] text-[#e668b3] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Brainstorming sessions
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#fbe4f1] text-[#e668b3] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Market research and competitor analysis
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#fbe4f1] text-[#e668b3] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Understanding target audience and needs
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    aria-label="Get in touch with Brandbell"
                    className="btn btn-fuchsia text-white !bg-[#c21878] border-[#c21878] hover:text-white hover:bg-[#9e155f] hover:border-[#9e155f] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#9e155f] active:border-[#9e155f] disabled:text-gray-500 disabled:bg-gray-400 disabled:border-gray-400 !mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "tab2" ? "show active" : ""
              }`}
              id="tab2-2"
            >
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full xl:!order-2 lg:!order-2">
                  <figure className="!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <img
                      className="!rounded-[.4rem]"
                      src={images.DataAnalysis}
                      srcSet={images.DataAnalysis}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full">
                  <h2 className="!mb-3 !leading-[1.35]">Data Analysis</h2>
                  <p>
                    Next, we dive into data-driven insights to fine-tune the
                    ideas and strategies. Using the latest analytical tools, we
                    examine trends, consumer behavior, and potential outcomes to
                    validate our concepts. Our goal is to ensure the solutions
                    we provide are not only creative but also grounded in data
                    that guarantees success.
                  </p>
                  <ul className="pl-0 list-none bullet-bg bullet-soft-violet">
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Data collection from reliable sources
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Advanced analytics and reporting
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Predictive modeling and trend analysis
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    aria-label="Get in touch with Brandbell"
                    className="btn btn-violet text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:border-[#a07cc5] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  !mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "tab3" ? "show active" : ""
              }`}
              id="tab2-3"
            >
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full">
                  <figure className="!rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <img
                      className="!rounded-[.4rem]"
                      src={images.FinalizeProduct}
                      srcSet={images.FinalizeProduct}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full">
                  <h2 className="!mb-3 !leading-[1.35]">Finalize Product</h2>
                  <p>
                    Finally, we refine and perfect the product or solution.
                    After thorough testing and feedback analysis, we ensure that
                    the final product is ready for launch. Our team pays
                    attention to every detail, from design and functionality to
                    performance, so your product performs optimally in the
                    market.
                  </p>
                  <ul className="pl-0 list-none bullet-bg bullet-soft-green">
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Prototype development and testing
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Final adjustments based on feedback
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#def4ee] text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Seamless product launch and post-launch support
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    aria-label="Get in touch with Brandbell"
                    className="btn btn-green text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:border-[#45c4a0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0]  !mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainService;
