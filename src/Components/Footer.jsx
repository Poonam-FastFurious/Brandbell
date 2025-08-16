import { Link } from "react-router-dom";
import logo from "../assets/img/brandbell.png";
function Footer() {
  return (
    <>
      <footer className="!bg-[#21262c] shrink-0">
        <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
          <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget text-[#cacaca]">
                <img
                  className="!mb-4"
                  src={logo}
                  srcSet={logo}
                  alt="image"
                  width="200" // Replace with the actual width of your logo
                  height="50"
                />
                <p className="!mb-4">
                  We create magic in engaging <br /> audiences and converting
                  clicks into <br /> clients. Are you ready to begin your <br />{" "}
                  upward journey?
                </p>
                <nav className="nav social social-white">
                  <Link
                    className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    to="https://x.com/brandbell1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Brandbell on X"
                  >
                    <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                  </Link>
                  <Link
                    className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    to="https://www.facebook.com/brandbelldesigning/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Brandbell on Facebook"
                  >
                    <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                  </Link>

                  <Link
                    className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    to="https://www.instagram.com/brandbell_official/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Brandbell on Instagram"
                  >
                    <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                  </Link>
                  <Link
                    className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    to="https://www.linkedin.com/company/brandbell/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Brandbell on LinkedIn"
                  >
                    <i className="uil uil-linkedin before:content-['\ebd1'] !text-white text-[1rem]"></i>
                  </Link>
                </nav>
              </div>
            </div>

            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget text-[#cacaca]">
                <h4 className="widget-title text-white !mb-3">Get in Touch</h4>
                <address className="xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] block mb-4">
                  C-20/1 sector 62 Noida Uttar Pradesh - 201309
                </address>
                <Link
                  className="text-[#cacaca] hover:text-[#3f78e0]"
                  to="mailto:first.last@email.com"
                >
                  Info@brandbell.in
                </Link>
                <br />
                +91 73033 92444
              </div>
            </div>

            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget text-[#cacaca]">
                <h4 className="widget-title text-white !mb-3">Other Page</h4>
                <ul className="pl-0 list-none   !mb-0">
                  <li>
                    <Link
                      className="text-[#cacaca] hover:text-[#3f78e0]"
                      to="/About-us"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mt-[0.35rem]">
                    <Link
                      className="text-[#cacaca] hover:text-[#3f78e0]"
                      to="#"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li className="mt-[0.35rem]">
                    <Link
                      className="text-[#cacaca] hover:text-[#3f78e0]"
                      to="/Services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="mt-[0.35rem]">
                    <Link
                      className="text-[#cacaca] hover:text-[#3f78e0]"
                      to="/TermsandConditions"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li className="mt-[0.35rem]">
                    <Link
                      className="text-[#cacaca] hover:text-[#3f78e0]"
                      to="/Privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget text-[#cacaca]">
                <h4 className="widget-title text-white !mb-3">
                  We Are Located
                </h4>
                <menu>
                  <li className="flex items-center !mb-5">
                    <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 368.16 368.16"
                      >
                        <path
                          d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                          data-original="#000000"
                        />
                        <path
                          d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <Link to="#" className="text-[#cacaca] ml-3">
                      <strong>NOIDA</strong>
                    </Link>
                  </li>{" "}
                  <li className="flex items-center !mb-5">
                    <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 368.16 368.16"
                      >
                        <path
                          d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                          data-original="#000000"
                        />
                        <path
                          d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <Link to="#" className="text-[#cacaca]  ml-3">
                      GURUGRAM
                    </Link>
                  </li>{" "}
                  <li className="flex items-center !mb-5">
                    <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 368.16 368.16"
                      >
                        <path
                          d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                          data-original="#000000"
                        />
                        <path
                          d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <Link to="#" className="text-[#cacaca] ml-3">
                      <strong>MUMBAI</strong>
                    </Link>
                  </li>
                </menu>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
