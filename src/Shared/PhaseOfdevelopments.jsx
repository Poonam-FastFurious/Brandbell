import { IoSearchCircleOutline } from "react-icons/io5";

import { PiStrategyDuotone } from "react-icons/pi";
import { SiAntdesign } from "react-icons/si";
import { GiThink } from "react-icons/gi";
import { MdImportantDevices } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { FaCalendarCheck } from "react-icons/fa";
function PhaseOfdevelopments() {
  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-4 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
          <div className="flex flex-wrap mx-[-15px] items-start mt-[-50px] ">
            <div
              className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!sticky lg:!sticky mt-[50px]"
              style={{ top: "8rem" }}
            >
              <h3 className="text-[calc(1.345rem_+_1.14vw)] !leading-[1.2] xl:text-[2.2rem] mb-5">
                PHASES OF DEVELOPMENT
              </h3>
              <p className="!mb-7">
                Our development process ensures high-quality results. From
                initial planning and design to development, testing, and
                deployment, each phase is meticulously managed to deliver
                exceptional solutions that meet your needs
              </p>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full ml-auto mt-[50px]">
              <div className="card !bg-[#fdf1f8] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <IoSearchCircleOutline className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e668b3] text-fuchsia mr-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2">USER RESEARCH </h3>
                    <p className="!mb-0">
                      Gain valuable insights into your target audience through
                      surveys, interviews, and usability testing. Effective and
                      user solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#eff7fa] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <PiStrategyDuotone className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#54a8c7] text-aqua mr-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2"> STRATEGY & PLANNING </h3>
                    <p className="!mb-0">
                      Develop comprehensive plans to guide projects, aligning
                      objectives and maximizing efficiency from start to finish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#fff8ee] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <SiAntdesign className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2">UX & WIREFRAMES</h3>
                    <p className="!mb-0">
                      Our UX and wireframe services ensure intuitive and
                      user-friendly designs. We create detailed blueprints to
                      guide development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#f3f8f5] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <GiThink className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf mr-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2">VISUALIZATION</h3>
                    <p className="!mb-0">
                      Transform complex data into clear, insightful visuals,
                      enhancing decision-making and strategy development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#fef4f2] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <MdImportantDevices className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#f78b77] text-orange mr-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2">IMPLEMENTATION</h3>
                    <p className="!mb-0">
                      Meticulous planning, resource allocation, and timely
                      delivery bring your vision to life with innovative
                      solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#f0f0f8] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <GrOptimize className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#605dba] text-grape mr-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2">OPTIMIZATION</h3>
                    <p className="!mb-0">
                    Enhance performance and efficiency with strategic solutions and continuous process refinement for maximum productivity
                    </p>
                  </div>
                </div>
              </div>
              <div className="card !bg-[#f0f0f8]">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <FaCalendarCheck className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#605dba] text-grape mr-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2">TESTING & DELIVERY</h3>
                    <p className="!mb-0">
                    Our testing and delivery services ensure quality and timely project completion. We perform thorough testing, address issues, and deliver exceptional results.
                    </p>
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

export default PhaseOfdevelopments;
