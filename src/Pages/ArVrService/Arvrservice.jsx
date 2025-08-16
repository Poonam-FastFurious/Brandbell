// import { Link } from "react-router-dom";
import Toppages from "../../Shared/Toppages";
import BenifitSection from "../Home/BenifitSection";
import images from "../../Images/Image";
import Whatwedo from "../Home/Whatwedo";

function Arvrservice() {
  return (
    <>
      <Toppages Title="AR & VR " image={images.avvrtopimage} />
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28  !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] leading-[1.35]">
                What We Do?
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
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] !text-center">
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px] group">
                <div
                  className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] group"
                  style={{
                    backgroundImage: `url(${images.vrimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "450px",
                    minHeight: "350px",
                  }}
                >
                  <div className="card-body  p-[40px] justify-end card-body  mt-auto flex flex-col text-white transition-all duration-300 group-hover:bg-[rgba(105,95,95,0.8)] group-hover:backdrop-blur-[0.5px] group-hover:bg-opacity-10">
                    <h4 className="text-white">Virtual Reality</h4>
                    <p className="!mb-2">
                      Brandbell Reality, an India-based VR service provider,
                      delivers cutting-edge VR solutions with high-definition
                      visuals, real-time adaptability, and immersive
                      experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div
                  className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] group"
                  style={{
                    backgroundImage: `url(${images.arimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "450px",
                    minHeight: "350px",
                  }}
                >
                  <div className="card-body  p-[40px] justify-end card-body  mt-auto flex flex-col text-white transition-all duration-300 group-hover:bg-[rgba(105,95,95,0.8)] group-hover:backdrop-blur-[0.5px] group-hover:bg-opacity-10">
                    <h4 className="text-white">Augumented Reality</h4>
                    <p className="!mb-2">
                      Bringing the digital world into the physical, enabling
                      seamless visualization and communication anytime,
                      anywhere.
                    </p>
                    {/* <Link
                      to="https://mixreality.brandbell.in"
                      target="_blank"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                    >
                      Learn More
                    </Link> */}
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div
                  className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] group "
                  style={{
                    backgroundImage: `url(${images.mrimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "450px",
                    minHeight: "350px",
                  }}
                >
                  <div className="card-body  p-[40px] justify-end card-body  mt-auto flex flex-col text-white transition-all duration-300 group-hover:bg-[rgba(105,95,95,0.8)] group-hover:backdrop-blur-[0.5px] group-hover:bg-opacity-10">
                    <h4 className="text-white">Mixed Reality</h4>
                    <p className="!mb-2">
                      Brandbell Reality provides cost-effective Mixed Reality
                      solutions, enhancing productivity and reducing errors in
                      industrial settings.
                    </p>
                    {/* <Link
                      to="https://mixreality.brandbell.in"
                      target="_blank"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                    >
                      Learn More
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 ">
          <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full !relative mt-[80px]">
              <div
                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
                data-rellax-speed="0"
                style={{
                  bottom: "-1.8rem",
                  right: "-1.5rem",
                  width: "85%",
                  height: "90%",
                }}
              ></div>
              <figure className="!rounded-[.4rem] relative z-[2]">
                <img
                  className="!rounded-[.4rem]"
                  src={images.vrlargimage}
                  srcSet={images.vrlargimage}
                  alt="image"
                />
              </figure>
            </div>

            <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full mt-[40px]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                Virtual Reality
              </h3>

              <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-10 xl:pt-28 lg:pt-28 md:pt-28 ">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px] xl:!order-2 lg:!order-2 !relative">
              <div
                className="shape !bg-[#edf2fc] !rounded-[50%] rellax !w-[10rem] !h-[10rem] absolute z-[1]"
                data-rellax-speed="1"
                style={{ top: "-2rem", right: "-1.9rem" }}
              ></div>
              <figure className="!rounded-[.4rem] z-[2] relative">
                <img
                  className="!rounded-[.4rem] "
                  src={images.arlargimage}
                  srcSet={images.arlargimage}
                  alt="image"
                />
              </figure>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                Augumented Reality
              </h2>
              <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-0 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full !relative mt-[80px]">
              <div
                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
                data-rellax-speed="0"
                style={{
                  bottom: "-1.8rem",
                  right: "-1.5rem",
                  width: "85%",
                  height: "90%",
                }}
              ></div>
              <figure className="!rounded-[.4rem] relative z-[2]">
                <img
                  className="!rounded-[.4rem]"
                  src={images.mrlargimage}
                  srcSet={images.mrlargimage}
                  alt="image"
                />
              </figure>
            </div>

            <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full mt-[40px]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                Mixed Reality
              </h3>

              <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BenifitSection />
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 ">
          <Whatwedo />
        </div>
      </section>
    </>
  );
}

export default Arvrservice;
