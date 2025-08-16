import images from "../../Images/Image";

const BenifitSection = () => {
  return (
    <section
      className="wrapper  bg-[#192335]  angled lower-end relative after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0
"
    >
       <div className="container py-[2.5rem]">
          <h2 className="!text-[.75rem] uppercase  tracking-[0.02rem] leading-[1.35] text-center text-white">
          Why Choose Us
          </h2>
          <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3]  xl:!px-10 text-center text-white">
          Benefits of Choosing Us
          </h3>
          <p className="text-center text-white">Brandbell Reality delivers cutting-edge AR, VR, and MR solutions with stunning visuals, real-time adaptability, and tailored immersive experiences.

</p>
        </div>
      <div className="container   min-h-[85vh]">
       
        <div className="relative flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center ">
          <div className=" relative xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            {/* card1 */}
            <div className=" absolute  card ">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:text-[1.3rem] !w-12 !h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                      <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                        01
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Team Profesional</h4>
                    <p className="!mb-0">
                      We unite our strengths to deliver better service for all
                      users. <br /> <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className=" absolute 2xl:right-16 card mt-6 ">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:text-[1.3rem] !w-12 !h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                      <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                        02
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Advanced Technology</h4>
                    <p className="!mb-0">
                      Innovative solutions designed to push boundaries, simplify
                      lives, and shape the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className=" absolute 2xl:right-32 card mt-6 ">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:text-[1.3rem] !w-12 !h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                      <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                        03
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Various Services</h4>
                    <p className="!mb-0">
                      We provide tailored solutions designed to meet your unique
                      needs and drive success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute  left-[33%]  2xl:top-44 image-hidden-on-sm ">
            <img
              src={images.benifitlarg}
              alt="..."
              className="max-w-full h-auto "
            />
          </div>

          <div className=" relative xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            {/* card4 */}
            <div className=" absolute card ">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:text-[1.3rem] !w-12 !h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                      <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                        04
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Safety & Comfort</h4>
                    <p className="!mb-0">
                      We provide reliable solutions that ensure security and
                      ease, prioritizing your well-being
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card5 */}
            <div className="  absolute card mt-6 2xl:left-16 ">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:text-[1.3rem] !w-12 !h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                      <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                        05
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Professional Service</h4>
                    <p className="!mb-0">
                      We provide expert services with a focus on quality,
                      reliability, and precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card6 */}
            <div className=" absolute 2xl:left-32 card mt-6 mb-6 ">
              <div className="card-body p-6">
                <div className="flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:text-[1.3rem] !w-12 !h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                      <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                        06
                      </span>
                    </span>
                  </div>
                  <div>
                    <h4 className="!mb-1">Very Easy & Flexible</h4>
                    <p className="!mb-0">
                      Our solutions are user-friendly and adaptable, designed
                      for your convenience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenifitSection;
