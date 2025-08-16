import images from "../../Images/Image";
import Toppages from "../../Shared/Toppages";
import Servicedetails from "../../Shared/Servicedetails";
import PhaseOfdevelopments from "../../Shared/PhaseOfdevelopments";
import { TbDeviceMobileCog } from "react-icons/tb";
import { IoLogoApple } from "react-icons/io5";
import { GrAndroid } from "react-icons/gr";
import { Link } from "react-router-dom";

function Appdevelopments() {
  return (
    <>
      <Toppages Title="App Developments" image={images.appdevbanner} />
      <Servicedetails
        Title={" Mobile app development"}
        description={
          " As ,Top IT Service provider in Delhi NCR we offer expertise in Mobile app development both iOS and Android technologies, ensuring clients receive tailored solutions for seamless user experiences and staying updated with the latest innovations in both platforms."
        }
        subpara1={
          "We offer comprehensive mobile app development and advertising solutions designed to meet the needs of today’s fast-paced market."
        }
        subpara2={
          "Our focus is on achieving real results that enhance your app’s visibility, user engagement, and overall performance"
        }
        subpara3={
          "We help elevate your brand’s presence and foster growth through every app development strategy we implement."
        }
        subpara4={
          "Our solutions provide measurable, impactful outcomes, ensuring continuous success and growth for your business in the mobile space. "
        }
        image={images.appdev}
      />

      <section className="wrapper !bg-[#ffffff] ">
        <div className="container  pb-16 xl:pb-20 lg:pb-20 md:pb-20 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-10 xl:!px-10">
                Mobile app development
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
                    <TbDeviceMobileCog className=" icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 m-[0_auto]" />

                    <h4>Hybrid App Development</h4>
                    <p className="!mb-2">
                      Develop cross-platform apps with integrated,
                      high-performance solutions for seamless user experiences
                      and enhanced app visibility
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#e2626b] focus:text-[#e2626b] hover:text-[#e2626b]"
                       aria-label="Learn more about Hybrid App Development Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <IoLogoApple className=" icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 m-[0_auto]" />

                    <h4>Ios App Development</h4>
                    <p className="!mb-2">
                      Expert iOS app development for high-performance,
                      user-friendly applications, enhancing visibility and user
                      experience.
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#fab758] focus:text-[#fab758] hover:text-[#fab758]"
                       aria-label="Learn more about Ios App Development Solution"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <GrAndroid className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]" />

                    <h4>Android App Development</h4>
                    <p className="!mb-2">
                      Professional Android app development for efficient,
                      user-friendly applications that enhance visibility and
                      deliver user experience
                    </p>
                    <Link
                      to="#"
                      className="more hover text-[#45c4a0] focus:text-[#45c4a0] hover:text-[#45c4a0]"
                          aria-label="Learn more about Android App Development Solution"
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

export default Appdevelopments;
